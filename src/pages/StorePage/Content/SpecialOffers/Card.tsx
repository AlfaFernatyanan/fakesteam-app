import "./Card.css";

function Card(props: any) {
  return (
    <div className="card">
      <a href={props.link}>
        <img className="card-image" src={props.image} />
      </a>
      <div className="card-info">
        <h2>{props.title}</h2>
        <div className="card-text">{props.info}</div>
      </div>
    </div>
  );
}

export default Card;
