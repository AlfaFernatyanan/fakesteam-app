import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search" />
      <button className="button">
        <FontAwesomeIcon icon={faSearch} color="#2C4A67" />
      </button>
    </div>
  );
}

export default SearchBox;
