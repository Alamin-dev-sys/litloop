import connectDB from "@/lib/database/database"
import { CartHistory } from "@/lib/models/order-history.model";

import { NextResponse } from "next/server";

export const GET = async(request,{params})=>{
    try {
        await connectDB();
        const myCart = await CartHistory.find({email : params.email});
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
