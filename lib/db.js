import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("mongodb connected ...");
  } catch (error) {
    console.error("error ", error?.message);
    process.exit(1);
  }
};

export default connectDb;
