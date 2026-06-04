import mongoose from "mongoose";

const dbConnect = async () =>{
  try {
    let conn = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
    //console.log(conn)
    return conn;
  } catch (e) {
    console.log("Mongo error", e);
    throw new Error(e);
  }
}

export default dbConnect