import "./FinalHeader.scss";

import Image, { StaticImageData } from "next/image";
import volcanoHike from "../../../../public/images/volcano-hike.png";
import snowman from "../../../../public/images/snowman.png";
import pirateQueen from "../../../../public/images/pirate-queen.png";
import flyingGirl from "../../../../public/images/flying-girl.png";
import { useWishes } from "@/providers/wishes";
import { getDeclension } from "@/helpers/get-declension";

interface WishProps {
  image: StaticImageData;
}

function Wish({ image }: WishProps) {
  return (
    <div className="final-header-wish">
      <Image
        className="final-header-wish-image"
        src={image}
        width={48}
        height={48}
        alt="wish"
      />
    </div>
  );
}

export default function FinalHeader() {
  const { likedWishesCount } = useWishes();

  const title = `${likedWishesCount} ${getDeclension(likedWishesCount, [
    "желание",
    "желания",
    "желаний",
  ])}`;

  return (
    <div className="final-header">
      <h1 className="final-header-title">{title}</h1>
    </div>
  );
}
