import mongoose from 'mongoose';
export const validateMongoId = (id: string) => {
  return mongoose.Types.ObjectId.isValid(id);
};
