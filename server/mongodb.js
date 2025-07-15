import mongoose from "mongoose";
const connectdb = async () => {
    await   mongoose.connect(process.env.MONGODB_URI, {

    }).then(() => {
        console.log("MongoDB connected successfully");
    }).catch((error) => {
        console.error("MongoDB connection failed:", error);
    }
    );
}
export default connectdb;
