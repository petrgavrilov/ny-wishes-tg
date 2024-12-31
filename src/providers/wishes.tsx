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

interface WishesContext {
  wishes: Wish[];
  markedWishes: MarkedWishes;
  likedWishes: Wish[];

  wishesCount: number;
  markedWishesCount: number;
  unmarkedWishesCount: number;
  likedWishesCount: number;
  dislikedWishesCount: number;

  setWishes: Dispatch<SetStateAction<Wish[]>>;
  setMarkedWishes: Dispatch<SetStateAction<MarkedWishes>>;
}

const WishesContext = createContext<WishesContext | null>(null);
WishesContext.displayName = "WishesContext";

export const WishesProvider = ({
  data,
  children,
}: PropsWithChildren<{ data: Wish[] }>) => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [markedWishes, setMarkedWishes] = useState<MarkedWishes>({});

  useEffect(() => {
    setWishes(data);
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

  const value: WishesContext = {
    wishes,
    markedWishes,

    wishesCount,
    markedWishesCount,
    unmarkedWishesCount,

    likedWishes,
    likedWishesCount,
    dislikedWishesCount,

    setWishes,
    setMarkedWishes,
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
