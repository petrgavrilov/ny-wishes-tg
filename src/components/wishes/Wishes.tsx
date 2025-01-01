import "./Wishes.scss";
import Panel from "../panel/Panel";
import WishesTinder from "./tinder/WishesTinder";
import WishesActions from "./actions/WishesActions";
import WishesCounter from "./counter/WishesCounter";
import { Wish } from "@/data/wishes";
import { useState } from "react";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { useWishes } from "@/providers/wishes";
import WishesOnboarding from "./onboarding/WishesOnboarding";

export default function Wishes() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [nextCardType, setNextCardType] = useState<"left" | "right" | null>(
    null
  );
  const [nextWish, setNextWish] = useState<Wish | null>(null);
  const { hapticFeedback } = useTelegramSdk();
  const { setMarkedWishes, unmarkedWishesCount, likedWishesCount } =
    useWishes();

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
    <>
      <Panel>
        <div className="wishes-container">
          <WishesTinder
            nextCardType={nextCardType}
            setNextCardType={setNextCardType}
            setNextWish={setNextWish}
          />
          <WishesActions
            likedWishesCount={likedWishesCount}
            unmarkedWishesCount={unmarkedWishesCount}
            onLike={onLike}
            onDislike={onDislike}
          />
          <WishesCounter counter={unmarkedWishesCount} />
        </div>
      </Panel>
      {showOnboarding && (
        <WishesOnboarding handleStart={() => setShowOnboarding(false)} />
      )}
    </>
  );
}
