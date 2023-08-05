import "./FRRightImage.css";

function FRRightImage(props: FRRightImage) {
  return (
    <div className={props.container}>
      <img className={props.image} src={props.source} />
    </div>
  );
}

export default FRRightImage;


