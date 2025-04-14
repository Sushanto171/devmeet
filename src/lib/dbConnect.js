import mongoose from "mongoose";

export async function dbConnect() {
  try {
    let conn = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
    //console.log(conn)
    return conn;
  } catch (e) {
    throw new Error(e);
  }
}