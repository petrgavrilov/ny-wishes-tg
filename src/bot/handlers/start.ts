import { Bot } from "grammy";
import { MyContext } from "../types";
import { promptName } from "./prompt-name";

const greetingPhotoId = `AgACAgIAAxkBAAICKGd01ccwMBE-tNNom2ciuKvDsa02AAIZ7DEbD3WhS3o69mkUcwg8AQADAgADcwADNgQ`;

export function setupStart(bot: Bot<MyContext>) {
  bot.command("start", async (ctx) => {
    await ctx.replyWithPhoto(greetingPhotoId, {
      caption: `Привет! Я бот, который поможет тебе выбрать классные желания на Новый год! 🎄✨`,
    });

    await promptName(bot, ctx);
  });
}
