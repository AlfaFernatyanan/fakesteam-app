import "./SmallCard.css";

function SmallCard(props: any) {
  return (
    <div className="small-card">
      <a href={props.link}>
        <img className="small-card-image" src={props.image} />
      </a>
      <div className="small-card-text">{props.title}</div>
    </div>
  );
}

export default SmallCard;
