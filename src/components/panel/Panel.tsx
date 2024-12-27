import { PropsWithChildren } from "react";
import "./Panel.scss";

export default function Panel({ children }: PropsWithChildren) {
  return (
    <div className="panel-container">
      <div className="panel">{children}</div>
    </div>
  );
}
