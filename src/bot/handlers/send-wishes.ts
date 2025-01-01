import { Bot } from "grammy";
import { bot } from "../bot";
import { MyContext } from "../types";

export function sendWishes(chatId: string, wishesIds: string[]) {
  bot.api.sendMessage(chatId, wishesIds.join("\n"));
}

export function setupWishes(bot: Bot<MyContext>) {
  bot.command("wishes", async (ctx) => {
    const wishesIds = ctx.session.wishesIds;
    await ctx.reply(wishesIds.join("\n"));
  });
}
