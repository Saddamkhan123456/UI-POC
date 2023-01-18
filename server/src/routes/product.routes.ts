import { Router, Request } from 'express';
import multer from 'multer';
import ProductModel from '../models/product.model';
import mongoose from 'mongoose';
import path from 'path';
import {
  getAll,
  create,
  update,
  getById,
  remove,
} from '../controllers/product.controllers';
import { userAuthMiddleware } from '../middleware/auth.middleware';
import { BadRequestError } from '../errors';

const router = Router();

const { PRODUCT_IMG_PATH } = process.env;
// create directory
const createDirectory = multer({ dest: PRODUCT_IMG_PATH });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, PRODUCT_IMG_PATH!);
  },
  filename: function (req: Request, file, cb) {
    if (file) {
      if (!file.originalname.match(/\.(png|jpg|jpeg|gif|svg)$/)) {
        return cb(
          new BadRequestError('Please upload an image file.'),
          file.originalname
        );
      } else {
        let condition = req.body.id
          ? { title: req.body.title, _id: { $ne: req.body.id } }
          : { title: req.body.title };
        ProductModel.findOne(condition).then((isExists) => {
          if (isExists) {
            return cb(
              new BadRequestError('Product allready exists with given title !'),
              file.originalname
            );
          } else {
            cb(
              null,
              `${
                file.originalname.split('.')[0]
              }${new mongoose.Types.ObjectId()}-${path.extname(
                file.originalname
              )}`
            );
          }
        });
      }
    }
  },
});
const upload = multer({ storage: storage });
router.get('/', getAll);
router.get('/:id', getById);
router.post('/create', userAuthMiddleware, upload.array('image', 5), create);
router.put('/update', userAuthMiddleware, upload.array('image', 5), update);
router.put('/delete', userAuthMiddleware, remove);

export default router;
