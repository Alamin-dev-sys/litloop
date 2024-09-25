import mongoose from "mongoose";


 const connectDB = async()=>{
    const state = mongoose.connection.readyState;
    if (state === 1) {
        console.log("DB_CONNECTED");
    }if (state === 2) {
        console.log("DB_CONNECTING");
        
    }
    if (state === 0) {
        console.log("DB_DISCONNECTED");
    }
  try {
    
    const DB = await mongoose.connect("mongodb+srv://cocsys25:zLFTEn2XLmZaslSN@cluster0.btvae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
        dbName:'Litloop',
        bufferCommands:true
    });
    return DB
  } catch (error) {
   throw new Error("DB_ERROR",error);
   
    
  }
    
}
export default connectDB;