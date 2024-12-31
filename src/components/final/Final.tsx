import "./Final.scss";
import Panel from "../panel/Panel";
import FinalFooter from "./footer/FinalFooter";
import FinalHeader from "./header/FinalHeader";
import FinalList from "./list/List";
import FinalCarousel from "./final-carousel/Carousel";
import { useState } from "react";
import { useTelegramSdk } from "@/providers/telegram-sdk";

export default function Final() {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [startId, setStartId] = useState<string | undefined>(undefined);
  const { hapticFeedback } = useTelegramSdk();

  const onShowCarousel = (id: string) => {
    setStartId(id);
    setIsCarouselVisible(true);
    hapticFeedback();
  };

  return (
    <>
      <Panel>
        <div className="final-container">
          <FinalHeader />
          <FinalList onShowCarousel={onShowCarousel} />
          <FinalFooter />
        </div>
      </Panel>
      {isCarouselVisible && (
        <FinalCarousel
          startId={startId}
          setIsCarouselVisible={setIsCarouselVisible}
        />
      )}
    </>
  );
}
