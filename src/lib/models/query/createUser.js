
import connectDB from "@/lib/database/database";
import { User } from "../User.model";



export const createUser = async(user)=>{
    await connectDB()
    try {
         await User.create(user)
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}