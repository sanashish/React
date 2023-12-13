import css from "./Item.module.css";

function Item(props) {
  return (
    <li className={`${css["test"]} list-group-item`}>
      <span className={css["cont-text"]}>{props.cityName}</span>
    </li>
  );
}

export default Item;
