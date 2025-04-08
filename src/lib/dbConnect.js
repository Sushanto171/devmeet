import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};

export default connectDatabase;
