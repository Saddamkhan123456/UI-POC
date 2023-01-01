import { Request, NextFunction, Response } from 'express';
import { RequestExt } from '../types/req-ext';
import CategoryModel from '../models/category.model';
import joi from 'joi';
import { validateMongoId } from '../utils/validateMongoId';
import { BadRequestError } from '../errors';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await CategoryModel.find({ isActive: true }).exec();
    if (categories) {
      res.status(201);
      res.json({ categories });
      return;
    }
    return next(new BadRequestError('No categories found!'));
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (validateMongoId(req.params.id)) {
      const category = await CategoryModel.findById({
        _id: req.params.id,
        is_active: true,
      }).exec();
      if (category) {
        res.status(201);
        res.json({ category });
        return;
      }
      return next(new BadRequestError('No category found!'));
    } else {
      return next(new BadRequestError('Invalid id!'));
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const create = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const schema = joi.object({
      title: joi.string().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      return next(new BadRequestError(error.details[0].message));
    }
    const { title } = value;
    let isExists = await CategoryModel.findOne({
      title,
      isActive: true,
    }).exec();
    if (!isExists) {
      const category = await new CategoryModel({
        title,
        createdBy: req.user?.id,
      }).save();
      if (category) {
        res.status(201);
        return res.json('Category added successfully !');
      }
      return next(new BadRequestError('Problem while adding category!'));
    }
    return next(new BadRequestError('Category allready exists !'));
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

const update = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const schema = joi.object({
      id: joi.string().required(),
      title: joi.string().required(),
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
      return next(new BadRequestError(error.details[0].message));
    }
    const { title, id } = value;
    if (validateMongoId(id)) {
      let isExists = await CategoryModel.findOne({
        title,
        _id: { $ne: id },
      }).exec();
      if (!isExists) {
        let category = await CategoryModel.findByIdAndUpdate(
          { _id: id },
          {
            title,
            updatedBy: req.user?.id,
          },
          { new: true }
        );
        if (category) {
          res.status(201);
          return res.json('Category updated successfully !');
        }
        return next(
          new BadRequestError(`category with given id: ${id} not Exists!`)
        );
      }
      return next(
        new BadRequestError(
          `category with given title: ${title} already Exists!`
        )
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
      let category = await CategoryModel.findByIdAndUpdate(
        { _id: id },
        {
          isActive: false,
          updatedBy: req.user?.id,
        },
        { new: true }
      );
      if (category) {
        res.status(201);
        return res.json('Category deleted successfully !');
      }
      return next(new BadRequestError('No category found !'));
    } else {
      return next(new BadRequestError('Invalid id!'));
    }
  } catch (error) {
    return next(new Error('Somthing went wrong'));
  }
};

export { getAll, create, update, getById, remove };
