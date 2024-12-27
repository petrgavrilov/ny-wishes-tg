import Link from "next/link";
import Image from "next/image";
import Panel from "../panel/Panel";
import "./Welcome.scss";
import magicSnowBall from "../../../public/images/magic-snow-ball.png";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function Welcome() {
  return (
    <Panel>
      <div className="welcome">
        <Image
          className="welcome-image"
          alt="Mountains"
          src={magicSnowBall}
          placeholder="blur"
        />
        <div className="welcome-container">
          <h1 className="welcome-title">Каким будет твой 2025?</h1>
          <Link className="welcome-button" href="/wishes">
            <span className="welcome-button-text">
              Погнали выбирать желания
            </span>
            <ArrowRightCircleIcon className="welcome-button-icon" />
          </Link>
        </div>
      </div>
    </Panel>
  );
}
