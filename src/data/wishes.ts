export interface Wish {
  id: string;
  description: string;
  descriptionRus: string;
  tags: string[];
  emoji: string;
  associations: string[];
}

export const wishes: Wish[] = [
  {
    id: "attend-a-music-festival-or-concert",
    description: "Attend a music festival or concert",
    descriptionRus: "Посетить музыкальный фестиваль или концерт",
    tags: ["fun", "joy", "inspiration", "friends"],
    emoji: "🎶",
    associations: [
      "festival ticket",
      "lightstick",
      "earplugs",
      "band merch",
      "camera",
    ],
  },
  {
    id: "attend-networking-event",
    description: "Attend a networking event and meet 3 new people",
    descriptionRus: "Посетить нетворкинг и познакомиться с 3 новыми людьми",
    tags: ["growth", "relationships", "skills", "achievement"],
    emoji: "🤝",
    associations: [
      "business cards",
      "event pass",
      "notebook",
      "conversation topics",
      "networking app",
    ],
  },
  {
    id: "attend-passionate-workshop",
    description: "Attend a workshop on a topic you’re passionate about",
    descriptionRus: "Посетить мастер-класс по теме, которая вам интересна",
    tags: ["growth", "skills", "inspiration", "fun"],
    emoji: "🔨",
    associations: [
      "workshop materials",
      "notebook",
      "tools",
      "mentor",
      "certificate",
    ],
  },
  {
    id: "bake-a-cake-for-someone-special",
    description: "Bake a cake for someone special",
    descriptionRus: "Испечь торт для кого-то особенного",
    tags: ["kindness", "fun", "relationships", "joy"],
    emoji: "🎂",
    associations: [
      "baking pan",
      "cake mix",
      "frosting",
      "cake topper",
      "recipe book",
    ],
  },
  {
    id: "be-a-mentor-to-someone",
    description: "Be a mentor to someone",
    descriptionRus: "Стать наставником для кого-то",
    tags: ["growth", "kindness", "achievement", "relationships"],
    emoji: "🧑‍🏫",
    associations: [
      "notebook",
      "whiteboard",
      "guidebook",
      "pen",
      "mentor badge",
    ],
  },
  {
    id: "be-in-a-conscious-fulfilling-relationship",
    description: "Be in a conscious, fulfilling relationship",
    descriptionRus: "Быть в осознанных, наполненных отношениях",
    tags: ["love", "relationships", "growth"],
    emoji: "💞",
    associations: [
      "couples' journal",
      "photo frame",
      "flowers",
      "matching jewelry",
      "book on relationships",
    ],
  },
  {
    id: "befriend-a-stranger",
    description: "Befriend a stranger",
    descriptionRus: "Подружиться с незнакомцем",
    tags: ["relationships", "fun", "kindness", "inspiration"],
    emoji: "👋",
    associations: [
      "coffee mug",
      "gift card",
      "handshake",
      "smile pin",
      "conversation starter book",
    ],
  },
  {
    id: "bury-the-hatchet-with-people-you-conflicted-in-the-past",
    description: "Bury the hatchet with people whom you conflicted in the past",
    descriptionRus:
      "Закопать топор войны с теми, с кем вы конфликтовали в прошлом",
    tags: ["relationships", "calm", "kindness", "growth"],
    emoji: "🕊️",
    associations: [
      "olive branch",
      "peace offering",
      "dove figure",
      "letter",
      "book of forgiveness",
    ],
  },
  {
    id: "camp-overnight",
    description: "Camp overnight in the wilderness",
    descriptionRus: "Провести ночь в кемпинге на природе",
    tags: ["travel", "fun", "calm", "inspiration"],
    emoji: "🏕️",
    associations: [
      "tent",
      "sleeping bag",
      "campfire",
      "flashlight",
      "marshmallows",
    ],
  },
  {
    id: "change-the-world",
    description: "Change the world",
    descriptionRus: "Изменить мир",
    tags: ["inspiration", "achievement", "growth", "kindness"],
    emoji: "🌟",
    associations: [
      "mission statement",
      "action plan",
      "community support",
      "advocacy materials",
      "motivational book",
    ],
  },
  {
    id: "climb-a-mountain",
    description: "Climb a mountain",
    descriptionRus: "Подняться на гору",
    tags: ["achievement", "fitness", "adrenaline", "inspiration"],
    emoji: "🏔️",
    associations: ["hiking gear", "rope", "boots", "trail map", "camera"],
  },
  {
    id: "commit-to-walking-10000-steps-daily",
    description: "Commit to walking 10,000 steps daily for a month",
    descriptionRus: "Ходить по 10,000 шагов ежедневно в течение месяца",
    tags: ["fitness", "health", "achievement", "growth"],
    emoji: "🚶",
    associations: [
      "walking shoes",
      "fitness tracker",
      "pedometer",
      "walking route map",
      "hydration pack",
    ],
  },
  {
    id: "contact-a-teacher-who-changed-your-life-to-thank-them",
    description: "Contact a teacher who changed your life just to thank them",
    descriptionRus:
      "Связаться с учителем, который изменил вашу жизнь, чтобы поблагодарить его",
    tags: ["kindness", "inspiration", "relationships"],
    emoji: "✍️",
    associations: ["thank you card", "book", "pen", "apple", "notebook"],
  },
  {
    id: "cook-a-home-made-meal",
    description: "Cook a home-made meal for your loved ones",
    descriptionRus: "Приготовить домашний обед для своих близких",
    tags: ["kindness", "relationships", "joy", "creativity"],
    emoji: "🍽️",
    associations: [
      "recipe book",
      "kitchen utensils",
      "ingredients",
      "dining table",
      "apron",
    ],
  },
  {
    id: "create-a-short-film-with-friends",
    description: "Create a short film with friends",
    descriptionRus: "Создать короткометражный фильм с друзьями",
    tags: ["creativity", "friends", "fun", "achievement"],
    emoji: "🎥",
    associations: [
      "camera",
      "script",
      "props",
      "editing software",
      "clapperboard",
    ],
  },
  {
    id: "create-time-capsule",
    description: "Create a time capsule and bury it",
    descriptionRus: "Создать капсулу времени и закопать ее",
    tags: ["creativity", "fun", "inspiration", "growth"],
    emoji: "📦",
    associations: [
      "metal box",
      "letter",
      "photo prints",
      "small trinkets",
      "burial spot marker",
    ],
  },
  {
    id: "create-your-dream-home",
    description: "Create your dream home",
    descriptionRus: "Создать дом своей мечты",
    tags: ["achievement", "creativity", "joy", "calm"],
    emoji: "🏡",
    associations: [
      "blueprints",
      "furniture",
      "paint swatches",
      "garden tools",
      "decor",
    ],
  },
  {
    id: "do-something-crazy",
    description: "Do something crazy",
    descriptionRus: "Сделать что-то безумное",
    tags: ["adrenaline", "fun", "experiments", "joy"],
    emoji: "🤪",
    associations: [
      "adventure pass",
      "camera",
      "safety gear",
      "challenge checklist",
      "bucket list entry",
    ],
  },
  {
    id: "do-volunteer-work",
    description: "Do volunteer work",
    descriptionRus: "Заняться волонтерской работой",
    tags: ["kindness", "growth", "relationships", "achievement"],
    emoji: "🙌",
    associations: [
      "volunteer badge",
      "charity T-shirt",
      "notebook",
      "support handbook",
      "donation box",
    ],
  },
  {
    id: "donate-to-a-charity",
    description: "Donate to a charity or cause you believe in",
    descriptionRus:
      "Пожертвовать на благотворительность или дело, в которое вы верите",
    tags: ["kindness", "growth", "inspiration"],
    emoji: "💝",
    associations: [
      "donation receipt",
      "charity certificate",
      "thank you card",
      "cause brochure",
      "fundraising box",
    ],
  },
  {
    id: "drink-2-liters-of-water-daily",
    description: "Drink 2 liters of water every day for 30 days",
    descriptionRus: "Пить 2 литра воды каждый день в течение 30 дней",
    tags: ["health", "growth", "calm"],
    emoji: "💧",
    associations: [
      "water bottle",
      "hydration tracker",
      "glass",
      "water filter",
      "infuser",
    ],
  },
  {
    id: "eat-a-healthier-diet",
    description: "Eat a healthier diet",
    descriptionRus: "Питаться более здоровой пищей",
    tags: ["health", "growth", "fitness"],
    emoji: "🥗",
    associations: [
      "fresh vegetables",
      "recipe book",
      "blender",
      "meal prep containers",
      "water bottle",
    ],
  },
  {
    id: "experience-a-sunrise-sunset",
    description: "Experience a sunrise/sunset",
    descriptionRus: "Насладиться восходом или закатом",
    tags: ["calm", "inspiration", "joy"],
    emoji: "🌅",
    associations: [
      "camera",
      "picnic blanket",
      "thermos",
      "notebook",
      "sun hat",
    ],
  },
  {
    id: "experience-an-obe",
    description: "Experience an OBE (out-of-body experience)",
    descriptionRus: "Испытать внетелесный опыт",
    tags: ["mindfulness", "experiments", "inspiration"],
    emoji: "🌀",
    associations: [
      "meditation guide",
      "relaxing music",
      "comfortable bed",
      "dream journal",
      "aromatherapy oils",
    ],
  },
  {
    id: "explore-a-cave",
    description: "Explore a cave",
    descriptionRus: "Исследовать пещеру",
    tags: ["adrenaline", "fun", "travel", "inspiration"],
    emoji: "🕳️",
    associations: ["headlamp", "boots", "backpack", "gloves", "guidebook"],
  },
  {
    id: "explore-iconic-landmarks-in-your-country",
    description: "Explore iconic landmarks in your country",
    descriptionRus: "Исследовать знаковые достопримечательности своей страны",
    tags: ["travel", "joy", "inspiration", "culture"],
    emoji: "🏞️",
    associations: [
      "travel guide",
      "road map",
      "camera",
      "souvenirs",
      "binoculars",
    ],
  },
  {
    id: "fall-asleep-in-the-arms-of-someone-you-love",
    description: "Fall asleep in the arms of someone you love",
    descriptionRus: "Заснуть в объятиях того, кого вы любите",
    tags: ["love", "calm", "joy"],
    emoji: "💤",
    associations: [
      "cozy blanket",
      "pillow",
      "soft music",
      "candle",
      "bedtime book",
    ],
  },
  {
    id: "fall-in-love",
    description: "Fall in love",
    descriptionRus: "Влюбиться",
    tags: ["love", "joy", "relationships", "inspiration"],
    emoji: "💕",
    associations: [
      "flowers",
      "romantic playlist",
      "candlelight dinner",
      "photo album",
      "love letter",
    ],
  },
  {
    id: "fly-a-kite",
    description: "Fly a kite",
    descriptionRus: "Запустить воздушного змея",
    tags: ["fun", "joy", "calm"],
    emoji: "🪁",
    associations: [
      "kite",
      "open field",
      "string",
      "windy weather",
      "family outing",
    ],
  },
  {
    id: "fly-hot-air-balloon",
    description: "Fly in a hot-air balloon",
    descriptionRus: "Полетать на воздушном шаре",
    tags: ["inspiration", "fun", "adrenaline", "travel"],
    emoji: "🎈",
    associations: ["balloon ticket", "binoculars", "camera", "jacket", "hat"],
  },
  {
    id: "fold-1000-origami-cranes",
    description: "Fold 1,000 origami cranes and give them to someone special",
    descriptionRus:
      "Сложить 1,000 журавликов оригами и подарить их кому-то особенному",
    tags: ["creativity", "kindness", "relationships", "calm"],
    emoji: "📄",
    associations: [
      "origami paper",
      "instruction guide",
      "ribbon",
      "box",
      "display frame",
    ],
  },
  {
    id: "further-study",
    description: "Go onto further study",
    descriptionRus: "Поступить на дальнейшее обучение",
    tags: ["growth", "achievement", "skills", "inspiration"],
    emoji: "🎓",
    associations: [
      "textbooks",
      "notebook",
      "laptop",
      "study group",
      "certificate",
    ],
  },
  {
    id: "get-closure",
    description: "Get closure on any past unhappiness",
    descriptionRus: "Закрыть все прошлые неприятности",
    tags: ["calm", "growth", "mindfulness", "relationships"],
    emoji: "🔑",
    associations: [
      "journal",
      "therapy sessions",
      "meditation guide",
      "letters",
      "support group",
    ],
  },
  {
    id: "get-drink-for-stranger",
    description: "Get a drink for a stranger",
    descriptionRus: "Купить напиток для незнакомца",
    tags: ["kindness", "relationships", "fun"],
    emoji: "☕",
    associations: [
      "coffee cup",
      "bar receipt",
      "thank you note",
      "conversation starter",
      "smile pin",
    ],
  },
  {
    id: "get-featured-in-the-media",
    description: "Get featured in the media for something you are proud of",
    descriptionRus: "Попасть в СМИ за то, чем вы гордитесь",
    tags: ["achievement", "inspiration", "joy"],
    emoji: "📰",
    associations: [
      "newspaper",
      "microphone",
      "camera",
      "award",
      "press release",
    ],
  },
  {
    id: "go-horseback-riding",
    description: "Go horseback riding",
    descriptionRus: "Покататься на лошади",
    tags: ["fun", "joy", "calm", "skills"],
    emoji: "🐎",
    associations: [
      "horse saddle",
      "helmet",
      "boots",
      "trail map",
      "riding gloves",
    ],
  },
  {
    id: "go-on-a-blind-date",
    description: "Go on a blind date (for the singles!)",
    descriptionRus: "Пойти на свидание вслепую (для тех, кто одинок!)",
    tags: ["fun", "love", "relationships", "experiments"],
    emoji: "🌹",
    associations: [
      "restaurant reservation",
      "gift card",
      "flowers",
      "conversation topics",
      "outfit",
    ],
  },
  {
    id: "go-on-a-cruise",
    description: "Go on a cruise",
    descriptionRus: "Отправиться в круиз",
    tags: ["travel", "fun", "joy", "inspiration"],
    emoji: "🚢",
    associations: [
      "cruise tickets",
      "deck chair",
      "binoculars",
      "sun hat",
      "camera",
    ],
  },
  {
    id: "go-on-a-meditation-retreat",
    description: "Go on a meditation retreat",
    descriptionRus: "Отправиться на медитационный ретрит",
    tags: ["calm", "mindfulness", "growth", "health"],
    emoji: "🧘‍♂️",
    associations: [
      "meditation cushion",
      "retreat schedule",
      "notebook",
      "incense",
      "yoga mat",
    ],
  },
  {
    id: "go-rafting",
    description: "Go rafting",
    descriptionRus: "Пойти на рафтинг",
    tags: ["adrenaline", "fun", "fitness"],
    emoji: "🛶",
    associations: ["raft", "life jacket", "helmet", "paddle", "waterproof bag"],
  },
  {
    id: "go-scuba-diving",
    description: "Go scuba diving and snorkeling",
    descriptionRus: "Заняться дайвингом и сноркелингом",
    tags: ["travel", "fun", "adrenaline", "inspiration"],
    emoji: "🤿",
    associations: [
      "scuba gear",
      "snorkel",
      "flippers",
      "underwater camera",
      "wetsuit",
    ],
  },
  {
    id: "go-skiing",
    description: "Go skiing",
    descriptionRus: "Покататься на лыжах",
    tags: ["fitness", "fun", "adrenaline"],
    emoji: "⛷️",
    associations: ["skis", "helmet", "goggles", "snow jacket", "lift pass"],
  },
  {
    id: "go-stargazing",
    description: "Go stargazing",
    descriptionRus: "Любоваться звездами",
    tags: ["calm", "inspiration", "fun"],
    emoji: "✨",
    associations: [
      "telescope",
      "star chart",
      "blanket",
      "thermos",
      "binoculars",
    ],
  },
  {
    id: "go-to-a-costume-party",
    description: "Go to a costume party",
    descriptionRus: "Пойти на костюмированную вечеринку",
    tags: ["fun", "creativity", "friends", "joy"],
    emoji: "🎭",
    associations: ["costume", "mask", "props", "makeup", "party favors"],
  },
  {
    id: "help-clean-up-a-park-or-beach",
    description: "Help clean up a park or beach",
    descriptionRus: "Помочь очистить парк или пляж",
    tags: ["kindness", "growth", "health", "achievement"],
    emoji: "🗑️",
    associations: [
      "trash bags",
      "recycling bins",
      "gloves",
      "tongs",
      "volunteer badge",
    ],
  },
  {
    id: "help-someone-in-need",
    description: "Help someone in need",
    descriptionRus: "Помочь тому, кто в этом нуждается",
    tags: ["kindness", "relationships", "growth"],
    emoji: "❤️‍🩹",
    associations: [
      "donation box",
      "volunteer badge",
      "care package",
      "thank you card",
      "support guide",
    ],
  },
  {
    id: "hit-bulls-eye-in-darts",
    description: "Hit bulls-eye in darts",
    descriptionRus: "Попасть в яблочко в дартсе",
    tags: ["fun", "achievement", "adrenaline"],
    emoji: "🎯",
    associations: [
      "dartboard",
      "darts",
      "scoreboard",
      "prize",
      "pub atmosphere",
    ],
  },
  {
    id: "host-a-small-gathering-for-close-friends",
    description: "Host a small gathering for close friends",
    descriptionRus: "Устроить небольшую встречу для близких друзей",
    tags: ["fun", "relationships", "joy", "kindness"],
    emoji: "🍻",
    associations: [
      "party decorations",
      "board games",
      "snacks",
      "playlist",
      "photo booth props",
    ],
  },
  {
    id: "join-a-yoga-or-pilates-class",
    description: "Join a yoga or Pilates class",
    descriptionRus: "Записаться на занятия йогой или пилатесом",
    tags: ["health", "calm", "fitness", "growth"],
    emoji: "🧘",
    associations: [
      "yoga mat",
      "stretching bands",
      "water bottle",
      "comfortable clothes",
      "yoga blocks",
    ],
  },
  {
    id: "join-social-etiquette-class",
    description: "Join a social etiquette class",
    descriptionRus: "Присоединиться к классу по социальному этикету",
    tags: ["growth", "relationships", "skills"],
    emoji: "🎩",
    associations: [
      "class notes",
      "guidebook",
      "certificate",
      "practice scenarios",
      "mentor",
    ],
  },
  {
    id: "knit-a-scarf",
    description: "Knit a scarf",
    descriptionRus: "Связать шарф",
    tags: ["creativity", "calm", "skills", "achievement"],
    emoji: "🧣",
    associations: [
      "yarn",
      "knitting needles",
      "pattern guide",
      "measuring tape",
      "scarf stand",
    ],
  },
  {
    id: "learn-a-new-creative-skill",
    description:
      "Learn a new creative skill (e.g., painting, pottery, graphic design)",
    descriptionRus: "Научиться новому творческому навыку",
    tags: ["creativity", "growth", "fun", "skills"],
    emoji: "🎨",
    associations: [
      "paintbrush",
      "canvas",
      "pottery wheel",
      "graphic tablet",
      "instructional book",
    ],
  },
  {
    id: "learn-martial-art",
    description: "Learn a martial art",
    descriptionRus: "Научиться боевому искусству",
    tags: ["fitness", "skills", "achievement", "growth"],
    emoji: "🥋",
    associations: [
      "martial arts uniform",
      "training mat",
      "belt",
      "practice dummy",
      "mentor",
    ],
  },
  {
    id: "learn-new-language",
    description: "Learn a new language",
    descriptionRus: "Выучить новый язык",
    tags: ["growth", "skills", "inspiration", "achievement"],
    emoji: "📘",
    associations: [
      "language app",
      "notebook",
      "dictionary",
      "language flashcards",
      "tutor",
    ],
  },
  {
    id: "learn-sign-language",
    description: "Learn sign language",
    descriptionRus: "Выучить язык жестов",
    tags: ["growth", "skills", "relationships", "achievement"],
    emoji: "🤟",
    associations: [
      "sign language book",
      "practice partner",
      "flashcards",
      "video lessons",
      "certificate",
    ],
  },
  {
    id: "learn-small-talk",
    description: "Learn how to make small talk confidently",
    descriptionRus: "Научиться уверенно вести светскую беседу",
    tags: ["growth", "relationships", "skills", "fun"],
    emoji: "🗣️",
    associations: [
      "conversation guide",
      "notebook",
      "topic cards",
      "practice partner",
      "confidence booster",
    ],
  },
  {
    id: "learn-surfing",
    description: "Learn to surf or paddleboard",
    descriptionRus: "Научиться серфингу или сапсерфингу",
    tags: ["fitness", "fun", "skills", "inspiration"],
    emoji: "🏄",
    associations: [
      "surfboard",
      "wetsuit",
      "lessons",
      "beach towel",
      "sunblock",
    ],
  },
  {
    id: "learn-wine-appreciation",
    description: "Learn wine appreciation",
    descriptionRus: "Научиться разбираться в винах",
    tags: ["skills", "fun", "growth", "inspiration"],
    emoji: "🍷",
    associations: [
      "wine glass",
      "wine guide",
      "cheese platter",
      "notebook",
      "wine bottles",
    ],
  },
  {
    id: "let-someone-know-how-much-they-mean-to-you",
    description: "Let someone know how much they mean to you",
    descriptionRus: "Дать понять кому-то, как много он для вас значит",
    tags: ["love", "kindness", "relationships"],
    emoji: "💌",
    associations: ["letter", "gift", "flowers", "chocolates", "photo frame"],
  },
  {
    id: "live-through-all-seasons",
    description: "Live through all four seasons of the year",
    descriptionRus: "Прожить все четыре времени года",
    tags: ["inspiration", "fun", "calm", "growth"],
    emoji: "🌦️",
    associations: [
      "seasonal calendar",
      "photo album",
      "weather gear",
      "journal",
      "seasonal recipes",
    ],
  },
  {
    id: "make-a-difference-in-someones-life",
    description: "Make a difference in someone’s life",
    descriptionRus: "Изменить чью-то жизнь к лучшему",
    tags: ["kindness", "achievement", "relationships", "inspiration"],
    emoji: "🤲",
    associations: [
      "gift box",
      "support card",
      "mentorship guide",
      "donation receipt",
      "personalized gift",
    ],
  },
  {
    id: "make-a-good-deed",
    description: "Make a good deed expecting nothing in return",
    descriptionRus: "Совершить добрый поступок, не ожидая ничего взамен",
    tags: ["kindness", "growth", "relationships"],
    emoji: "🫶",
    associations: [
      "thank you card",
      "donation box",
      "volunteer badge",
      "acts of kindness guide",
      "flowers",
    ],
  },
  {
    id: "make-a-heartfelt-surprise-to-someone",
    description: "Make a heartfelt surprise to someone",
    descriptionRus: "Сделать душевный сюрприз кому-то",
    tags: ["kindness", "joy", "relationships", "fun"],
    emoji: "🎁",
    associations: [
      "gift box",
      "balloons",
      "cake",
      "confetti",
      "thank you note",
    ],
  },
  {
    id: "overcome-biggest-fear",
    description: "Overcome your biggest fear",
    descriptionRus: "Преодолеть свой самый большой страх",
    tags: ["growth", "achievement", "inspiration"],
    emoji: "🦁",
    associations: [
      "counseling book",
      "support group",
      "action plan",
      "motivational quotes",
      "journal",
    ],
  },
  {
    id: "participate-in-a-hackathon",
    description: "Participate in a hackathon or creative competition",
    descriptionRus: "Принять участие в хакатоне или творческом конкурсе",
    tags: ["achievement", "creativity", "skills", "adrenaline"],
    emoji: "💻",
    associations: [
      "laptop",
      "team badge",
      "project board",
      "competition certificate",
      "snacks",
    ],
  },
  {
    id: "plant-a-tree-and-watch-it-grow",
    description: "Plant a tree and watch it grow",
    descriptionRus: "Посадить дерево и наблюдать за его ростом",
    tags: ["kindness", "growth", "achievement", "calm"],
    emoji: "🌱",
    associations: [
      "seedlings",
      "watering can",
      "gardening gloves",
      "shovel",
      "tree marker",
    ],
  },
  {
    id: "play-in-a-movie",
    description: "Play in a movie (big or small role!)",
    descriptionRus: "Сняться в фильме (в большой или маленькой роли!)",
    tags: ["creativity", "fun", "inspiration", "achievement"],
    emoji: "🎬",
    associations: ["script", "camera", "costume", "clapperboard", "spotlight"],
  },
  {
    id: "play-musical-instrument",
    description: "Play a (new) musical instrument",
    descriptionRus: "Научиться играть на (новом) музыкальном инструменте",
    tags: ["creativity", "skills", "fun", "growth"],
    emoji: "🎸",
    associations: [
      "instrument",
      "sheet music",
      "practice journal",
      "metronome",
      "tuner",
    ],
  },
  {
    id: "practice-mindfulness-meditation",
    description: "Try practicing mindfulness meditation for 10 minutes a day",
    descriptionRus: "Практиковать осознанную медитацию по 10 минут в день",
    tags: ["mindfulness", "calm", "health", "growth"],
    emoji: "🪷",
    associations: [
      "meditation guide",
      "candle",
      "comfortable chair",
      "aromatherapy oils",
      "timer",
    ],
  },
  {
    id: "protect-dolphins-and-marine-life",
    description: "Protect dolphins and marine life",
    descriptionRus: "Защищать дельфинов и морскую жизнь",
    tags: ["kindness", "growth", "experiments", "inspiration"],
    emoji: "🐬",
    associations: [
      "marine life book",
      "reusable bottles",
      "ocean cleaning tools",
      "donation certificate",
      "volunteer badge",
    ],
  },
  {
    id: "publish-a-book",
    description: "Publish a book",
    descriptionRus: "Опубликовать книгу",
    tags: ["creativity", "achievement", "inspiration"],
    emoji: "📚",
    associations: [
      "manuscript",
      "book cover",
      "pen",
      "publisher contract",
      "library",
    ],
  },
  {
    id: "reach-your-ideal-weight",
    description: "Reach your ideal weight",
    descriptionRus: "Достичь своего идеального веса",
    tags: ["fitness", "achievement", "health"],
    emoji: "⚖️",
    associations: [
      "scale",
      "meal plan",
      "workout gear",
      "healthy snacks",
      "fitness tracker",
    ],
  },
  {
    id: "read-12-books",
    description: "Read 12 books, one for each month of the year",
    descriptionRus: "Прочитать 12 книг, по одной на каждый месяц года",
    tags: ["growth", "inspiration", "fun"],
    emoji: "📙",
    associations: [
      "book subscription",
      "library card",
      "reading journal",
      "bookmark",
      "booklight",
    ],
  },
  {
    id: "read-unexpected-book",
    description: "Read a completely unexpected book",
    descriptionRus: "Прочитать совершенно неожиданную книгу",
    tags: ["growth", "inspiration", "fun", "experiments"],
    emoji: "📔",
    associations: [
      "bookstore receipt",
      "reading lamp",
      "bookmark",
      "library card",
      "journal",
    ],
  },
  {
    id: "ride-roller-coaster",
    description: "Ride a roller coaster",
    descriptionRus: "Прокатиться на американских горках",
    tags: ["fun", "adrenaline", "joy"],
    emoji: "🎢",
    associations: [
      "ride ticket",
      "theme park map",
      "photo",
      "friends",
      "sunglasses",
    ],
  },
  {
    id: "romantic-getaway",
    description: "Go on a romantic getaway",
    descriptionRus: "Отправиться в романтическое путешествие",
    tags: ["love", "relationships", "calm", "joy"],
    emoji: "💑",
    associations: [
      "hotel reservation",
      "flowers",
      "candlelight dinner",
      "beach",
      "travel tickets",
    ],
  },
  {
    id: "run-a-marathon",
    description: "Run a marathon",
    descriptionRus: "Пробежать марафон",
    tags: ["fitness", "achievement", "adrenaline"],
    emoji: "🏃",
    associations: [
      "running shoes",
      "fitness tracker",
      "marathon bib",
      "medal",
      "hydration pack",
    ],
  },
  {
    id: "run-barefoot",
    description: "Run barefoot",
    descriptionRus: "Бегать босиком",
    tags: ["fitness", "fun", "experiments", "health"],
    emoji: "🏃‍♂️",
    associations: [
      "barefoot shoes",
      "grass field",
      "fitness tracker",
      "running path",
      "hydration pack",
    ],
  },
  {
    id: "see-cherry-blossoms-in-japan",
    description: "See cherry blossoms in Japan",
    descriptionRus: "Посмотреть на цветение сакуры в Японии",
    tags: ["travel", "inspiration", "calm", "joy"],
    emoji: "🌸",
    associations: [
      "kimono",
      "blossom petals",
      "tea set",
      "photo album",
      "travel guide",
    ],
  },
  {
    id: "see-snow",
    description: "See snow",
    descriptionRus: "Увидеть снег",
    tags: ["travel", "calm", "joy"],
    emoji: "❄️",
    associations: [
      "snowflake",
      "winter coat",
      "mittens",
      "sled",
      "snowman kit",
    ],
  },
  {
    id: "see-the-mona-lisa-in-louvre",
    description: "See the Mona Lisa in Louvre",
    descriptionRus: "Посмотреть на Монну Лизу в Лувре",
    tags: ["travel", "inspiration", "culture"],
    emoji: "🖼️",
    associations: [
      "museum ticket",
      "art book",
      "painting replica",
      "guidebook",
      "sketchpad",
    ],
  },
  {
    id: "see-the-northern-lights",
    description: "See the northern lights",
    descriptionRus: "Увидеть северное сияние",
    tags: ["travel", "inspiration", "joy", "calm"],
    emoji: "🌌",
    associations: [
      "warm jacket",
      "thermos",
      "tripod",
      "wool hat",
      "travel diary",
    ],
  },
  {
    id: "sing-to-an-audience",
    description: "Sing to an audience",
    descriptionRus: "Спеть перед аудиторией",
    tags: ["fun", "achievement", "adrenaline", "creativity"],
    emoji: "🎤",
    associations: [
      "microphone",
      "stage",
      "lyrics sheet",
      "spotlight",
      "music tracks",
    ],
  },
  {
    id: "speak-publicly",
    description: "Speak publicly in front of 100 people (or more)",
    descriptionRus: "Выступить перед аудиторией в 100 человек (или больше)",
    tags: ["achievement", "skills", "growth", "adrenaline"],
    emoji: "📢",
    associations: [
      "microphone",
      "presentation slides",
      "audience",
      "feedback form",
      "confidence booster",
    ],
  },
  {
    id: "start-a-blog-or-vlog",
    description: "Start a blog or vlog documenting your journey",
    descriptionRus: "Начать блог или влог, документирующий ваше путешествие",
    tags: ["creativity", "growth", "inspiration", "skills"],
    emoji: "📹",
    associations: [
      "camera",
      "notebook",
      "editing software",
      "microphone",
      "social media",
    ],
  },
  {
    id: "start-a-collection",
    description: "Start a collection (e.g., stamps, postcards, art)",
    descriptionRus: "Начать коллекцию (например, марок, открыток, искусства)",
    tags: ["creativity", "calm", "inspiration", "achievement"],
    emoji: "🎟️",
    associations: [
      "collector's album",
      "display case",
      "magnifying glass",
      "rare items",
      "catalog",
    ],
  },
  {
    id: "start-your-business",
    description: "Start your business",
    descriptionRus: "Начать свой бизнес",
    tags: ["achievement", "growth", "inspiration", "skills"],
    emoji: "📈",
    associations: [
      "business plan",
      "office setup",
      "marketing materials",
      "logo design",
      "finance tracker",
    ],
  },
  {
    id: "take-a-road-trip-to-lesser-known-destinations",
    description: "Take a road trip to lesser-known destinations",
    descriptionRus: "Отправиться в путешествие по малоизвестным местам",
    tags: ["travel", "experiments", "fun", "inspiration"],
    emoji: "🚗",
    associations: [
      "road map",
      "camping gear",
      "car snacks",
      "travel playlist",
      "photo album",
    ],
  },
  {
    id: "take-part-in-a-triathlon",
    description: "Take part in a triathlon",
    descriptionRus: "Принять участие в триатлоне",
    tags: ["fitness", "achievement", "adrenaline", "skills"],
    emoji: "🏊‍♂️",
    associations: [
      "bike",
      "swimsuit",
      "running shoes",
      "goggles",
      "energy gel",
    ],
  },
  {
    id: "take-public-speaking-course",
    description: "Take a public speaking course",
    descriptionRus: "Пройти курс по ораторскому мастерству",
    tags: ["growth", "achievement", "skills"],
    emoji: "🎙️",
    associations: [
      "course materials",
      "microphone",
      "presentation slides",
      "mentor feedback",
      "stage",
    ],
  },
  {
    id: "take-up-dancing",
    description: "Take up dancing",
    descriptionRus: "Начать заниматься танцами",
    tags: ["fitness", "fun", "creativity", "growth"],
    emoji: "💃",
    associations: [
      "dance shoes",
      "mirror",
      "music player",
      "dance floor",
      "costume",
    ],
  },
  {
    id: "take-up-new-sport",
    description: "Take up a new sport",
    descriptionRus: "Начать заниматься новым видом спорта",
    tags: ["fitness", "fun", "skills", "growth"],
    emoji: "⚽",
    associations: [
      "sports gear",
      "lessons",
      "team jersey",
      "water bottle",
      "fitness tracker",
    ],
  },
  {
    id: "tell-10-people-about-bucket-list",
    description: "Tell 10 people about your bucket list",
    descriptionRus: "Рассказать 10 людям о своем списке желаний",
    tags: ["inspiration", "fun", "relationships", "growth"],
    emoji: "📝",
    associations: [
      "bucket list notebook",
      "social media post",
      "friends gathering",
      "photo collage",
      "discussion topics",
    ],
  },
  {
    id: "tell-your-parents-and-siblings-you-love-them",
    description: "Tell your parents and siblings you love them",
    descriptionRus:
      "Сказать своим родителям и братьям/сестрам, что вы их любите",
    tags: ["love", "relationships", "kindness", "joy"],
    emoji: "❤️",
    associations: [
      "family photo",
      "greeting card",
      "flowers",
      "chocolates",
      "candle",
    ],
  },
  {
    id: "throw-a-mega-party",
    description: "Throw a mega party",
    descriptionRus: "Устроить грандиозную вечеринку",
    tags: ["fun", "joy", "friends", "creativity"],
    emoji: "🎉",
    associations: [
      "party decorations",
      "DJ equipment",
      "snacks",
      "drinks",
      "balloons",
    ],
  },
  {
    id: "travel-around-the-world",
    description: "Travel around the world",
    descriptionRus: "Путешествовать по миру",
    tags: ["travel", "joy", "inspiration"],
    emoji: "🌍",
    associations: [
      "passport",
      "plane",
      "map",
      "luggage",
      "globe",
      "souvenir",
      "camera",
    ],
  },
  {
    id: "trek-inca-trail",
    description: "Trek the Inca trail",
    descriptionRus: "Пройти по тропе инков",
    tags: ["travel", "adventure", "achievement", "fitness"],
    emoji: "⛰️",
    associations: ["hiking boots", "backpack", "map", "water bottle", "camera"],
  },
  {
    id: "try-a-profession-in-a-different-field",
    description: "Try a profession in a different field",
    descriptionRus: "Попробовать профессию в другой области",
    tags: ["growth", "experiments", "achievement", "creativity"],
    emoji: "🧑‍💻",
    associations: [
      "job application",
      "workshop tools",
      "uniform",
      "mentorship program",
      "notepad",
    ],
  },
  {
    id: "try-frontline-jobs",
    description: "Try frontline jobs for the experience",
    descriptionRus: "Попробовать работу на передовой для получения опыта",
    tags: ["growth", "experiments", "achievement", "skills"],
    emoji: "🛠️",
    associations: [
      "uniform",
      "name badge",
      "work gloves",
      "task checklist",
      "mentor guide",
    ],
  },
  {
    id: "try-new-cuisine",
    description: "Try a new cuisine from a different culture",
    descriptionRus: "Попробовать кухню из другой культуры",
    tags: ["fun", "inspiration", "experiments", "growth"],
    emoji: "🍴",
    associations: [
      "restaurant reservation",
      "cookbook",
      "menu",
      "dining set",
      "spices",
    ],
  },
  {
    id: "try-skydiving",
    description: "Try skydiving",
    descriptionRus: "Попробовать прыжки с парашютом",
    tags: ["adrenaline", "fun", "achievement", "inspiration"],
    emoji: "🪂",
    associations: ["parachute", "jumpsuit", "helmet", "goggles", "certificate"],
  },
  {
    id: "visit-5-unesco-sites",
    description: "Visit at least 5 UNESCO World Heritage Sites",
    descriptionRus: "Посетить 5 объектов Всемирного наследия ЮНЕСКО",
    tags: ["travel", "inspiration", "growth", "achievement"],
    emoji: "🌏",
    associations: ["passport", "guidebook", "map", "camera", "souvenirs"],
  },
  {
    id: "visit-a-castle",
    description: "Visit a castle",
    descriptionRus: "Посетить замок",
    tags: ["travel", "inspiration", "joy"],
    emoji: "🏰",
    associations: [
      "castle tour ticket",
      "medieval map",
      "souvenir crown",
      "camera",
      "historical book",
    ],
  },
  {
    id: "visit-a-volcano",
    description: "Visit a volcano",
    descriptionRus: "Посетить вулкан",
    tags: ["travel", "adrenaline", "inspiration"],
    emoji: "🌋",
    associations: [
      "lava rock",
      "hiking boots",
      "volcanic ash",
      "binoculars",
      "camera",
      "backpack",
    ],
  },
  {
    id: "volunteer-at-a-hospice",
    description: "Volunteer at a hospice",
    descriptionRus: "Быть волонтером в хосписе",
    tags: ["kindness", "relationships", "growth", "calm"],
    emoji: "🏥",
    associations: [
      "volunteer badge",
      "support guide",
      "comfort kit",
      "thank you card",
      "flowers",
    ],
  },
  {
    id: "walk-dance-barefoot-in-the-rain",
    description: "Walk/dance barefoot in the rain",
    descriptionRus: "Прогуляться или потанцевать босиком под дождем",
    tags: ["fun", "joy", "experiments", "calm"],
    emoji: "🌧️",
    associations: [
      "raincoat",
      "umbrella",
      "barefoot shoes",
      "puddle",
      "music playlist",
    ],
  },
  {
    id: "win-a-lucky-draw",
    description: "Win a lucky draw",
    descriptionRus: "Выиграть в лотерею",
    tags: ["fun", "joy", "adrenaline"],
    emoji: "🎲",
    associations: [
      "lottery ticket",
      "prize envelope",
      "raffle box",
      "confetti",
      "trophy",
    ],
  },
  {
    id: "witness-a-solar-eclipse",
    description: "Witness a solar eclipse",
    descriptionRus: "Увидеть солнечное затмение",
    tags: ["travel", "inspiration", "calm", "adrenaline"],
    emoji: "🌒",
    associations: [
      "eclipse glasses",
      "telescope",
      "camera filter",
      "celestial chart",
      "notebook",
    ],
  },
  {
    id: "write-a-letter-to-someone-you-admire",
    description: "Write a letter to someone you admire",
    descriptionRus: "Написать письмо кому-то, кем вы восхищаетесь",
    tags: ["inspiration", "kindness", "creativity"],
    emoji: "✉️",
    associations: ["stationery", "envelope", "pen", "stamps", "seal wax"],
  },
  {
    id: "write-daily-gratitude-journal",
    description: "Write a daily gratitude journal",
    descriptionRus: "Вести дневник благодарности ежедневно",
    tags: ["mindfulness", "calm", "growth", "inspiration"],
    emoji: "📖",
    associations: [
      "notebook",
      "pen",
      "cozy corner",
      "gratitude prompts",
      "bookmark",
    ],
  },
  {
    id: "write-letter-to-future-self",
    description: "Write and mail a letter to your future self",
    descriptionRus: "Написать и отправить письмо самому себе в будущее",
    tags: ["inspiration", "creativity", "calm", "growth"],
    emoji: "📮",
    associations: [
      "envelope",
      "letter paper",
      "stamps",
      "notebook",
      "seal wax",
    ],
  },
];
