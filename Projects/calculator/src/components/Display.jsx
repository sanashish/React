import style from "./Display.module.css";

function Display({ value }) {
  return (
    <input
      type="text"
      name=""
      className={style.display}
      value={value}
      readOnly
    />
  );
}

export default Display;
