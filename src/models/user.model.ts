import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email : {
    type: String,
    required: true,
    unique: true,
  },
  password : {
    type: String,
    required: true,
    minlength: 6,
  }
  
});

export const UserModel = mongoose.model<IUser>("User", userSchema);
