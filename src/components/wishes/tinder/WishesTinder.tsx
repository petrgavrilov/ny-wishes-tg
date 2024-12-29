import "./WishesTinder.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";

import volcanoHike from "../../../../public/images/volcano-hike.png";
import snowman from "../../../../public/images/snowman.png";
import pirateQueen from "../../../../public/images/pirate-queen.png";
import flyingGirl from "../../../../public/images/flying-girl.png";
import girlOnBike from "../../../../public/images/girl-on-bike.png";
import drawingGirl from "../../../../public/images/drawing-girl.png";
import { Dispatch, useState } from "react";

interface Card {
  image: StaticImageData;
  text: string;
  id: string;
}

interface CardProps extends Card {
  cards: Card[];
  setCards: Dispatch<React.SetStateAction<Card[]>>;
}

const cardsData: Card[] = [
  {
    image: volcanoHike,
    text: `Отправиться в путешествие по малоизвестным местам`,
    id: "volcano-hike",
  },
  {
    image: snowman,
    text: `Построить снеговика`,
    id: "snowman",
  },
  {
    image: pirateQueen,
    text: `Стать пиратом`,
    id: "pirate-queen",
  },
  {
    image: flyingGirl,
    text: `Полететь на воздушном шаре`,
    id: "flying-girl",
  },
  {
    image: girlOnBike,
    text: `Прокатиться на велосипeде`,
    id: "girl-on-bike",
  },
  {
    image: drawingGirl,
    text: `Нарисовать портрет`,
    id: "drawing-girl",
  },
];

function Card({ image, text, id, setCards, cards }: CardProps) {
  const x = useMotionValue(0);

  const scale = useTransform(x, [-150, 0, 150], [1.1, 1, 1.1]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const currentIndex = cards.findIndex((card) => card.id === id);
  const isFront = currentIndex === cards.length - 1;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : currentIndex % 2 === 0 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log(latest);
  // });

  const handleDragEnd = () => {
    const takeAfterDistance = 50;
    const currentDragDistance = Math.abs(x.get());

    if (currentDragDistance > takeAfterDistance) {
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    }
  };

  return (
    <motion.div
      className="card-wrapper"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, scale, rotate }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      onDragEnd={handleDragEnd}
    >
      <div className="card">
        <Image
          className="card-image"
          src={image}
          alt="Volcano hike"
          width={312}
          height={312}
          priority={true}
        />
        <div className="card-text">{text}</div>
      </div>
    </motion.div>
  );
}

export default function WishesTinder() {
  const [cards, setCards] = useState<Card[]>([...cardsData].reverse());

  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-stack">
          {cards.map((card) => (
            <Card key={card.id} {...card} cards={cards} setCards={setCards} />
          ))}
        </div>
      </div>
    </div>
  );
}
