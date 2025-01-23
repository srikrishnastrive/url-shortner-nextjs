import mongoose from "mongoose";

const connectDB = async () =>{
    console.log(process.env.MANGODB_URL)
    return mongoose.connect(process.env.MANGODB_URL as string)
}

export default connectDB;
