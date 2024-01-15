import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import style from "./App.module.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handleOnNumClick = (buttonText) => {
    if (buttonText === "C") {
      setValue("");
    } else if (buttonText === "=") {
      const ans = eval(value);
      setValue(ans);
    } else {
      const newDisplayValue = value + buttonText;
      setValue(newDisplayValue);
    }
  };

  return (
    <>
      <div className={style.calculator}>
        <Display value={value} />
        <ButtonsContainer handleOnNumClick={handleOnNumClick} />
      </div>
    </>
  );
}

export default App;
