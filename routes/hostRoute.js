import express from 'express';
import verifyToken from '../middlewares/verifyToken.js';
import { acceptReq } from '../controllers/hostController.js';
import { declineReq } from '../controllers/hostController.js';
import hostMiddleware from '../middlewares/hostMiddleware.js';
import { getReq } from '../controllers/hostController.js';

const route=express.Router();

route.get('/',verifyToken,hostMiddleware,getReq);
route.put('/accept/:userId',verifyToken,hostMiddleware,acceptReq);
route.put('/decline/:userId',verifyToken,hostMiddleware,declineReq);


export default route;