import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import path from 'path'
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const PORT = 8800 || process.env.PORT;

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
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connect();
    console.log("Connected to Server");
  });

