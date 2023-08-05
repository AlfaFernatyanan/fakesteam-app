import "./Body.css";
import LeftBody from "./LeftBody/LeftBody";
import RightBody from "./RightBody/RightBody";

function Body() {
  return (
    <div className="body">
      <LeftBody />
      <RightBody />
    </div>
  );
}

export default Body;
