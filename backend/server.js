import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';

dotenv.config({});
const app = express();

//this is a get request to the home page of the server the purpose of this route is to check whether the server is running or not
app.get('/home',(req,res)=>{
    return res.status(200).json({
        message:"Welcome to the home page",
        success:true
    });
})


//middleware
app.use(express.json());//jab req bhenje ga toh json mai convert hojae ga data
app.use(express.urlencoded({extended: true})); //functionality of this middleware is to parse the incoming request with urlencoded payload and urlencoded payload is basically the body of the request which is sent to the server in the form of key value pairs.

app.use(cookieParser());

const corsOptions = {

    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

//middlewares ends here

const PORT = process.env.PORT || 3000;



    app.listen(PORT,()=>{
        connectDB();
        console.log(`Server started on port number ${PORT}`);
    });