import "./FinalHeader.scss";

import Image, { StaticImageData } from "next/image";
import volcanoHike from "../../../../public/images/volcano-hike.png";
import snowman from "../../../../public/images/snowman.png";
import pirateQueen from "../../../../public/images/pirate-queen.png";
import flyingGirl from "../../../../public/images/flying-girl.png";

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
  return (
    <div className="final-header">
      <h1 className="final-header-title">25 желаний</h1>
      <div className="final-header-wishes">
        <Wish image={volcanoHike} />
        <Wish image={snowman} />
        <Wish image={pirateQueen} />
        <Wish image={flyingGirl} />
      </div>
      <p className="final-header-text">Ух ты, вот это списочек получился!</p>
    </div>
  );
}
