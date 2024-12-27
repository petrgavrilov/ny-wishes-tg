import { QuizAnswer } from "../types";

export const startQuizCommand = `start-quiz`;
export const quizStage2Command = `quiz-stage-2`;
export const quizStage3Command = `quiz-stage-3`;
export const quizFinishedCommand = `quiz-finished`;

export const setPriorityCommand = `set-priority`;
export const priorityQuestion = `Чего хочется больше всего?`;
export const priorityAnswers: QuizAnswer[] = [
  { text: "Путешествовать", value: "travel", emoji: "✈️" },
  { text: "Развиваться", value: "growth", emoji: "📚" },
  { text: "Укрепить здоровье", value: "health", emoji: "💪" },
  { text: "Быть с близкими", value: "relationships", emoji: "❤️" },
  { text: "Развить карьеру", value: "career", emoji: "💼" },
  { text: "Найти гармонию", value: "mindfulness", emoji: "🧘‍♂️" },
  { text: "Помогать другим", value: "kindness", emoji: "🤝" },
  { text: "Веселиться", value: "fun", emoji: "🎉" },
];
export const setPrioritiesCommands = priorityAnswers.map(
  ({ value }) => `${setPriorityCommand}::${value}`
);

export const setEmotionCommand = `set-priority`;
export const emotionsQuestion = `Какие эмоции хочешь испытывать чаще?`;
export const emotionsAnswers: QuizAnswer[] = [
  { text: "Вдохновение", value: "inspiration", emoji: "⭐️" },
  { text: "Спокойствие", value: "calm", emoji: "🌿" },
  { text: "Адреналин", value: "adrenaline", emoji: "🔥" },
  { text: "Радость", value: "joy", emoji: "😂" },
  { text: "Достижения", value: "achievement", emoji: "🏆" },
  { text: "Любовь", value: "love", emoji: "🤗" },
];
export const setEmotionsCommands = emotionsAnswers.map(
  ({ value }) => `${setEmotionCommand}::${value}`
);

export const setGoalsCommand = `set-goals`;
export const goalsQuestion = `Что хочешь попробовать или изменить?`;
export const goalsAnswers: QuizAnswer[] = [
  { text: "Новые навыки", value: "skills", emoji: "🛠️" },
  { text: "Спорт и здоровье", value: "fitness", emoji: "🏃" },
  { text: "Новых друзей", value: "friends", emoji: "🤝" },
  { text: "Помогать людям", value: "help", emoji: "🌟" },
  { text: "Творчество", value: "creativity", emoji: "🎨" },
  { text: "Что-то необычное", value: "experiments", emoji: "🌀" },
];
export const setGoalsCommands = goalsAnswers.map(
  ({ value }) => `${setGoalsCommand}::${value}`
);
