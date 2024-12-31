import "./Final.scss";
import Panel from "../panel/Panel";
import FinalFooter from "./footer/FinalFooter";
import FinalHeader from "./header/FinalHeader";
import FinalInfo from "./info/FinalInfo";
import FinalMap from "./map/FinalMap";
import { useWishes } from "@/providers/wishes";

export default function Final() {
  const wishes = useWishes();
  console.log(wishes);

  return (
    <Panel>
      <div className="final-container">
        <FinalHeader />
        {/* <FinalMap />
        <FinalInfo /> */}
        <FinalFooter />
      </div>
    </Panel>
  );
}
