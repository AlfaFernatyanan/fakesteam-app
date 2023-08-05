import storeNavAreaData from "../../../../assets/DummyDatas/StoreNavAreaData";
import SearchBox from "./SearchBox";
import "./StoreNavArea.css";
import StoreNavAreaItem from "./StoreNavAreaItem";

function StoreNavArea() {
  return (
    <div className="store-nav-area">
      <div className="sna-menu">
        {storeNavAreaData.map((value) => (
          <StoreNavAreaItem title={value} />
        ))}
      </div>

      <SearchBox />
    </div>
  );
}

export default StoreNavArea;
