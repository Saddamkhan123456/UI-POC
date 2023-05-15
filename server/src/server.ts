import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import indexRouter from './routes';
import connect from './config/db';
import { handleErrors } from './middleware/error.middleware';
import morgan from 'morgan';
import { NotFoundError } from './errors';
import path from 'path';
const app = express();

connect();
const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 201,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(
  '/images',
  express.static(path.join(__dirname, '..', 'uploads', 'images'))
);
app.use('/api', indexRouter);
app.all('*', (req, res, next) => {
  next(new NotFoundError());
});
app.use(handleErrors);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));
