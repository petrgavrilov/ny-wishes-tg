import "./Wishes.scss";
import Panel from "../panel/Panel";
import WishesTinder from "./tinder/WishesTinder";
import WishesActions from "./actions/WishesActions";
import WishesCounter from "./counter/WishesCounter";
import { Wish } from "@/data/wishes";
import { MarkedWishes } from "./wishes.types";
import { Dispatch, SetStateAction, useState } from "react";
import { useTelegramSdk } from "@/providers/telegram-sdk";

interface WishesProps {
  wishes: Wish[];
  markedWishes: MarkedWishes;

  setMarkedWishes: Dispatch<SetStateAction<MarkedWishes>>;
}

export default function Wishes({
  wishes,
  markedWishes,
  setMarkedWishes,
}: WishesProps) {
  const [nextCardType, setNextCardType] = useState<"left" | "right" | null>(
    null
  );
  const [nextWish, setNextWish] = useState<Wish | null>(null);
  const { hapticFeedback } = useTelegramSdk();

  const onLike = () => {
    if (nextWish !== null) {
      setNextCardType("right");
      setMarkedWishes((prev) => ({ ...prev, [nextWish.id]: "like" }));
      hapticFeedback();
    }
  };

  const onDislike = () => {
    if (nextWish !== null) {
      setNextCardType("left");
      setMarkedWishes((prev) => ({ ...prev, [nextWish.id]: "dislike" }));
      hapticFeedback();
    }
  };

  return (
    <Panel>
      <div className="wishes-container">
        <WishesTinder
          wishes={wishes}
          markedWishes={markedWishes}
          nextCardType={nextCardType}
          setNextCardType={setNextCardType}
          setMarkedWishes={setMarkedWishes}
          setNextWish={setNextWish}
        />
        <WishesActions onLike={onLike} onDislike={onDislike} />
        <WishesCounter counter={25} />
      </div>
    </Panel>
  );
}
