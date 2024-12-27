import { Bot, InlineKeyboard } from "grammy";
import { BotState, isStatePassed, MyContext } from "../types";
import { startQuiz } from "./quiz";

const inputUserNameCommand = `input-user-name`;
const skipInputUserNameCommand = `skip-input-user-name`;

export async function promptName(_bot: Bot<MyContext>, ctx: MyContext) {
  const userName =
    ctx.from?.first_name || ctx.from?.last_name || ctx.from?.username;

  ctx.session.state = BotState.PromptName;
  ctx.session.userName = userName;

  const inlineKeyboard = new InlineKeyboard()
    .text(`Да`, skipInputUserNameCommand)
    .text(`Нет`, inputUserNameCommand)
    .row()
    .text(`А почему вы спрашиваете?`, skipInputUserNameCommand);

  await ctx.reply(`Ты ведь ${userName}, верно?`, {
    reply_markup: inlineKeyboard,
  });
}

export function setupPromptName(bot: Bot<MyContext>) {
  bot.callbackQuery(inputUserNameCommand, async (ctx) => {
    if (isStatePassed(ctx.session, BotState.WaitingForName)) {
      await ctx.answerCallbackQuery({
        text: `👋`,
      });
      return;
    }

    ctx.session.state = BotState.WaitingForName;
    await ctx.reply(`Напиши тебя зовут 👇`);
  });

  bot.on("message:text", async (ctx) => {
    if (ctx.session.state !== BotState.WaitingForName) {
      return;
    }

    ctx.session.userName = ctx.message.text;
    await startQuiz(bot, ctx);
  });

  bot.callbackQuery(skipInputUserNameCommand, async (ctx) => {
    if (isStatePassed(ctx.session, BotState.SkipNameInput)) {
      await ctx.answerCallbackQuery({
        text: `👋`,
      });
      return;
    }

    ctx.session.state = BotState.SkipNameInput;
    await startQuiz(bot, ctx);
  });
}
