import { Bot } from "grammy";
import { BotState, isStatePassed, MyContext } from "../types";
import {
  quizStage2Command,
  emotionsQuestion,
  emotionsAnswers,
  setEmotionCommand,
  quizStage3Command,
  setEmotionsCommands,
} from "../data/quiz";
import { createQuizKeyboard } from "../helpers/quiz";

export function setupQuizStage2(bot: Bot<MyContext>) {
  bot.callbackQuery(quizStage2Command, async (ctx) => {
    if (isStatePassed(ctx.session, BotState.QuizStage2)) {
      await ctx.answerCallbackQuery({
        text: `👋`,
      });
      return;
    }

    await ctx.replyWithPhoto(
      `AgACAgIAAxkBAAICLmd023q5uf3FIrPC0vPxVIm2I2lZAAIo7DEbD3WhS2-0vBlWgjtKAQADAgADcwADNgQ`
    );

    ctx.session.state = BotState.QuizStage2;

    await ctx.reply(emotionsQuestion, {
      reply_markup: createQuizKeyboard(
        emotionsAnswers,
        ctx.session.quiz.emotions,
        setEmotionCommand,
        quizStage3Command
      ),
    });
  });

  bot.callbackQuery(setEmotionsCommands, async (ctx) => {
    const [, emotion] = ctx.callbackQuery.data.split("::");
    const emotions = ctx.session.quiz.emotions;

    if (emotions.includes(emotion)) {
      ctx.session.quiz.emotions = emotions.filter((e) => e !== emotion);
    } else {
      ctx.session.quiz.emotions = [...emotions, emotion];
    }

    await ctx.editMessageText(emotionsQuestion, {
      reply_markup: createQuizKeyboard(
        emotionsAnswers,
        ctx.session.quiz.emotions,
        setEmotionCommand,
        quizStage3Command
      ),
    });
  });
}
