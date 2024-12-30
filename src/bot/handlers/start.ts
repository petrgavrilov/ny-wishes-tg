import { Bot, InlineKeyboard } from "grammy";
import { BotState, isStatePassed, MyContext } from "../types";
import { promptName } from "./prompt-name";

const newYearMemeCommand = `new-year-meme`;
const snotVideoId = `BAACAgIAAxkBAAM1Z235ykqNLAepry1J2nmysQWVRf4AAutXAAL_KnFLFzrC9PxqMvg2BA`;

export function setupStart(bot: Bot<MyContext>) {
  bot.command("start", async (ctx) => {
    ctx.session.state = BotState.Started;

    const inlineKeyboard = new InlineKeyboard()
      .text(`Сопля 🤧`, newYearMemeCommand)
      .text(`Новый год 🎄`, newYearMemeCommand)
      .row()
      .text(`Отстаньте от меня уже 🥲`, newYearMemeCommand);

    await ctx.reply(`А что это у нас на носу?`, {
      reply_markup: inlineKeyboard,
    });

    // todo: if state is not Initial, then ask what to do next
    // todo: skip new year meme for 3rd answer
  });

  bot.callbackQuery(newYearMemeCommand, async (ctx) => {
    if (isStatePassed(ctx.session, BotState.MemeSent)) {
      await ctx.answerCallbackQuery({
        text: `👋`,
      });
      return;
    }

    ctx.session.state = BotState.MemeSent;
    await ctx.replyWithVideo(snotVideoId);
    await promptName(bot, ctx);
  });
}
