import css from "./Item.module.css";

function Item({ cityName, visited, handleOnClickVisitButton }) {
  return (
    <li className={`${css["test"]} list-group-item ${visited && "active"}`}>
      <span className={css["cont-text"]}>{cityName}</span>
      <button
        type="button"
        className={`${css.button} btn btn-info`}
        onClick={handleOnClickVisitButton}
      >
        Visit
      </button>
    </li>
  );
}

export default Item;
