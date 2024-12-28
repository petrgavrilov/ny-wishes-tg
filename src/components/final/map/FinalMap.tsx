import "./FinalMap.scss";
import Image from "next/image";
import mapPreview from "../../../../public/images/wishes-map-preview.png";
import { ArrowDownTrayIcon, ShareIcon } from "@heroicons/react/20/solid";

export default function FinalMap() {
  return (
    <div className="wishes-map">
      <div className="wishes-map-preview">
        <Image
          className="wishes-map-image"
          src={mapPreview}
          width={312}
          height={312}
          alt="map preview"
        />
      </div>
      <div className="wishes-map-actions">
        <button className="wishes-map-action -download">
          <ArrowDownTrayIcon className="wishes-map-action-icon" />
        </button>
        <button className="wishes-map-action -share">
          <ShareIcon className="wishes-map-action-icon" />
        </button>
      </div>
    </div>
  );
}
