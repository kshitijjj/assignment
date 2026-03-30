import express from 'express';
import dbConnect from './config/db.js';
import authRoute from './routes/authRoute.js';
import visitorRoute from './routes/visitorRoute.js';
import hostRoute from './routes/hostRoute.js';
import dotenv from 'dotenv';
import homeRoute from './routes/homeRoute.js';
dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

dbConnect();

app.use(express.json());
app.use("/auth",authRoute);
app.use("/visitor",visitorRoute);
app.use('/host',hostRoute);
app.use('/',homeRoute);

app.listen(PORT,(req,res)=>{
    console.log(`Backend Running on server ${PORT}`)
})