import { useWishes } from "@/providers/wishes";
import "./Carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Wish } from "@/data/wishes";
import { useTelegramSdk } from "@/providers/telegram-sdk";
import { motion } from "motion/react";
import { ShareIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

interface FinalCarouselProps {
  startId: string | undefined;
  setIsCarouselVisible: Dispatch<SetStateAction<boolean>>;
}

export default function FinalCarousel({
  startId,
  setIsCarouselVisible,
}: FinalCarouselProps) {
  const swiperRef = useRef<any>(null);
  const { hapticFeedback } = useTelegramSdk();
  const [currentWish, setCurrentWish] = useState<Wish | null>(null);
  const { likedWishes } = useWishes();

  const updateCurrentWish = () => {
    if (!swiperRef.current) {
      return;
    }

    const activeIndex: number = (swiperRef.current as any).realIndex;
    const currentWish = likedWishes[activeIndex];
    setCurrentWish(currentWish || null);
  };

  const handleSlideChange = () => {
    updateCurrentWish();
    hapticFeedback();
  };

  const setStartSlide = (startId?: string) => {
    if (!startId || !swiperRef.current) {
      return;
    }

    const startIndex = likedWishes.findIndex((wish) => wish.id === startId);

    if (startIndex < 0) {
      return;
    }

    swiperRef.current.slideTo(startIndex);
  };

  const handleSwiperInit = (swiper: any) => {
    swiperRef.current = swiper;
    updateCurrentWish();
  };

  useEffect(() => {
    setStartSlide(startId);
  }, [startId, likedWishes, setStartSlide]);

  const handleShare = async () => {
    if (currentWish === null) {
      return;
    }

    const imageName = `${currentWish.id}.png`;
    const cardUrl = `/social-cards/${imageName}`;
    const response = await fetch(cardUrl);
    const blob = await response.blob();
    const filesArray = [
      new File([blob], `imageName`, {
        type: "image/png",
        lastModified: new Date().getTime(),
      }),
    ];
    const shareData: ShareData = {
      files: filesArray,
    };

    hapticFeedback();
    await navigator.share(shareData);
  };

  const handleDownload = () => {
    if (currentWish === null) {
      return;
    }

    const imageName = `${currentWish.id}.png`;
    const cardUrl = `/social-cards/${imageName}`;

    const link = document.createElement("a");
    link.href = cardUrl;
    link.download = imageName;

    hapticFeedback();
    link.click();
  };

  const handleClose = () => {
    setIsCarouselVisible(false);
    hapticFeedback();
  };

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiperInit}
        loop={true}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        {likedWishes.map((wish) => {
          return (
            <SwiperSlide key={wish.id}>
              <div className="slide">
                <Image
                  className="slide-image"
                  src={`/social-cards/${wish.id}.png`}
                  alt={wish.description}
                  width={540}
                  height={960}
                  priority={true}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="slide-actions">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          className="slide-action-button -share"
        >
          <ShareIcon className="slide-action-button-icon" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleDownload}
          className="slide-action-button -download"
        >
          <ArrowDownTrayIcon className="slide-action-button-icon" />
        </motion.button>
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
    </div>
  );
}
