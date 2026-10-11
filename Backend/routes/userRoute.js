import express from 'express';
import {loginUser, registerUser} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login', loginUser); //login route for user login
userRouter.post('/register', registerUser); //register route for user registration

export default userRouter;