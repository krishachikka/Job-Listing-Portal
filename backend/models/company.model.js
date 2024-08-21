import mongoose from "mongoose";
import { type } from "os";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String, //url for comapny logo
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
},{timestamps:true}
);
export const Company = mongoose.model("Company", companySchema);