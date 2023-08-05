import leftData from "../../../assets/DummyDatas/LeftBodyData";
import "./LeftBody.css";
import LeftBodyGroup from "./LeftBodyGroup";

function LeftBody() {
  return (
    <div className="left-body">
      {leftData.map((value) => (
        <LeftBodyGroup title={value.title} items={value.items} />
      ))}
    </div>
  );
}

export default LeftBody;
