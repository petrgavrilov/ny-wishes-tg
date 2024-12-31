"use client";

import { RefObject, useRef, useState } from "react";
import "./page.scss";
import { Wish, wishes } from "@/data/wishes";
import { toPng } from "html-to-image";
import JSZip from "jszip";

interface CardProps {
  wish: Wish;
  cardRef: RefObject<HTMLDivElement>;
}

function Card({ wish, cardRef }: CardProps) {
  return (
    <div className="card" ref={cardRef}>
      <img className="card-snowflakes" src="/images/snowflakes.png" alt="" />
      <div className="card-gradient-1"></div>
      <div className="card-gradient-2"></div>
      <div className="card-content">
        <div className="card-content-title">в новом году я хочу...</div>
        <div className="card-content-image">
          <img src={"/wishes/" + wish.id + ".png"} alt={wish.description} />
        </div>
        <div className="card-content-description">{wish.descriptionRus}</div>
        <div className="card-content-footer">
          <svg
            className="card-content-footer-logo"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <path d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z"></path>
          </svg>
          <p className="card-content-footer-text">петя пилит пет проекты</p>
        </div>
      </div>
    </div>
  );
}

export default function CardsPage() {
  const [wishesData] = useState<Wish[]>(wishes);
  const [currentWish, setCurrentWish] = useState<Wish | null>(null);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleGenerate = async () => {
    const confirm = window.confirm(`Start generation?`);
    if (!confirm) {
      return;
    }

    console.log(`start generation`);

    const zip = new JSZip();

    for (const wish of wishesData.slice()) {
      try {
        setCurrentWish(wish);

        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 100));

        if (cardRef.current === null) {
          throw new Error(`cardRef.current === null`);
        }

        const fileName = `${wish.id}.png`;
        const dataUrl = await toPng(cardRef.current, {
          quality: 1.0,
          width: 1080,
          height: 1920,
          pixelRatio: 1,
        });
        console.log(`${wish.id} - png created`);
        const base64 = dataUrl.split(",")[1]; // Extract base64 content
        zip.file(fileName, base64, { base64: true });
        console.log(`${wish.id} - png added to zip`);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const finalZipBlob = await zip.generateAsync({ type: "blob" });
      console.log(`final zip created`);

      const finalZipData = window.URL.createObjectURL(finalZipBlob);
      const link = document.createElement("a");
      link.href = finalZipData;
      link.download = `cards-${Date.now()}.zip`;

      console.log(`download link created`);
      link.click();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="cards"
      // onClick={() => setCurrentCard((currentCard + 1) % wishesData.length)}
    >
      {currentWish && <Card wish={currentWish} cardRef={cardRef} />}
      <button onClick={handleGenerate} className="generate-button">
        generate images
      </button>
      {/* {wishesData.map((wish) => (
        <div key={wish.id} style={{ height: "1920px", position: "relative" }}>
          <Card wish={wish} />
        </div>
      ))} */}
    </div>
  );
}
