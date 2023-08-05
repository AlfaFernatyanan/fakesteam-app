import "./Content.css";
import FeaturedRecommended from "./FeatureRecommended/FeaturedRecommended";
import SpecialOffers from "./SpecialOffers/SpecialOffers";

function Content() {
  return (
    <div className="content">
      <FeaturedRecommended />
      <SpecialOffers />
    </div>
  );
}

export default Content;
