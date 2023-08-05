import frRightImageData from "../../../../assets/DummyDatas/FRRightImageData";
import FRRightImage from "./FRRightImage";
import "./FeaturedRecommended.css";

function FeaturedRecommended() {
  return (
    <div className="featured-recommended">
      <a>FEATURE & RECOMMENDED</a>
      <div className="container">
        <div className="leftImage-item">
          <img
            className="leftImage"
            src="https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1671485009"
          />
        </div>
        <div className="title">
          <a>RED DEAD REDEMPTION 2</a>
        </div>
        {frRightImageData.map((value) => (
          <FRRightImage
            container={value.container}
            image={value.image}
            source={value.source}
          />
        ))}
        <div className="text">
          <h2>Now Avaliable</h2>
          <h6>Free To Play</h6>
        </div>
      </div>
    </div>
  );
}

export default FeaturedRecommended;
