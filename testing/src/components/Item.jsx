import css from "./Item.module.css";

function Item(props) {
  const buttonOnClick = (cityName) => {
    console.log(`${cityName} Visited`);
  };

  return (
    <li className={`${css["test"]} list-group-item`}>
      <span className={css["cont-text"]}>{props.cityName}</span>
      <button
        type="button"
        className={`${css.button} btn btn-info`}
        onClick={() => buttonOnClick(props.cityName)}
      >
        Visit
      </button>
    </li>
  );
}

export default Item;
