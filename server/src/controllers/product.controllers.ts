import { Request, NextFunction, Response } from 'express';
import { RequestExt } from '../types/req-ext';
import ProductModel from '../models/product.model';
import joi, { string } from 'joi';
const _ = require('underscore');
import { validateMongoId } from '../utils/validateMongoId';
import slugify from 'slugify';
import { BadRequestError } from '../errors';
import { match } from 'assert';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // filtering
    const queryObj = {
      ...req.query,
    };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((ele: string) => delete queryObj[ele]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|lte|gt|lt)\b/g,
      (match: any) => `$${match}`
    );
    let query = ProductModel.find(JSON.parse(queryStr)).populate(
      'category brand'
    );
    // sorting
    if (req.query.sort) {
      let sortBy = req.query.sort as string;
      sortBy = sortBy.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }
    //pagination
    const page: any = req.query.page;
    const limit: any = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await ProductModel.countDocuments();
      if (skip >= productCount) {
        return next(new BadRequestError('This page does not exists!'));
      }
    }
    const products = await query;
    if (products) {
      res.status(201);
      res.json(products);
      return;
    }
    return next(new BadRequestError('No products found!'));
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (validateMongoId(req.params.id)) {
      const product = await ProductModel.findById({
        _id: req.params.id,
        is_active: true,
      })
        .populate('brand category')
        .exec();
      if (product) {
        res.status(201);
        res.json(product);
        return;
      }
      return next(new BadRequestError('No product found!'));
    } else {
      return next(new BadRequestError('Invalid id!'));
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const create = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    if (!req.files && _.isEmpty(req.files)) {
      return next(new BadRequestError('No file uploaded !!'));
    }
    if (req?.files?.length! < 1) {
      return next(new BadRequestError('Please upload atleast 1 file!!'));
    }
    let imagePath: any = [];
    if (req?.files?.length!) {
      imagePath = (req.files as any[]).map((file: any) => {
        return { img: `product/${file.filename}` };
      });
    }

    const schema = joi.object({
      title: joi.string().required(),
      description: joi.string().required(),
      price: joi.number().required(),
      salePrice: joi.number(),
      brand: joi.any().required(),
      category: joi.any().required(),
      quantity: joi.number().required(),
      SKU: joi.string(),
      color: joi.string(),
      images: joi.array().required(),
    });
    const { error, value } = schema.validate({
      ...req.body,
      images: imagePath,
    });
    if (error) {
      return next(new BadRequestError(error.details[0].message));
    }
    const { title } = value;
    let isExists = await ProductModel.findOne({
      title,
      is_active: true,
    }).exec();

    if (isExists) {
      return next(new BadRequestError('Product already exists!'));
    }
    const slug = slugify(title, { lower: true, trim: true });
    const product = await new ProductModel({
      ...value,
      slug,
      createdBy: req.user?.id,
    }).save();
    if (product) {
      res.status(201);
      return res.json('Product added successfully !');
    }
    return next(new BadRequestError('Problem while adding product!'));
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};
const update = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    let imagePath: any = [];
    if (req.files && _.isEmpty(req.files)) {
      if (req.files.length > 1) {
        imagePath = (req.files as any[]).map((file: any) => {
          return { img: `product/${file.filename}` };
        });
      }
    }

    const schema = joi.object({
      id: joi.string().required(),
      title: joi.string().required(),
      description: joi.string().required(),
      price: joi.number().required(),
      salePrice: joi.number(),
      SKU: joi.string().required(),
      color: joi.string().required(),
      brand: joi.string().required(),
      category: joi.string().required(),
      quantity: joi.number(),
      sold: joi.string(),
      images: joi.array().required(),
    });
    const { error, value } = schema.validate({
      ...req.body,
      images: imagePath,
    });
    if (error) {
      return next(new BadRequestError(error.details[0].message));
    }
    const { title, id } = value;
    if (validateMongoId(id)) {
      let isExists = await ProductModel.findOne({
        title,
        is_active: true,
        _id: { $ne: id },
      }).exec();
      if (isExists) {
        return next(new BadRequestError('Product already exists!'));
      }
      const slug = slugify(title, { lower: true, trim: true });
      let product = await ProductModel.findByIdAndUpdate(
        { _id: id },
        {
          ...value,
          slug,
          updatedBy: req.user?.id,
        },
        { new: true }
      );
      if (product) {
        res.status(201);
        return res.json('Product updated successfully !');
      }
      return next(new BadRequestError(`Problem while creating product`));
    } else {
      return next(new BadRequestError('Invalid id!'));
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const remove = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const schema = joi.object({
      id: joi.string().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      res.status(400);
      return next(new BadRequestError(error.details[0].message));
    }
    const { id } = value;
    if (validateMongoId(id)) {
      let product = await ProductModel.findByIdAndUpdate(
        { _id: id },
        {
          isActive: false,
          updatedBy: req.user?.id,
        },
        { new: true }
      );
      if (product) {
        res.status(201);
        return res.json('Product deleted successfully !');
      }
      res.status(400);
      return next(new BadRequestError('No product found with given id !'));
    } else {
      res.status(400);
      return next(new BadRequestError('Invalid id!'));
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

export { getAll, create, update, getById, remove };
