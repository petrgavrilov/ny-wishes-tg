import { InlineKeyboard } from "grammy";
import { QuizAnswer } from "../types";

export function createQuizKeyboard(
  quizAnswers: QuizAnswer[],
  savedAnswers: string[],
  setAnswerCommand: string,
  nextQuestionCommand: string,
  nextLimit = 1
) {
  const keyboard = new InlineKeyboard();

  quizAnswers.forEach((answer) => {
    const isChecked = savedAnswers.includes(answer.value);
    keyboard
      .text(
        `${isChecked ? answer.emoji : ``} ${answer.text}`,
        `${setAnswerCommand}::${answer.value}`
      )
      .row();
  });

  if (savedAnswers.length >= nextLimit) {
    keyboard.text(`Дальше ➡️`, nextQuestionCommand);
  }

  return keyboard;
}
