
import connectDB from "@/lib/database/database"
import { Product } from "@/lib/models/product.model";

import { NextResponse } from "next/server";

export const GET =async (request,{params})=>{
    await connectDB();
    try {
       
        const product = await Product.findOne({_id: params.id}).lean();
        return new NextResponse(JSON.stringify(product),{
            success:true,
            status:200,
            message:"find item"
        })
    } catch (error) {
        throw new Error("Cart Detail Error",error);
        console.log(error.message);
        
      
       
    }
}