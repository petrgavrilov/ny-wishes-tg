import { Bot } from "grammy";
import { BotState, isStatePassed, MyContext } from "../types";
import {
  quizStage3Command,
  setGoalsCommand,
  goalsQuestion,
  goalsAnswers,
  setGoalsCommands,
  quizFinishedCommand,
} from "../data/quiz";
import { createQuizKeyboard } from "../helpers/quiz";
import { sendAnalyticsEvent } from "../analytics";

export function setupQuizStage3(bot: Bot<MyContext>) {
  bot.callbackQuery(quizStage3Command, async (ctx) => {
    if (isStatePassed(ctx.session, BotState.QuizStage3)) {
      await ctx.answerCallbackQuery({
        text: `👋`,
      });
      return;
    }

    await ctx.replyWithPhoto(
      `AgACAgIAAxkBAAICMWd03LsgyiSW5u16mMxcnBO2McFcAAIs7DEbD3WhS16Tq0T_gIFsAQADAgADcwADNgQ`
    );

    await sendAnalyticsEvent({
      distinctId: String(ctx.chat?.id || ctx.from?.id),
      event: "user started quiz stage 3",
      properties: ctx.session,
    });

    ctx.session.state = BotState.QuizStage3;

    await ctx.reply(goalsQuestion, {
      reply_markup: createQuizKeyboard(
        goalsAnswers,
        ctx.session.quiz.goals,
        setGoalsCommand,
        quizFinishedCommand
      ),
    });
  });

  bot.callbackQuery(setGoalsCommands, async (ctx) => {
    const [, goal] = ctx.callbackQuery.data.split("::");
    const goals = ctx.session.quiz.goals;

    if (goals.includes(goal)) {
      ctx.session.quiz.goals = goals.filter((g) => g !== goal);
    } else {
      ctx.session.quiz.goals = [...goals, goal];
    }

    await ctx.editMessageText(goalsQuestion, {
      reply_markup: createQuizKeyboard(
        goalsAnswers,
        ctx.session.quiz.goals,
        setGoalsCommand,
        quizFinishedCommand
      ),
    });
  });
}
