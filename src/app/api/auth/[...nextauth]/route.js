import connectDB from "@/lib/database/database";
import { User } from "@/lib/models/User.model";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcryptjs'
import { GoogleUser } from "@/lib/models/googleUsere";
const handler = NextAuth({
    secret:process.env.SECRET,
    session:{
        strategy:'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials){
                const {email,password}= credentials;
                if (!email || !password) {
                    return null
                };
                await connectDB();
                const currentUser = await User.findOne({email});
                if (!currentUser) {
                    return null
                }
                const isMach = await bcrypt.compare(password, currentUser.password);
                if (!isMach) {
                    return null
                }
                return currentUser
            }
        }),
       GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET
       })
    ],
    pages:{
        signIn:'/login'
    },
    callbacks:{
        async signIn({user,account}){
            if (account.provider === 'google') {
                const {name,email,image} = user;
                try {
                    await connectDB();
                    const exist = await GoogleUser.findOne({email});
                    if (!exist) {
                        await GoogleUser.create(user);
                        return user
                    }else{
                        return user
                    }
                } catch (error) {
                    throw new Error("GoogleError",error)
                }
            }
            return true
        }
    }
    
});

export {handler as GET, handler as POST}