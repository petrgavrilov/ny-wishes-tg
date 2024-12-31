import "./List.scss";
import { useWishes } from "@/providers/wishes";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface FinalListProps {
  onShowCarousel: (id: string) => void;
}

export default function FinalList({ onShowCarousel }: FinalListProps) {
  const { likedWishes } = useWishes();

  return (
    <div className="final-list">
      {likedWishes.map((wish) => (
        <div
          className="final-list-item"
          key={wish.id}
          onClick={() => onShowCarousel(wish.id)}
        >
          <Image
            className="final-list-item-image"
            src={`/wishes/${wish.id}.png`}
            width={100}
            height={100}
            alt={wish.description}
          />
          <ArrowTopRightOnSquareIcon className="final-list-item-icon" />
        </div>
      ))}
    </div>
  );
}
