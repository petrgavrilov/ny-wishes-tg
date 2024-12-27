import { NextRequest, NextResponse } from "next/server";

import { freeStorage } from "@grammyjs/storage-free";

export async function GET(request: NextRequest) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = request.nextUrl.searchParams.get("chat_id");

    if (!chat_id) {
      throw new Error("chat_id must be provided!");
    }

    if (!token) {
      throw new Error("TELEGRAM_BOT_TOKEN must be provided!");
    }

    const storage = freeStorage(token);
    const session = await storage.read(`${chat_id}`);

    return NextResponse.json({
      data: session,
    });
  } catch (err) {
    return NextResponse.json(err);
  }
}
