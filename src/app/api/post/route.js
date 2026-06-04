import dbConnect from "@/lib/dbConnect";
import Post from "@/model/post-model";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  try {
    const body = await req.json();
    await dbConnect();
    const post = await Post.create(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};
