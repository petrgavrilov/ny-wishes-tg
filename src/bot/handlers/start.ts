import { Bot } from "grammy";
import { BotState, MyContext } from "../types";
import { promptName } from "./prompt-name";
import { sendAnalyticsEvent } from "../analytics";

const greetingPhotoId = `AgACAgIAAxkBAAICKGd01ccwMBE-tNNom2ciuKvDsa02AAIZ7DEbD3WhS3o69mkUcwg8AQADAgADcwADNgQ`;

export function setupStart(bot: Bot<MyContext>) {
  bot.command("start", async (ctx) => {
    ctx.session.state = BotState.Started;
    ctx.session.userInfo.firstName = ctx.from?.first_name || "";
    ctx.session.userInfo.lastName = ctx.from?.last_name || "";
    ctx.session.userInfo.id = String(ctx.from?.id || "");

    await sendAnalyticsEvent({
      distinctId: String(ctx.chat?.id || ctx.from?.id),
      event: "user started bot",
      properties: ctx.session,
    });

    await ctx.replyWithPhoto(greetingPhotoId, {
      caption: `Привет! Я бот, который поможет тебе выбрать классные желания на Новый год! 🎄✨`,
    });

    await promptName(bot, ctx);
  });
}
