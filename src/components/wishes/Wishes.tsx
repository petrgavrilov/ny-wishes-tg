import "./Wishes.scss";
import Panel from "../panel/Panel";
import WishesTinder from "./tinder/WishesTinder";
import WishesActions from "./actions/WishesActions";
import WishesCounter from "./counter/WishesCounter";

export default function Wishes() {
  return (
    <Panel>
      <div className="wishes-container">
        <WishesTinder />
        <WishesActions />
        <WishesCounter counter={25} />
      </div>
    </Panel>
  );
}
