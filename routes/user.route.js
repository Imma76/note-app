import express from 'express';
import userController from '../controllers/user.controller.js';
import validateUserSchema from '../validators/user.validator.js';
import validator from '../validators/validator.js';

const userRouter = express.Router();

userRouter.post('/create', [validator(validateUserSchema)], userController.createUser);
userRouter.post('/login', [validator(validateUserSchema)], userController.loginUser);

export default userRouter;
