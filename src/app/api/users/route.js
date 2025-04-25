import dbConnect from "@/lib/dbConnect";
import { User } from "@/model/user-model";
import { NextResponse } from "next/server";
export async function GET() {
  // db connection
  await dbConnect();

  const users = await User.find();
  return NextResponse.json(users);
}
