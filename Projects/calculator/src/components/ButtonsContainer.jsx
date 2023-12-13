import style from "./ButtonsContainer.module.css";

function ButtonsContainer() {
  const buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.buttonContainer}>
      {buttonList.map((key) => (
        <button key={key} className={style.numKey}>
          {key}
        </button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
