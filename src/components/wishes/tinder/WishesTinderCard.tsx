import { useTelegramSdk } from "@/providers/telegram-sdk";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { Dispatch } from "react";
import Image from "next/image";

export interface Card {
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

export default function WishesTinderCard({
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
