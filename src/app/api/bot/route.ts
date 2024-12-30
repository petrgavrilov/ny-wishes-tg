import { startTelegramBotInDev } from "@/bot/start";
import { NextResponse } from "next/server";

export async function GET() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({
      message: "not in development mode",
    });
  }

  try {
    await startTelegramBotInDev();

    return NextResponse.json({
      message: "dev bot started",
    });
  } catch (err) {
    return NextResponse.json({
      message: err,
    });
  }
}
