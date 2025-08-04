import mongoose from "mongoose";
import { Document} from "mongoose";

export interface IRequest extends Document{
    userId : mongoose.Types.ObjectId;
    providerId? : mongoose.Types.ObjectId
    serviceType : string;
    status : "pending" | "accepted" | "completed" | "cancelled";
    createdAt?: Date;
    updatedAt?: Date;
}