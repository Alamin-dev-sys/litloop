import connectDB from "@/lib/database/database"
import { Product } from "../product.model";

export const getAllproducts = async()=>{
    await connectDB();
    const products = await Product.find().lean();
    return products
};