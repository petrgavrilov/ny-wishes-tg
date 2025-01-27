import { useWishes } from "@/providers/wishes";
import "./Carousel.scss";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Wish } from "@/data/wishes";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { motion } from "motion/react";
import { ShareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { debounce } from "@/helpers/debounce";

interface FinalCarouselProps {
  startId: string | undefined;
  setIsCarouselVisible: Dispatch<SetStateAction<boolean>>;
}

export default function FinalCarousel({
  startId,
  setIsCarouselVisible,
}: FinalCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { hapticFeedback } = useTelegramSdk();
  const [currentWish, setCurrentWish] = useState<Wish | null>(null);
  const { likedWishes } = useWishes();
  const [isSharingEnabled, setIsSharingEnabled] = useState(false);
  const [shareData, setShareData] = useState<ShareData | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = debounce(() => {
      if (carousel) {
        const slideWidth = carousel.offsetWidth;
        const currentIndex = Math.round(carousel.scrollLeft / slideWidth);
        setActiveIndex(currentIndex);
        hapticFeedback();
      }
    }, 50);

    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const wish = likedWishes[activeIndex] || null;
    setCurrentWish(wish);
  }, [activeIndex, likedWishes]);

  useEffect(() => {
    (async (currentWish: Wish | null) => {
      if (currentWish === null) {
        setShareData(null);
        setIsSharingEnabled(false);
        return;
      }

      try {
        const imageName = `${currentWish.id}.png`;
        const cardUrl = `/social-cards/${imageName}`;
        const response = await fetch(cardUrl);
        const blob = await response.blob();
        const filesArray = [
          new File([blob], imageName, {
            type: "image/png",
            lastModified: new Date().getTime(),
          }),
        ];
        const shareData: ShareData = {
          files: filesArray,
        };
        setShareData(shareData);
        setIsSharingEnabled(navigator.canShare(shareData));
      } catch {
        setShareData(null);
        setIsSharingEnabled(false);
      }
    })(currentWish).then();
  }, [currentWish]);

  useEffect(() => {
    if (startId) {
      const startIndex = likedWishes.findIndex((wish) => wish.id === startId);
      if (startIndex > -1 && carouselRef.current) {
        const carouselEl = carouselRef.current;
        const width = carouselEl.clientWidth;
        carouselEl.scroll({
          left: startIndex * width,
          behavior: "instant",
        });
      }
    }
  }, []);

  const handleShare = async (shareData: ShareData) => {
    try {
      await navigator.share(shareData);
      hapticFeedback();
    } catch {}
  };

  const handleClose = () => {
    setIsCarouselVisible(false);
    hapticFeedback();
  };

  return (
    <>
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          {likedWishes.map((wish) => {
            return (
              <div key={wish.id} className="slide">
                <Image
                  className="slide-image"
                  src={`/social-cards/${wish.id}.png`}
                  alt={wish.description}
                  width={540}
                  height={960}
                />
              </div>
            );
          })}
        </div>

        <div className="slide-actions">
          {isSharingEnabled && shareData && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleShare(shareData)}
              className="slide-action-button -share"
            >
              <ShareIcon className="slide-action-button-icon" />
            </motion.button>
          )}
        </div>
      </div>
      <div className="close-panel">
        <motion.button
          className="close-panel-button"
          whileTap={{ scale: 0.95 }}
          onClick={handleClose}
        >
          <span className="close-panel-text">Закрыть</span>
          <XMarkIcon className="close-panel-icon" />
        </motion.button>
      </div>
    </>
  );
}
