import {
  CheckCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import "./WishesActions.scss";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { useWishes } from "@/providers/wishes";

function LikeButton({
  onClick,
  isDisabled,
}: {
  onClick: () => void;
  isDisabled: boolean;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="action-button -like"
      disabled={isDisabled}
    >
      <HandThumbUpIcon className="action-button-icon" />
    </motion.button>
  );
}

function DislikeButton({
  onClick,
  isDisabled,
}: {
  onClick: () => void;
  isDisabled: boolean;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="action-button -dislike"
      disabled={isDisabled}
    >
      <HandThumbDownIcon className="action-button-icon" />
    </motion.button>
  );
}

function FinishButton({ isDisabled }: { isDisabled: boolean }) {
  const router = useRouter();
  const { sendWishesToBot } = useWishes();
  const { hapticFeedback } = useTelegramSdk();

  const handleFinish = () => {
    sendWishesToBot();
    router.push("/final");
    hapticFeedback();
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="finish-button"
      onClick={handleFinish}
      disabled={isDisabled}
    >
      <CheckCircleIcon className="finish-button-icon" />
      <span className="finish-button-text">Мне достаточно</span>
    </motion.button>
  );
}

interface WishesActionsProps {
  likedWishesCount: number;
  unmarkedWishesCount: number;

  onLike: () => void;
  onDislike: () => void;
}

export default function WishesActions({
  likedWishesCount,
  unmarkedWishesCount,

  onLike,
  onDislike,
}: WishesActionsProps) {
  return (
    <div className="actions">
      <DislikeButton
        isDisabled={unmarkedWishesCount <= 0}
        onClick={onDislike}
      />
      <FinishButton isDisabled={likedWishesCount <= 0} />
      <LikeButton isDisabled={unmarkedWishesCount <= 0} onClick={onLike} />
    </div>
  );
}
