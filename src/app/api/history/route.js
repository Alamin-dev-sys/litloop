import connectDB from "@/lib/database/database";
import { CartHistory } from "@/lib/models/order-history.model";
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    try {
        await connectDB();
        const payment = await request.json();
        await CartHistory.create(payment);
        return new NextResponse("order Successful",{
            status:200
        })

    } catch (error) {
      
        console.log(error.message,"order-his");
        
        
    }
    
}