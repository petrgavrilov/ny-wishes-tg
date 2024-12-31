import "./FinalFooter.scss";
import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { useWishes } from "@/providers/wishes";

export default function FinalFooter() {
  const router = useRouter();
  const { resetWishes } = useWishes();
  const { hapticFeedback, popup } = useTelegramSdk();

  const returnToWishes = () => {
    resetWishes();
    router.push("/wishes");
    hapticFeedback();
  };

  const handleReturn = async () => {
    if (popup.isSupported() && popup.open.isAvailable()) {
      const promise = popup.open({
        message: "Сбросить выбранные желания?",
        buttons: [
          { id: "no", type: "default", text: "Нет" },
          { id: "yes", type: "destructive", text: "Да" },
        ],
      });
      const buttonId = await promise;
      if (buttonId === "yes") {
        returnToWishes();
      }
    } else {
      const confirm = window.confirm(`Сбросить выбранные желания?`);
      if (confirm) {
        returnToWishes();
      }
    }
  };

  return (
    <div className="final-footer">
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
