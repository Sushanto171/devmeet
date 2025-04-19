import { NextResponse } from "next/server";
import { connectDB } from "@/lib/dbConnect";
import { User } from "@/model/user-model";
import { PasswordResetToken } from "@/model/password-reset-token-model";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();
    const { email, token, password } = await req.json();

    const resetEntry = await PasswordResetToken.findOne({ email, token });

    if (!resetEntry) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
    }

    if (Date.now() > resetEntry.expireAt) {
      return NextResponse.json({ error: "Token expired" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    await User.updateOne({ email }, { $set: { password: hashed } });

    await PasswordResetToken.deleteMany({ email }); // cleanup used token

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
