import { Schema,model,models } from "mongoose";

const userScema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
       
    },
    
    
},{timestamps:true});

export const User = models.User || model("User", userScema)