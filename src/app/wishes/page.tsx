"use client";

import Wishes from "@/components/wishes/Wishes";
import { MarkedWishes } from "@/components/wishes/wishes.types";
import { Wish, wishes } from "@/data/wishes";
import { useEffect, useState } from "react";

export default function WishesPage() {
  const [wishesData, setWishesData] = useState<Wish[]>([]);
  const [markedWishes, setMarkedWishes] = useState<MarkedWishes>({});

  useEffect(() => {
    const startWith = "attend-a-music-festival-or-concert";

    const startIndex = wishes.findIndex((wish) => wish.id === startWith);
    const filtered = [...wishes.slice(startIndex)];

    // todo: add sorting and shuffling
    setWishesData(filtered);
  }, []);

  return (
    <Wishes
      wishes={wishesData}
      markedWishes={markedWishes}
      setMarkedWishes={setMarkedWishes}
    />
  );
}
