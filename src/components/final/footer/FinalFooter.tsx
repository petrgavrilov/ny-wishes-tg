import Link from "next/link";
import "./FinalFooter.scss";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

export default function FinalFooter() {
  return (
    <div>
      <Link className="more-button" href={"/wishes"}>
        <ArrowPathIcon className="more-button-icon" />
        <span className="more-button-text">Повыбирать еще</span>
      </Link>
    </div>
  );
}
