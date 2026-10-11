import mongoose from "mongoose";

export const connectDB = async () => {
    const { MONGODB_URI } = process.env;
    if (!MONGODB_URI) {
        throw new Error("Missing required environment variable: MONGODB_URI");
    }

    await mongoose.connect(MONGODB_URI);
    console.log("DB Connected");
};
