import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Content from "./Content/Content";
import StoreSideNavbar from "./components/StoreSideNavbar/StoreSideNavbar";
import StoreTopNavbar from "./components/StoreTopNavbar/StoreTopNavbar";
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
        <StoreTopNavbar />
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default StorePage;
