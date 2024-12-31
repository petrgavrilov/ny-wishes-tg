import "./WishesTinder.scss";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Wish } from "@/data/wishes";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { useWishes } from "@/providers/wishes";

interface Card {
  image: string;
  text: string;
  id: string;
}

interface CardProps extends Card {
  cards: Card[];
  markCard: (id: string, type: "like" | "dislike") => void;
  setNextCardType: Dispatch<React.SetStateAction<"left" | "right" | null>>;
  nextCardType: "left" | "right" | null;
}

function Card({
  image,
  text,
  id,
  markCard,
  cards,
  setNextCardType,
  nextCardType,
}: CardProps) {
  const x = useMotionValue(0);
  const { hapticFeedback } = useTelegramSdk();

  const scaleMotion = useTransform(x, [-150, 0, 150], [1.1, 1, 1.1]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const currentIndex = cards.findIndex((card) => card.id === id);
  const isFront = currentIndex === cards.length - 1;

  const rotate = useTransform(() => {
    return rotateRaw.get();
  });

  const translateY = (cards.length - currentIndex - 1) * -12;
  const scale = isFront
    ? scaleMotion
    : 1 - (cards.length - currentIndex - 1) * 0.016;

  useMotionValueEvent(x, "change", (latest) => {
    if (latest > 0 && nextCardType !== "right") {
      setNextCardType("right");
    } else if (latest < 0 && nextCardType !== "left") {
      setNextCardType("left");
    }
  });

  const handleDragEnd = () => {
    const takeAfterDistance = 20;
    const currentDragDistance = Math.abs(x.get());

    if (currentDragDistance > takeAfterDistance) {
      markCard(id, x.get() > 0 ? "like" : "dislike");
      hapticFeedback();
    }
  };

  return (
    <motion.div
      className="card-wrapper"
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      style={{ x, scale, rotate, translateY }}
      onDragEnd={handleDragEnd}
    >
      <div className={`card ${isFront ? "-front" : "-back"}`}>
        <Image
          className="card-image"
          src={image}
          alt={text}
          width={312}
          height={312}
          priority={true}
        />
        <div className="card-text">{text}</div>
      </div>
    </motion.div>
  );
}

interface WishesTinderProps {
  nextCardType: "left" | "right" | null;
  setNextCardType: Dispatch<SetStateAction<"left" | "right" | null>>;
  setNextWish: Dispatch<SetStateAction<Wish | null>>;
}

const CARDS_COUNT = 5;

export default function WishesTinder({
  nextCardType,
  setNextCardType,
  setNextWish,
}: WishesTinderProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const { wishes, markedWishes, setMarkedWishes } = useWishes();

  useEffect(() => {
    if (wishes.length === 0) {
      return;
    }
    const notMarkedWishes = wishes.filter((wish) => !markedWishes[wish.id]);
    const nextWishes = [...notMarkedWishes.slice(0, CARDS_COUNT)].reverse();
    const cards = nextWishes.map((wish) => {
      return {
        id: wish.id,
        image: `/wishes/${wish.id}.png`,
        text: wish.descriptionRus,
      };
    });

    setCards(cards);
    const nextWish =
      nextWishes.length > 0 ? nextWishes[nextWishes.length - 1] : null;
    setNextWish(nextWish);
  }, [wishes, markedWishes, setNextWish, setCards]);

  const markCard = (id: string, type: "like" | "dislike") => {
    setMarkedWishes((prev) => ({ ...prev, [id]: type }));
  };

  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-stack">
          <AnimatePresence>
            {cards.map((card) => (
              <motion.div
                className="card-stack-item"
                key={card.id}
                initial="hidden"
                exit={
                  nextCardType === "left"
                    ? {
                        translateX: "-100vw",
                        scale: 0.9,
                        opacity: 0,
                        zIndex: 1,
                      }
                    : { translateX: "100vw", scale: 0.9, opacity: 0, zIndex: 1 }
                }
              >
                <Card
                  {...card}
                  cards={cards}
                  markCard={markCard}
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
