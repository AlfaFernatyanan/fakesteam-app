import "./StoreSideNavbarGroup.css";

function StoreSideNavbarGroup(props: StoreSideNavbarModel) {
  return (
    <div className="left-body-group">
      <h1>{props.title}</h1>
      {props.items.map((value) => (
        <a href={value.link}>{value.description}</a>
      ))}
    </div>
  );
}

export default StoreSideNavbarGroup;
