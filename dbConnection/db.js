import mongoose from "mongoose";

 const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Database connection error", error.message);
        process.exit(1)
    }
}

export default connectToDb;