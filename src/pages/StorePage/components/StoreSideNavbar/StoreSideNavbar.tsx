import "./StoreSideNavbar.css";
import StoreSideNavbarGroup from "./StoreSideNavbarGroup";
import storeSideNavbar from "../../../../assets/DummyDatas/StoreSideNavbarData";

function StoreSideNavbar() {
  return (
    <div className="side-navbar">
      {storeSideNavbar.map((value) => (
        <StoreSideNavbarGroup title={value.title} items={value.items} />
      ))}
    </div>
  );
}

export default StoreSideNavbar;

