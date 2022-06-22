import userModel from '../models/user.model.js';

const createUser = async (data) => {
  const newUser = await userModel.create(data);
  return newUser;
};
