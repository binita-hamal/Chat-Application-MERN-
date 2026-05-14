import mongoose from "mongoose";

export const connectToDatabase = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB is connected")
    } catch (error) {
        console.log("MongoDB connection failed", error.message)
    }
}