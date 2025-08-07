import mongoose from "mongoose";
import { Document } from "mongoose";

export interface IRating extends Document {
    userId : mongoose.Types.ObjectId;
    providerId : mongoose.Types.ObjectId;
    requestId : mongoose.Types.ObjectId;
    rating : number;
    comment? : string;
    createdAt : Date;
}