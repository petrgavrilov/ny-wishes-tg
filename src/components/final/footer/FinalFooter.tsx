import "./FinalFooter.scss";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useTelegramSdk } from "@/providers/telegram-sdk";

export default function FinalFooter() {
  const router = useRouter();
  const { hapticFeedback } = useTelegramSdk();

  const handleReturn = () => {
    router.push("/wishes");
    hapticFeedback();
  };

  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="more-button"
        onClick={handleReturn}
      >
        <ArrowPathIcon className="more-button-icon" />
        <span className="more-button-text">Повыбирать заново</span>
      </motion.button>
    </div>
  );
}
