import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import StoreSideNavbar from "./components/StoreSideNavbar";
import "./StorePage.css";

function StorePage() {
  return (
    <div>
      <Navbar />
      <StorePageDetail />
      <Footer />
    </div>
  );
}

function StorePageDetail() {
  return (
    <div className="store-page-detail">
      <StoreSideNavbar />
      <div className="store-page-wrapper">
        {/* <StoreTopNavbar />
        <div className="content"></div> */}
      </div>
    </div>
  );
}

export default StorePage;
