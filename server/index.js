import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import path from 'path'
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(
    express.urlencoded({ extended: true })
);
 mongoose.set('strictQuery',true)
const connect=()=>{
  
    mongoose
    .connect(process.env.MONGOURI,{ useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    })
}
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(8800, () => {
    connect();
    console.log("Connected to Server");
  });
  if(process.env.NODE_ENV=='production'){


    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'assignment-modulus-seventeen',
        'build')))
        res.sendFile(path.resolve(__dirname,'assignment-modulus-seventeen','build','index.html'))
    })
}
