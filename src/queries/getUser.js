import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/user-model";

export const getUserByEmail = async (email) => {
  try {
    await dbConnect(); // Ensure the DB is connected
    const user = await User.findOne({ email }).lean(); // Fetch user by email
    console.log("User found:", user);
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    return null;
  }
};
