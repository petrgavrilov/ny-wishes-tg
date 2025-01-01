import { sendWishes } from "@/bot/handlers/send-wishes";
import { SessionData } from "@/bot/types";
import { SendWishesRequest } from "@/types/send-wishes";
import { freeStorage } from "@grammyjs/storage-free";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as SendWishesRequest;
  const { chatId, wishesIds } = body;
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if (!token || !chatId || !wishesIds.length) {
    throw new Error("chatId and wishesIds must be provided");
  }

  await sendWishes(chatId, wishesIds);
  const storage = freeStorage(token);
  const sessionData = (await storage.read(chatId)) as SessionData;
  await storage.write(chatId, { ...sessionData, wishesIds });

  return NextResponse.json({ success: true });
}
