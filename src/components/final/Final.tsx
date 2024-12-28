import "./Final.scss";
import Panel from "../panel/Panel";
import FinalFooter from "./footer/FinalFooter";
import FinalHeader from "./header/FinalHeader";
import FinalInfo from "./info/FinalInfo";
import FinalMap from "./map/FinalMap";

export default function Final() {
  return (
    <Panel>
      <div className="final-container">
        <FinalHeader />
        <FinalMap />
        <FinalInfo />
        <FinalFooter />
      </div>
    </Panel>
  );
}
