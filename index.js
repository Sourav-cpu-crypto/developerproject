import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import path from 'path'
import cookieParser from "cookie-parser";

const app = express();
const PORT = 8800 || process.env.PORT;
dotenv.config();
app.use(
    express.urlencoded({ extended: true })
);
 mongoose.set('strictQuery',true)
const connect=()=>{
  
    mongoose
    .connect(process.env.MOGOURI,{ useNewUrlParser: true, useUnifiedTopology: true }
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
    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client',
        'build')))
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
app.listen(PORT, () => {
    connect();
    console.log("Connected to Server");
  });
  if(process.env.NODE_ENV=='production'){

}
