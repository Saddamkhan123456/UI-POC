import { Request, NextFunction, Response } from 'express';
import { RequestExt } from '../interfaces/req-ext';
import CategoryModel from '../models/category.model';
import joi from 'joi';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const categories = await CategoryModel.find({ isActive: true }).exec();
  if (categories) {
    res.status(201);
    res.json({ categories });
    return;
  }
  res.status(400);
  return next(new Error('No categories found!'));
};

const getById = async (req: Request, res: Response, next: NextFunction) => {
  const category = await CategoryModel.findById({
    _id: req.params.id,
    is_active: true,
  }).exec();
  if (category) {
    res.status(201);
    res.json({ category });
    return;
  }
  res.status(400);
  return next(new Error('No category found!'));
};

const create = async (req: RequestExt, res: Response, next: NextFunction) => {
  const schema = joi.object({
    title: joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(400);
    return next(new Error(error.details[0].message));
  }
  const { title } = value;
  let isExists = await CategoryModel.findOne({ title, isActive: true }).exec();
  if (!isExists) {
    const category = await new CategoryModel({
      title,
      user: req.user?.id,
    }).save();
    if (category) {
      res.status(201);
      return res.json('Category added successfully !');
    }
    res.status(400);
    return next(new Error('Problem while adding category!'));
  }
  res.status(400);
  return next(new Error('Category allready exists !'));
};

const update = async (req: RequestExt, res: Response, next: NextFunction) => {
  const schema = joi.object({
    id: joi.string().required(),
    title: joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(400);
    return next(new Error(error.details[0].message));
  }
  const { title, id } = value;
  let isExists = await CategoryModel.findOne({
    title,
    _id: { $ne: id },
  }).exec();
  if (!isExists) {
    let category = await CategoryModel.findByIdAndUpdate(
      { _id: id },
      {
        title,
        user: req.user?.id,
      },
      { new: true }
    );
    if (category) {
      res.status(201);
      return res.json('Category updated successfully !');
    }
    res.status(400);
    return next(new Error(`category with given id: ${id} not Exists!`));
  }
  res.status(400);
  return next(new Error(`category with given title: ${title} already Exists!`));
};

const remove = async (req: RequestExt, res: Response, next: NextFunction) => {
  const schema = joi.object({
    id: joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(400);
    return next(new Error(error.details[0].message));
  }
  const { id } = value;
  let category = await CategoryModel.findByIdAndUpdate(
    { _id: id },
    {
      isActive: false,
      user: req.user?.id,
    },
    { new: true }
  );
  if (category) {
    res.status(201);
    return res.json('Category deleted successfully !');
  }
  res.status(400);
  return next(new Error('No category found !'));
};

export { getAll, create, update, getById, remove };
