// { "text": "Путешествовать", "value": "travel", "emoji": "✈️" },
// { "text": "Развиваться", "value": "growth", "emoji": "📚" },
// { "text": "Укрепить здоровье", "value": "health", "emoji": "💪" },
// { "text": "Быть с близкими", "value": "relationships", "emoji": "❤️" },
// { "text": "Развить карьеру", "value": "career", "emoji": "💼" },
// { "text": "Найти гармонию", "value": "mindfulness", "emoji": "🧘‍♂️" },
// { "text": "Помогать другим", "value": "kindness", "emoji": "🤝" },
// { "text": "Веселиться", "value": "fun", "emoji": "🎉" }

export const priorityTags = [
  "travel",
  "growth",
  "health",
  "relationships",
  "career",
  "mindfulness",
  "kindness",
  "fun",
];

// { "text": "Вдохновение", "value": "inspiration", "emoji": "⭐️" },
// { "text": "Спокойствие", "value": "calm", "emoji": "🌿" },
// { "text": "Адреналин", "value": "adrenaline", "emoji": "🔥" },
// { "text": "Радость", "value": "joy", "emoji": "😂" },
// { "text": "Достижения", "value": "achievement", "emoji": "🏆" },
// { "text": "Любовь", "value": "love", "emoji": "🤗" }

export const emotionTags = [
  "inspiration",
  "calm",
  "adrenaline",
  "joy",
  "achievement",
  "love",
];

// { "text": "Новые навыки", "value": "skills", "emoji": "🛠️" },
// { "text": "Спорт и здоровье", "value": "fitness", "emoji": "🏃" },
// { "text": "Новых друзей", "value": "friends", "emoji": "🤝" },
// { "text": "Помогать людям", "value": "help", "emoji": "🌟" },
// { "text": "Творчество", "value": "creativity", "emoji": "🎨" },
// { "text": "Что-то необычное", "value": "experiments", "emoji": "🌀" }

export const goalsTags = [
  "skills",
  "fitness",
  "friends",
  "help",
  "creativity",
  "experiments",
];

export const allTags: string[] = [
  ...priorityTags,
  ...emotionTags,
  ...goalsTags,
];
