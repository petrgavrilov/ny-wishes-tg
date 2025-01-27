import Image from "next/image";
import Panel from "../panel/Panel";
import "./Welcome.scss";
import magicSnowBall from "../../../public/images/magic-snow-ball.png";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useTelegramSdk } from "@/providers/telegram-sdk";

export default function Welcome() {
  const router = useRouter();
  const { hapticFeedback } = useTelegramSdk();

  const handleStart = () => {
    router.push(`/wishes`);
    hapticFeedback();
  };

  return (
    <Panel>
      <div className="welcome">
        <Image
          className="welcome-image"
          alt="Mountains"
          src={magicSnowBall}
          placeholder="blur"
          width={480}
          priority={true}
        />
        <div className="welcome-container">
          <h1 className="welcome-title">Каким будет твой 2025?</h1>
          <motion.button
            onClick={handleStart}
            whileTap={{ scale: 0.95 }}
            className="welcome-button"
          >
            <span className="welcome-button-text">
              Погнали выбирать желания
            </span>
            <ArrowRightCircleIcon className="welcome-button-icon" />
          </motion.button>
        </div>
      </div>
    </Panel>
  );
}
