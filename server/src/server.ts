import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import indexRouter from './routes';
import connect from './config/db';
const app = express();

connect();
const corsOptions = {
  origin: ['http://localhost:3000'],
  optionsSuccessStatus: 201,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', indexRouter);
app.use(handleError);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));
function handleError(handleError: any) {
  throw new Error('Function not implemented.');
}
