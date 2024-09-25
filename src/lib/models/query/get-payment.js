import connectDB from "@/lib/database/database"
import { Payment } from "../payment.model";


export const getAllpayment = async()=>{
    await connectDB();
    const pay = await Payment.find().lean();
    return pay;
}
