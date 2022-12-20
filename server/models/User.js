import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    uname: {
      type: String,
      required: true,
      
    },
 
    upass: {
      type: String,
    },


  },
  { timestamps: true }
);

export default mongoose.model("User",UserSchema);
