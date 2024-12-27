import { Bot } from "grammy";
import { BotState, isStatePassed, MyContext } from "../types";
import {
  priorityAnswers,
  priorityQuestion,
  quizStage2Command,
  setPrioritiesCommands,
  setPriorityCommand,
  startQuizCommand,
} from "../data/quiz";
import { createQuizKeyboard } from "../helpers/quiz";

export function setupQuizStage1(bot: Bot<MyContext>) {
  bot.callbackQuery(startQuizCommand, async (ctx) => {
    if (isStatePassed(ctx.session, BotState.QuizStage1)) {
      await ctx.answerCallbackQuery({
        text: `👋`,
      });
      return;
    }

    ctx.session.state = BotState.QuizStage1;

    // todo: send image

    await ctx.reply(priorityQuestion, {
      reply_markup: createQuizKeyboard(
        priorityAnswers,
        ctx.session.quiz.priorities,
        setPriorityCommand,
        quizStage2Command
      ),
    });
  });

  bot.callbackQuery(setPrioritiesCommands, async (ctx) => {
    const [, priority] = ctx.callbackQuery.data.split("::");
    const priorities = ctx.session.quiz.priorities;

    if (priorities.includes(priority)) {
      ctx.session.quiz.priorities = priorities.filter((p) => p !== priority);
    } else {
      ctx.session.quiz.priorities = [...priorities, priority];
    }

    await ctx.editMessageText(priorityQuestion, {
      reply_markup: createQuizKeyboard(
        priorityAnswers,
        ctx.session.quiz.priorities,
        setPriorityCommand,
        quizStage2Command
      ),
    });
  });
}
