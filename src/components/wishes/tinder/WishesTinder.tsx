import "./WishesTinder.scss";

import { AnimatePresence, motion } from "motion/react";

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { MAX_LIKES, Wish } from "@/data/wishes";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { useWishes } from "@/providers/wishes";
import WishesTinderCard, { Card } from "./WishesTinderCard";

export const CARDS_COUNT = 5;

interface WishesTinderProps {
  nextCardType: "left" | "right" | null;
  setNextCardType: Dispatch<SetStateAction<"left" | "right" | null>>;
  setNextWish: Dispatch<SetStateAction<Wish | null>>;
}

function Wrapper({ children }: PropsWithChildren) {
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-stack">{children}</div>
      </div>
    </div>
  );
}

export default function WishesTinder({
  nextCardType,
  setNextCardType,
  setNextWish,
}: WishesTinderProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const {
    shuffledWishes: wishes,
    markedWishes,
    unmarkedWishesCount,
    likedWishesCount,

    setMarkedWishes,
    resetWishes,
  } = useWishes();

  const { hapticFeedback, popup } = useTelegramSdk();

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

  const reset = () => {
    resetWishes();
    hapticFeedback();
  };

  const handleReset = async () => {
    if (popup.isSupported() && popup.open.isAvailable()) {
      const promise = popup.open({
        message: "Сбросить выбранные желания?",
        buttons: [
          { id: "no", type: "default", text: "Нет" },
          { id: "yes", type: "destructive", text: "Да" },
        ],
      });
      const buttonId = await promise;
      if (buttonId === "yes") {
        reset();
      }
    } else {
      const confirm = window.confirm(`Сбросить выбранные желания?`);
      if (confirm) {
        reset();
      }
    }
  };

  const handleRemoveLastLike = () => {
    const lastMarkedWishId = Object.keys(markedWishes).pop();
    if (lastMarkedWishId) {
      setMarkedWishes((prev) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [lastMarkedWishId]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const noWishesLeft = unmarkedWishesCount === 0;
  if (noWishesLeft) {
    return (
      <Wrapper>
        <div className="card-stack-item">
          <div className="card-wrapper end">
            <p className="end-text">Всё, желания закончились :)</p>
            <p className="end-text">
              <span onClick={handleReset}>Начать заново?</span>
            </p>
          </div>
        </div>
      </Wrapper>
    );
  }

  const noLikesLeft = likedWishesCount >= MAX_LIKES;
  if (noLikesLeft) {
    return (
      <Wrapper>
        <div className="card-stack-item">
          <div className="card-wrapper end">
            <p className="end-text">Нельзя выбрать больше :(</p>
            <p className="end-text">
              <span onClick={handleReset}>Сбросить</span> или{" "}
              <span onClick={handleRemoveLastLike}>убрать последний лайк</span>
            </p>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
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
            <WishesTinderCard
              {...card}
              cards={cards}
              markCard={markCard}
              setNextCardType={setNextCardType}
              nextCardType={nextCardType}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </Wrapper>
  );
}
