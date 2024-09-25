import connectDB from "@/lib/database/database"
import { Payment } from "@/lib/models/payment.model";
import { NextResponse } from "next/server";

export const POST = async(request)=>{
    try {
        await connectDB();
        const payment = await request.json();
        await Payment.create(payment);
        return new NextResponse("Payment Successful",{
            status:200
        })

    } catch (error) {
      
        console.log(error.message,"pay");
        
        
    }
    
}