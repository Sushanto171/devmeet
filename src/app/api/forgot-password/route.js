import { NextResponse } from "next/server";
import { dbConnect  } from "@/lib/dbConnect"; // your mongoose connection

import { User } from "@/model/user-model";
import crypto from "crypto";

import { PasswordResetToken } from "@/model/password-reset-token-model";


// ✅ Added Resend import
import { Resend } from 'resend';

export async function POST(req) {
  try {
    await dbConnect ();
    const { email } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expireAt = Date.now() + 1000 * 60 * 15; // 15 minutes

    // Remove any old token for this user
    await PasswordResetToken.deleteMany({ email });

    // Save new token
// Save new token
await PasswordResetToken.create({
  email,
  token,
  userId: user._id, // ✅ required by your schema
  expiresAt: new Date(Date.now() + 1000 * 60 * 15), // ✅ proper Date type
});


    const resetLink = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}&email=${email}`;

    // ✅ Send real email with Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'DevMeet <noreply@yourdomain.com>',
      to: email,
      subject: 'Reset your password',
      html: `
        <p>You requested a password reset for DevMeet.</p>
        <p>Click the link below to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link will expire in 15 minutes.</p>
      `,
    });

    return NextResponse.json({
      message: "Password reset link sent. Please check your email.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
