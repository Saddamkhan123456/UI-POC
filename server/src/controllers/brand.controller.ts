import { Request, NextFunction, Response } from 'express';
import { RequestExt } from '../types/req-ext';
import BrandModel from '../models/brand.model';
import joi from 'joi';
import { validateMongoId } from '../utils/validateMongoId';
import { BadRequestError } from '../errors';
import _ from 'underscore';
import { Brand } from '../types/brand';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const brands = await BrandModel.find({ isActive: true }).exec();
    if (brands) {
      res.status(201);
      res.json(brands);
      return;
    }
    return next(new BadRequestError('No brands found!'));
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (validateMongoId(req.params.id)) {
      const brand = await BrandModel.findById({
        _id: req.params.id,
        is_active: true,
      }).exec();
      if (brand) {
        res.status(201);
        res.json(brand);
        return;
      }
      return next(new BadRequestError('No brand found!'));
    } else {
      return next(new BadRequestError('Invalid id!'));
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const create = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    if (!req.file && _.isEmpty(req.file)) {
      return next(new BadRequestError('No file uploaded !!'));
    }
    const schema = joi.object({
      title: joi.string().required(),
      image: joi.any().required(),
    });

    const { error, value } = schema.validate({
      ...req.body,
      image: `brand/${req?.file?.filename!}`,
    });
    if (error) {
      return next(new BadRequestError(error.details[0].message));
    }
    const { title } = value;
    let isExists = await BrandModel.findOne({
      title,
      isActive: true,
    }).exec();
    if (!isExists) {
      const category = await new BrandModel({
        ...value,
        createdBy: req.user?.id,
      }).save();
      if (category) {
        res.status(201);
        return res.json('Brand added successfully !');
      }
      return next(new BadRequestError('Problem while adding brand!'));
    }
    return next(new BadRequestError('Brand allready exists !'));
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const update = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const schema = joi.object({
      id: joi.string().required(),
      title: joi.string().required(),
      image: joi.any(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) {
      return next(new BadRequestError(error.details[0].message));
    }
    const { title, id } = value;
    if (validateMongoId(id)) {
      let isExists: any = await BrandModel.findOne({
        title,
        _id: { $ne: id },
      }).exec();
      if (!isExists) {
        let category = await BrandModel.findByIdAndUpdate(
          { _id: id },
          {
            ...value,
            image: req.file ? `brand/${req?.file?.filename!}` : isExists.image,
            updatedBy: req.user?.id,
          },
          { new: true }
        );
        if (category) {
          res.status(201);
          return res.json('Brand updated successfully !');
        }
        return next(
          new BadRequestError(`Brand with given id: ${id} not Exists!`)
        );
      }
      return next(
        new BadRequestError(`Brand with given title: ${title} already Exists!`)
      );
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
      return next(new BadRequestError(error.details[0].message));
    }
    const { id } = value;
    if (validateMongoId(id)) {
      let category = await BrandModel.findByIdAndUpdate(
        { _id: id },
        {
          isActive: false,
          updatedBy: req.user?.id,
        },
        { new: true }
      );
      if (category) {
        res.status(201);
        return res.json('Brand deleted successfully !');
      }
      return next(new BadRequestError('No brand found !'));
    } else {
      return next(new BadRequestError('Invalid id!'));
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

export { getAll, create, update, getById, remove };
