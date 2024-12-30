"use client";

import Wishes from "@/components/wishes/Wishes";
import { MarkedWishes } from "@/components/wishes/wishes.types";
import { Wish, wishes } from "@/data/wishes";
import { useEffect, useState } from "react";

const myLikes: MarkedWishes = {
  "attend-a-music-festival-or-concert": "like",
  "attend-networking-event": "dislike",
  "attend-passionate-workshop": "dislike",
  "bake-a-cake-for-someone-special": "like",
  "be-a-matchmaker": "dislike",
  "be-a-mentor-to-someone": "dislike",
  "be-in-a-conscious-fulfilling-relationship": "dislike",
  "befriend-a-stranger": "dislike",
  "bury-the-hatchet-with-people-you-conflicted-in-the-past": "dislike",
  "camp-overnight": "like",
  "change-the-world": "dislike",
  "climb-a-mountain": "like",
  "commit-to-walking-10000-steps-daily": "dislike",
  "contact-a-teacher-who-changed-your-life-to-thank-them": "dislike",
  "cook-a-home-made-meal": "dislike",
  "create-a-short-film-with-friends": "like",
  "create-time-capsule": "dislike",
  "create-your-dream-home": "like",
  "do-something-crazy": "like",
  "do-volunteer-work": "dislike",
  "donate-to-a-charity": "dislike",
  "drink-2-liters-of-water-daily": "dislike",
  "eat-a-healthier-diet": "like",
  "experience-a-sunrise-sunset": "like",
  "experience-an-obe": "dislike",
  "explore-a-cave": "like",
  "explore-iconic-landmarks-in-your-country": "dislike",
  "fall-asleep-in-the-arms-of-someone-you-love": "dislike",
  "fall-in-love": "like",
  "fly-a-kite": "dislike",
  "fly-hot-air-balloon": "dislike",
  "fold-1000-origami-cranes": "like",
  "further-study": "dislike",
  "get-closure": "dislike",
  "get-drink-for-stranger": "dislike",
  "get-featured-in-the-media": "dislike",
  "go-horseback-riding": "dislike",
  "go-on-a-blind-date": "like",
  "go-on-a-cruise": "like",
  "go-on-a-meditation-retreat": "like",
  "go-rafting": "like",
  "go-scuba-diving": "like",
  "go-skiing": "like",
  "go-stargazing": "like",
  "go-to-a-costume-party": "dislike",
  "help-clean-up-a-park-or-beach": "like",
  "help-someone-in-need": "dislike",
  "hit-bulls-eye-in-darts": "like",
  "host-a-small-gathering-for-close-friends": "like",
  "join-a-yoga-or-pilates-class": "dislike",
  "join-social-etiquette-class": "dislike",
  "knit-a-scarf": "dislike",
  "learn-a-new-creative-skill": "dislike",
  "learn-martial-art": "dislike",
  "learn-new-language": "dislike",
  "learn-sign-language": "like",
  "learn-small-talk": "dislike",
  "learn-surfing": "like",
  "learn-wine-appreciation": "dislike",
  "let-someone-know-how-much-they-mean-to-you": "dislike",
  "live-through-all-seasons": "dislike",
  "make-a-difference-in-someones-life": "dislike",
  "make-a-good-deed": "dislike",
  "make-a-heartfelt-surprise-to-someone": "dislike",
  "overcome-biggest-fear": "dislike",
  "participate-in-a-hackathon": "dislike",
  "plant-a-tree-and-watch-it-grow": "like",
  "play-in-a-movie": "like",
  "play-musical-instrument": "like",
  "practice-mindfulness-meditation": "like",
  "protect-dolphins-and-marine-life": "like",
  "publish-a-book": "like",
  "reach-your-ideal-weight": "dislike",
  "read-12-books": "like",
  "read-unexpected-book": "like",
  "ride-roller-coaster": "dislike",
  "romantic-getaway": "like",
  "run-a-marathon": "dislike",
  "run-barefoot": "dislike",
  "see-cherry-blossoms-in-japan": "like",
  "see-snow": "like",
  "see-the-mona-lisa-in-louvre": "dislike",
  "see-the-northern-lights": "like",
  "sing-to-an-audience": "like",
  "speak-publicly": "like",
  "start-a-blog-or-vlog": "dislike",
  "start-a-collection": "dislike",
  "start-your-business": "dislike",
  "take-a-road-trip-to-lesser-known-destinations": "dislike",
  "take-part-in-a-triathlon": "dislike",
  "take-public-speaking-course": "dislike",
  "take-up-dancing": "like",
  "take-up-new-sport": "like",
  "tell-10-people-about-bucket-list": "dislike",
  "tell-your-parents-and-siblings-you-love-them": "dislike",
  "throw-a-mega-party": "like",
  "travel-around-the-world": "like",
  "trek-inca-trail": "like",
  "try-a-profession-in-a-different-field": "like",
  "try-frontline-jobs": "dislike",
  "try-new-cuisine": "dislike",
  "try-skydiving": "dislike",
  "visit-5-unesco-sites": "dislike",
  "visit-a-castle": "like",
  "visit-a-volcano": "like",
  "volunteer-at-a-hospice": "dislike",
  "walk-dance-barefoot-in-the-rain": "like",
  "win-a-lucky-draw": "like",
  "witness-a-solar-eclipse": "like",
  "write-a-letter-to-someone-you-admire": "dislike",
  "write-daily-gratitude-journal": "like",
  "write-letter-to-future-self": "like",
};

export default function WishesPage() {
  const [wishesData, setWishesData] = useState<Wish[]>([]);
  const [markedWishes, setMarkedWishes] = useState<MarkedWishes>({});

  useEffect(() => {
    const startWith = "attend-a-music-festival-or-concert";

    const startIndex = wishes.findIndex((wish) => wish.id === startWith);
    const filtered = [...wishes.slice(startIndex)];

    // todo: add sorting and shuffling
    setWishesData(filtered);

    const likes = Object.keys(myLikes).filter((key) => myLikes[key] === "like");
    const dislikes = Object.keys(myLikes).filter(
      (key) => myLikes[key] === "dislike"
    );

    const allWishesPrompts = wishes
      .filter((wish) => dislikes.some((d) => d === wish.id))
      .map((wish) => {
        const id = wish.id;
        const description = wish.description;
        const associations = wish.associations.join(", ");
        return `${id}: ${description} (${associations})`;
      });
  }, []);

  return (
    <Wishes
      wishes={wishesData}
      markedWishes={markedWishes}
      setMarkedWishes={setMarkedWishes}
    />
  );
}
