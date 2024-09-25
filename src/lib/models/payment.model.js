import { Schema,model,models } from "mongoose";


const paymentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    town:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true
    },
    method:{
        type:String,
        
    },
    delevari:{
        type:String,  
    },
    date:{
        type:String,  
    },
    product:[
       { type:String,
        required:true}
    ],
    quantity:[{
        type:Number, 
        required:true 
    }],
    image:[{
        type:String, 
        required:true 
    }],

},{timestamps:true});

export const Payment = models.Payment || model("Payment" , paymentSchema)