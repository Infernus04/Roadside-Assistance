import { password } from "bun";
import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
    },
    serviceType : {
        type : String,
        required : true,
    },
    isAvaiilable : {
        type : Boolean,
        default : true,
    },
    ratings :{
        average : {
            type : Number,
            default : 0,
        },
        count : {
            type : Number,
            default : 0,
        }
    }

})