import StoreSideNavbar from "./components/StoreSideNavbar";
import StoreTopNavbar from "./components/StoreTopNavbar";

function StorePageDetail() {
  return (
    <div className="body">
      <StoreSideNavbar />
      <div className="kanan">
        <StoreTopNavbar />
        <div className="content"></div>
      </div>
    </div>
  );
}

export default StorePageDetail;
