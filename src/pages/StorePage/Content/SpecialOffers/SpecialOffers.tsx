import Card from "./Card";
import SmallCard from "./SmallCard";
import "./SpecialOffers.css";

function SpecialOffers() {
  return (
    <div className="special-offers">
      <div className="special-offers-title">SPECIAL OFFERS</div>
      <div className="items-grid">
        <div className="card1">
          <Card
            link="https://store.steampowered.com/app/1321440/Cassette_Beasts/"
            image="https://cdn.cloudflare.steamstatic.com/steam/spotlights/f7eb13e1e1b7b8fea3b96e76/spotlight_image_english.jpg?t=1690486124"
            title="WEEKEND DEAL"
            info="Offer ends 11 Aug @ 12:00am."
          />
        </div>
        <div className="card2">
          <Card
            link="https://store.steampowered.com/app/1562430/DREDGE/"
            image="https://cdn.cloudflare.steamstatic.com/steam/spotlights/05fa915412a8d67478dab12a/spotlight_image_english.jpg?t=1690496535."
            title="WEEKEND DEAL"
            info="Offer ends 18 Aug @ 12:00am."
          />
        </div>
        <div className="small-card1">
          <SmallCard
            link="https://store.steampowered.com/app/811320/Jupiter_Hell/"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/811320/header_alt_assets_27.jpg?t=1691169831"
            title="Today's Deal"
          />
        </div>
        <div className="small-card2">
          <SmallCard
            link="https://store.steampowered.com/app/978520/Legend_of_Keepers_Career_of_a_Dungeon_Manager/"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/978520/header.jpg?t=1678285587"
            title="Today's Deal"
          />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
