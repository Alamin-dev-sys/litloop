import connectDB from "@/lib/database/database";
import { Cart } from "@/lib/models/addToCart";
import { NextResponse } from "next/server";

export const DELETE = async(request,{params})=>{
    try {
        await connectDB();
        const deleteItem = await Cart.deleteOne({_id : params.id});
    return new NextResponse(JSON.stringify(deleteItem),{
        status:200,
       
    })
    } catch (error) {
        throw new Error("Not Deleted",error);
        console.log(error.message);
        
    }

}