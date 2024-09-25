import connectDB from "@/lib/database/database";
import { Product } from "@/lib/models/product.model"
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    const product = await request.json();
    try {
        await connectDB()
        const newProduct = await Product.create(product);
    return new NextResponse('Product created',{
        success:true,
        status:200,
    })
    } catch (error) {
        throw new Error("Error On Product",error);
        return new NextResponse('Error',{
            success:false,
            status:500
        })
    }
};