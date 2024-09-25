import connectDB from "@/lib/database/database";
import { Cart } from "@/lib/models/addToCart";
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    const cart = await request.json();
    try {
        await connectDB();
        const newCart = await Cart.create(cart);
        return new NextResponse("cart added",{
            success:true,
            status:201
        })
    } catch (error) {
        throw new Error("Cart Error",error);
        return new NextResponse('error in cart',{
            success:false,
            status:500
        })
    }
}