import { Wish } from "@/data/wishes";
import { MarkedWishes } from "@/types/wishes";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTelegramSdk } from "./telegram-sdk";
import { SendWishesRequest } from "@/types/send-wishes";

interface WishesContext {
  wishes: Wish[];
  markedWishes: MarkedWishes;
  likedWishes: Wish[];
  shuffledWishes: Wish[];

  wishesCount: number;
  markedWishesCount: number;
  unmarkedWishesCount: number;
  likedWishesCount: number;
  dislikedWishesCount: number;

  sentToBot: boolean;

  setWishes: Dispatch<SetStateAction<Wish[]>>;
  setMarkedWishes: Dispatch<SetStateAction<MarkedWishes>>;
  resetWishes: () => void;
  sendWishesToBot: () => void;
}

const WishesContext = createContext<WishesContext | null>(null);
WishesContext.displayName = "WishesContext";

export const WishesProvider = ({
  data,
  children,
}: PropsWithChildren<{ data: Wish[] }>) => {
  const { chatId } = useTelegramSdk();
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [shuffledWishes, setShuffledWishes] = useState<Wish[]>([]);
  const [markedWishes, setMarkedWishes] = useState<MarkedWishes>({});
  const [sentToBot, setSentToBot] = useState<boolean>(false);

  useEffect(() => {
    const wishes = [...data];
    setWishes(wishes);
    setShuffledWishes([...wishes].sort(() => Math.random() - 0.5));
  }, [data]);

  const wishesCount = wishes.length;
  const markedWishesCount = Object.values(markedWishes).filter(Boolean).length;
  const unmarkedWishesCount = wishesCount - markedWishesCount;

  const likedWishesIds = Object.keys(markedWishes).filter(
    (key) => markedWishes[key] === "like"
  );
  const likedWishesCount = likedWishesIds.length;
  const likedWishes = wishes.filter((wish) => likedWishesIds.includes(wish.id));

  const dislikedWishesCount = Object.values(markedWishes).filter(
    (mark) => mark === "dislike"
  ).length;

  const resetWishes = () => {
    setMarkedWishes({});
    setShuffledWishes(wishes.sort(() => Math.random() - 0.5));
  };

  const sendWishesToBot = () => {
    if (!chatId || !likedWishes.length) {
      return;
    }

    const request: SendWishesRequest = {
      chatId,
      wishesIds: likedWishes.map((wish) => wish.id),
    };

    fetch(`/api/send-wishes`, {
      method: "POST",
      body: JSON.stringify(request),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setSentToBot(true);
        }
      });
  };

  const value: WishesContext = {
    wishes,
    markedWishes,

    wishesCount,
    markedWishesCount,
    unmarkedWishesCount,

    likedWishes,
    likedWishesCount,
    dislikedWishesCount,

    shuffledWishes,
    sentToBot,

    setWishes,
    setMarkedWishes,
    resetWishes,
    sendWishesToBot,
  };

  return (
    <WishesContext.Provider value={value}>{children}</WishesContext.Provider>
  );
};

export const useWishes = () => {
  const context = useContext(WishesContext);
  if (!context) {
    throw new Error("useWishes must be used within a WishesProvider");
  }

  return context;
};
