import { QuizAnswer } from "../types";

export const startQuizCommand = `start-quiz`;
export const quizStage2Command = `quiz-stage-2`;
export const quizStage3Command = `quiz-stage-3`;
export const quizFinishedCommand = `quiz-finished`;

export const setPriorityCommand = `set-priority`;
export const priorityQuestion = `Чего тебе больше всего хочется? Можешь выбрать несколько вариантов.`;
export const priorityAnswers: QuizAnswer[] = [
  { text: "Путешествовать", value: "travel", emoji: "🌍" },
  { text: "Развиваться", value: "growth", emoji: "📚" },
  { text: "Укрепить здоровье", value: "health", emoji: "🏋️" },
  { text: "Быть с близкими", value: "relationships", emoji: "❤️" },
  { text: "Развить карьеру", value: "career", emoji: "💼" },
  { text: "Найти гармонию", value: "mindfulness", emoji: "☯️" },
  { text: "Помогать другим", value: "kindness", emoji: "🤝" },
  { text: "Веселиться", value: "fun", emoji: "🎉" },
];
export const setPrioritiesCommands = priorityAnswers.map(
  ({ value }) => `${setPriorityCommand}::${value}`
);

export const setEmotionCommand = `set-priority`;
export const emotionsQuestion = `Какие эмоции ты хочешь испытывать чаще?`;
export const emotionsAnswers: QuizAnswer[] = [
  { text: "Вдохновение", value: "inspiration", emoji: "✨" },
  { text: "Спокойствие", value: "calm", emoji: "🕊️" },
  { text: "Адреналин", value: "adrenaline", emoji: "⚡" },
  { text: "Радость", value: "joy", emoji: "😂" },
  { text: "Достижения", value: "achievement", emoji: "🏆" },
  { text: "Любовь", value: "love", emoji: "❤️" },
];
export const setEmotionsCommands = emotionsAnswers.map(
  ({ value }) => `${setEmotionCommand}::${value}`
);

export const setGoalsCommand = `set-goals`;
export const goalsQuestion = `Что нового ты хочешь попробовать?`;
export const goalsAnswers: QuizAnswer[] = [
  { text: "Освоить новые навыки", value: "skills", emoji: "💡" },
  { text: "Уделить внимание здоровью", value: "fitness", emoji: "🏃" },
  { text: "Завести новых друзей", value: "friends", emoji: "🤝" },
  { text: "Заняться помощью другим", value: "help", emoji: "🤲" },
  { text: "Попробовать себя в творчестве", value: "creativity", emoji: "🎨" },
  { text: "Испытать что-то необычное", value: "experiments", emoji: "🌀" },
];
export const setGoalsCommands = goalsAnswers.map(
  ({ value }) => `${setGoalsCommand}::${value}`
);
