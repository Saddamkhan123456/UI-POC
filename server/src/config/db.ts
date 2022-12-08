import mongoose from 'mongoose';

const connection = async () => {
  const DB_URI = <string>process.env.DB_URI;
  try {
    let connection = await mongoose.connect(DB_URI);
    if (connection) {
      console.log('Database connected successfully !');
    }
  } catch (error) {
    console.log('Error : ' + error);
    process.exit();
  }
};

export default connection;
