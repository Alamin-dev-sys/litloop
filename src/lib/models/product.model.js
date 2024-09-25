import { Schema,model,models } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
       
    },
    price:{
        type:Number,
        required:true,
       
    },
    category:{
        type:String,
        required:true,
       
    },
    img:{
        type:String,
        required:true,
        
    },
},{timestamps:true});
export const Product = models.Product || model("Product",productSchema);