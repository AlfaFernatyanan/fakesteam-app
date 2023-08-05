import StoreNavArea from "./StoreNavArea/StoreNavArea";
import FeaturedRecommended from "./Featured & Recommended/FeaturedRecommended";

import "./RightBody.css";
import SpecialOffers from "./Special Offers/SpecialOffers";

function RightBody() {
  return (
    <div className="right-body">
      <StoreNavArea />
      <FeaturedRecommended />
      <SpecialOffers />
    </div>
  );
}

export default RightBody;
