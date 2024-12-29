import "./WishesTinder.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";
import {
  AnimatePresence,
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

interface Card {
  image: StaticImageData;
  text: string;
  id: string;
}

interface CardProps extends Card {
  cards: Card[];
  setCards: Dispatch<React.SetStateAction<Card[]>>;
  setNextCardType: Dispatch<React.SetStateAction<"left" | "right" | null>>;
  nextCardType: "left" | "right" | null;
}

function Card({
  image,
  text,
  id,
  setCards,
  cards,
  setNextCardType,
  nextCardType,
}: CardProps) {
  const x = useMotionValue(0);

  const scaleMotion = useTransform(x, [-150, 0, 150], [1.1, 1, 1.1]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const currentIndex = cards.findIndex((card) => card.id === id);
  const isFront = currentIndex === cards.length - 1;

  const rotate = useTransform(() => {
    return rotateRaw.get();
  });

  const translateY = (cards.length - currentIndex - 1) * -8;

  useMotionValueEvent(x, "change", (latest) => {
    if (latest > 0 && nextCardType !== "right") {
      setNextCardType("right");
    } else if (latest < 0 && nextCardType !== "left") {
      setNextCardType("left");
    }
  });

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
      style={{ x, scale: scaleMotion, rotate }}
      animate={{
        translateY,
      }}
      onDragEnd={handleDragEnd}
    >
      <div className={`card ${isFront ? "-front" : "-back"}`}>
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
  const [nextCardType, setNextCardType] = useState<"left" | "right" | null>(
    null
  );

  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-stack">
          <AnimatePresence>
            {cards.map((card) => (
              <motion.div
                className="card-stack-item"
                key={card.id}
                exit={
                  nextCardType === "left"
                    ? { translateX: "-100vw", scale: 0.9, opacity: 0 }
                    : { translateX: "100vw", scale: 0.9, opacity: 0 }
                }
              >
                <Card
                  {...card}
                  cards={cards}
                  setCards={setCards}
                  setNextCardType={setNextCardType}
                  nextCardType={nextCardType}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
