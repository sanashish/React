import { useState } from "react";
import styles from "./cityInput.module.css";

function CityInput({ handleOnKeyDown }) {
  return (
    <div className={`${styles["input"]} form-floating`}>
      <input
        type="text"
        className="form-control"
        placeholder="Leave a comment here"
        id="floatingTextarea"
        onKeyDown={handleOnKeyDown}
      ></input>
      <label htmlFor="floatingTextarea">
        Enter City of your choice then Press Enter Key
      </label>
    </div>
  );
}

export default CityInput;
