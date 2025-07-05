import mongoose from "mongoose";

// for documentation go to 👉 https://mongoosejs.com/docs

const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Database Connected...")
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;