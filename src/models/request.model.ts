import mongoose, { MongooseError } from "mongoose";
import { IRequest } from "../interfaces/request.interface";

const requestSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true,
    },
    providerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Provider",
        required: true,
    },
    status : {
        type : String,
        enum : ["pending", "accepted","completed","cancelled"],
        default : "pending",
    },
    availability : {
        type : Boolean,
        default : true,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    },
    description : {
        type : String,
        required: true,
    },
    vehicleDetails : {
        type : String,
        required: true,
    }
})

export const RequestModel = mongoose.model<IRequest>("Request", requestSchema);