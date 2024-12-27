import { Bot, InlineKeyboard } from "grammy";
import { BotState, isStatePassed, MyContext } from "../types";
import { quizFinishedCommand, startQuizCommand } from "../data/quiz";
import { setupQuizStage1 } from "./quiz-stage-1";
import { setupQuizStage2 } from "./quiz-stage-2";
import { setupQuizStage3 } from "./quiz-stage-3";
import { promptMiniApp } from "./mini-app";

export async function startQuiz(_bot: Bot<MyContext>, ctx: MyContext) {
  ctx.session.state = BotState.PreQuiz;

  const inlineKeyboard = new InlineKeyboard().text(
    `Погнали ➡️`,
    startQuizCommand
  );

  await ctx.reply(
    "Отлично! Теперь ответь пожалуйста на пару вопросов о своих планах на будущий год",
    {
      reply_markup: inlineKeyboard,
    }
  );
}

export function setupQuiz(bot: Bot<MyContext>) {
  setupQuizStage1(bot);
  setupQuizStage2(bot);
  setupQuizStage3(bot);

  bot.callbackQuery(quizFinishedCommand, async (ctx) => {
    if (isStatePassed(ctx.session, BotState.QuizFinished)) {
      await ctx.answerCallbackQuery({
        text: `👋`,
      });
      return;
    }

    ctx.session.state = BotState.QuizFinished;

    await ctx.reply(
      "Спасибо за ответы! Теперь я знаю, что тебе важно в новом году"
    );

    await promptMiniApp(bot, ctx);
  });
}
