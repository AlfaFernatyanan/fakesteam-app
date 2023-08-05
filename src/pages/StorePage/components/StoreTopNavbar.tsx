import storeTopNavbarData from "../../../assets/DummyDatas/StoreTopNavbarData";
import SearchBox from "./SearchBox";
import "./StoreTopNavbar.css";
import StoreTopNavbarItem from "./StoreTopNavbarItem";

function StoreTopNavbar() {
  return (
    <div className="store-top-navbar">
      <div className="stn-menu">
        {storeTopNavbarData.map((value) => (
          <StoreTopNavbarItem title={value} />
        ))}
      </div>

      <SearchBox />
    </div>
  );
}

export default StoreTopNavbar;
