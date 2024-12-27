import "./WishesTinder.scss";
import Image from "next/image";
import volcanoHike from "../../../../public/images/volcano-hike.png";
import { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  text: string;
}

function Card({ image, text }: CardProps) {
  return (
    <div className="card-wrapper">
      <div className="card">
        <Image className="card-image" src={image} alt="Volcano hike" />
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
}

export default function WishesTinder() {
  const text: string = `Отправиться в путешествие по малоизвестным местам`;
  return (
    <div className="cards">
      <div className="cards-container">
        <div className="cards-stack">
          <Card image={volcanoHike} text={text} />
          <Card image={volcanoHike} text={text} />
          <Card image={volcanoHike} text={text} />
          <Card image={volcanoHike} text={text} />
        </div>
      </div>
    </div>
  );
}
