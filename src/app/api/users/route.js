import { NextResponse } from "next/server";
export default function GET() {
  NextResponse.json("Fetched all users");
}
