import {
  CheckCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import "./WishesActions.scss";
import Link from "next/link";

function LikeButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="action-button -like">
      <HandThumbUpIcon className="action-button-icon" />
    </button>
  );
}

function DislikeButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="action-button -dislike">
      <HandThumbDownIcon className="action-button-icon" />
    </button>
  );
}

function FinishButton() {
  return (
    <Link className="finish-button" href={"/final"}>
      <CheckCircleIcon className="finish-button-icon" />
      <span className="finish-button-text">Мне достаточно</span>
    </Link>
  );
}

interface WishesActionsProps {
  onLike: () => void;
  onDislike: () => void;
}

export default function WishesActions({
  onLike,
  onDislike,
}: WishesActionsProps) {
  return (
    <div className="actions">
      <DislikeButton onClick={onDislike} />
      <FinishButton />
      <LikeButton onClick={onLike} />
    </div>
  );
}
