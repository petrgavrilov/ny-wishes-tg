import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      data: {},
    });
  } catch (err) {
    return NextResponse.json({
      error: err,
    });
  }
}
