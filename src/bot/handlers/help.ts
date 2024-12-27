import { Bot } from "grammy";
import { MyContext } from "../types";

export function setupHelp(bot: Bot<MyContext>) {
  bot.command("help", async (ctx) => {
    await ctx.reply("Help message");
  });
}
