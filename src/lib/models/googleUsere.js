import { Schema,model,models } from "mongoose";

const googleScema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true
    },
   
    
},{timestamps:true});

export const GoogleUser = models.GoogleUser || model("GoogleUser", googleScema)