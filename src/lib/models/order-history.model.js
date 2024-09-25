import { Schema, model, models } from "mongoose";

const cartHisScema = new Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
}, { timestamps: true });

export const CartHistory = models.CartHistory || model("CartHistory", cartHisScema)