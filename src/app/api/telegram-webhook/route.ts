export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { bot } from "@/bot/bot";
import { webhookCallback } from "grammy";

export const POST = webhookCallback(bot, "std/http");
