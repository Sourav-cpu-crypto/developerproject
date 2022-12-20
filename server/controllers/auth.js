import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
    try {
        console.log(req.body)
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.upass, salt);
      const newuser = new User({ ...req.body,upass: hash });
  await newuser.save();
      res.status(200).send("User has been created!");
    } catch (err) {
      next(err);
    }
  };
  export const signin = async (req, res, next) => {
    try {
      const user = await User.findOne({ uname: req.body.uname });

  
      const isCorrect = await bcrypt.compare(req.body.upass, user.upass);
  
      if (!isCorrect) 
      {
        console.log("Wrong Credentials!");     
      }
  else{
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const { password, ...others } = user._doc;
  
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  }

} 

catch (err) {
  next(err);
}
  };
  
