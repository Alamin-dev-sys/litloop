import connectDB from "@/lib/database/database"
import { Cart } from "@/lib/models/addToCart";
import { NextResponse } from "next/server";

export const GET = async(request,{params})=>{
    try {
        await connectDB();
        const myCart = await Cart.find({email : params.email});
        return new NextResponse(JSON.stringify(myCart),{
            success:true,
            status:200,
            message:'cart is finded'
        });
    } catch (error) {
        throw new Error("Cart Not Find",error);
        return new NextResponse({
            success:false,
            status:500,
            message:'cart is not find'
        });
    }
};
