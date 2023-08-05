import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons";
// import SearchBox from "./SearchBox";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#">
        <img
          className="logo"
          src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
        />
      </a>
      <div className="menu">
        <a href="#">STORE</a>
        <a href="#">COMMUNITY</a>
        <a href="#">ABOUT</a>
        <a href="#">SUPPORT</a>
      </div>
      <div className="global-action">
        <a href="#">
          <FontAwesomeIcon icon={faCloudDownload} color="white" />
          Install Steam
        </a>
        <a href="#">Login</a>
        <a href="#">Language</a>
      </div>
    </div>
  );
}

export default Navbar;
