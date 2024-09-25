import { Schema,model,models } from "mongoose";

const cartScema = new Schema({
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

},{timestamps:true});

export const Cart = models.Cart || model("Cart",cartScema)