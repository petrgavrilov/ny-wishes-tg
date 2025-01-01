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
    "Отлично! Давай узнаем, что тебе важно в следующем году. Ответь на пару вопросов, и я помогу подобрать желания",
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
      "Спасибо за ответы! Теперь я точно знаю, что сделает твой новый год особенным"
    );

    await promptMiniApp(bot, ctx);
  });
}
