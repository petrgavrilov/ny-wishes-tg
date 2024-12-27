import { startTelegramBotInDev } from "@/bot/start";
import { NextResponse } from "next/server";

export async function GET() {
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
