import express from 'express';
import dbConnect from './config/db.js';
import authRoute from './routes/authRoute.js';
import visitorRoute from './routes/visitorRoute.js';
import hostRoute from './routes/hostRoute.js';

const app=express();
const PORT=process.env.port || 3000;

dbConnect();

app.use(express.json());
app.use("/auth",authRoute);
app.use("/visitor",visitorRoute);
app.use('/host',hostRoute);


app.listen(5000,(req,res)=>{
    console.log(`Backend Running on server 5000`)
})