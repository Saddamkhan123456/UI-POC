import { Router, Request } from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import {
  getAll,
  create,
  update,
  getById,
  remove,
} from '../controllers/brand.controller';
import { BadRequestError } from '../errors';
import { userAuthMiddleware } from '../middleware/auth.middleware';
import BrandModel from '../models/brand.model';

const { BRAND_IMG_PATH } = process.env;
// create directory
const createDirectory = multer({ dest: BRAND_IMG_PATH });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, BRAND_IMG_PATH!);
  },
  filename: function (req: Request, file, cb) {
    if (file) {
      if (!file.originalname.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
        return cb(
          new BadRequestError('Please upload an image file.'),
          file.originalname
        );
      } else {
        let condition = req.body.id
          ? { title: req.body.title, isActive: true, _id: { $ne: req.body.id } }
          : { title: req.body.title, isActive: true };
        BrandModel.findOne(condition).then((isExists) => {
          if (isExists) {
            return cb(
              new BadRequestError('Brand allready exists with given title !'),
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

const router = Router();
router.get('/', getAll);
router.get('/:id', getById);
router.post('/create', userAuthMiddleware, upload.single('image'), create);
router.put('/update', userAuthMiddleware, upload.single('image'), update);
router.put('/delete', userAuthMiddleware, remove);

export default router;
