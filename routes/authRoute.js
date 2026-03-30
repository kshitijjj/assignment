import express from 'express';
const route=express.Router();
import { userSignup,userLogin } from '../controllers/authController.js';

route.post('/signup',userSignup);
route.post('/login',userLogin);

export default route;

