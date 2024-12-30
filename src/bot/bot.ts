import { Bot } from "grammy";
import { setupSession } from "./session";
import { MyContext } from "./types";
import { setupHandlers } from "./handlers";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  throw new Error("TELEGRAM_BOT_TOKEN must be provided!");
}

const bot = new Bot<MyContext>(token);

setupSession(bot, token);
setupHandlers(bot);

export { bot };
