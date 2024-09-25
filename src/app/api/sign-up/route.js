import connectDB from "@/lib/database/database";
import { createUser } from "@/lib/models/query/createUser";
import { User } from "@/lib/models/User.model";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export const POST = async(request)=>{
   
    const {name, email,password} = await request.json();
    await connectDB()
        const exist = await User.findOne({email});
        const hashedPass =await bcrypt.hash(password,10)
           const newUser = {
            name,email,password:hashedPass
           };
    try {
        
       
            if (!exist) {
                await createUser(newUser);
                return new NextResponse("User Cerated",{
                    status:201,
                    succsecc:true,
                })
            }
     
       
        
        return new NextResponse("User Exist",{
            status:500,
            succsecc:false,
        })

    } catch (error) {
       throw new Error("Error is", error);
      
    }

}