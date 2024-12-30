import { bot } from "@/bot/bot";
import { webhookCallback } from "grammy";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  const callback = webhookCallback(bot, "next-js");
  return callback(request, response);
}
