import { Bot } from "grammy";
import { bot } from "../bot";
import { MyContext } from "../types";

export async function sendWishes(chatId: string, wishesIds: string[]) {
  await bot.api.sendMessage(chatId, wishesIds.join("\n"));
}

export function setupWishes(bot: Bot<MyContext>) {
  bot.command("wishes", async (ctx) => {
    console.log(`Wishes command received from ${ctx.chat?.id}`);
    const wishesIds = ctx.session.wishesIds;
    await ctx.reply(`Your wishes: ${wishesIds.join(", ")}`);
  });
}
