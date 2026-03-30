import express from 'express';
import verifyToken from '../middlewares/verifyToken.js';
import { visitReq } from '../controllers/visitController.js';
import visitMiddleware from '../middlewares/visitMiddleware.js';

const route=express.Router();

route.post("/visit",verifyToken,visitMiddleware,visitReq);

export default route;



