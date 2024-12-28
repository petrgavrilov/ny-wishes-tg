import {
  CheckCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import "./WishesActions.scss";
import Link from "next/link";

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
    <Link className="finish-button" href={"/final"}>
      <CheckCircleIcon className="finish-button-icon" />
      <span className="finish-button-text">Мне достаточно</span>
    </Link>
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
