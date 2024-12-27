import {
  CheckCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import "./WishesActions.scss";

function LikeButton() {
  return (
    <button className="action-button -like">
      <HandThumbUpIcon className="action-button-icon" />
    </button>
  );
}

function DislikeButton() {
  return (
    <button className="action-button -dislike">
      <HandThumbDownIcon className="action-button-icon" />
    </button>
  );
}

function FinishButton() {
  return (
    <button className="finish-button">
      <CheckCircleIcon className="finish-button-icon" />
      <span className="finish-button-text">Мне достаточно</span>
    </button>
  );
}

export default function WishesActions() {
  return (
    <div className="actions">
      <DislikeButton />
      <FinishButton />
      <LikeButton />
    </div>
  );
}
