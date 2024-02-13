import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

function Controls() {
  const dispatch = useDispatch();
  const inputValue = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAddButton = () => {
    dispatch(
      counterActions.add({
        num: Number(inputValue.current.value),
      })
    );
    inputValue.current.value = "";
  };

  const handleSubButton = () => {
    dispatch(
      counterActions.subtract({
        num: Number(inputValue.current.value),
      })
    );
    inputValue.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}
        >
          Increment (+1)
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}
        >
          Decrement (-1)
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center m-3">
        <input
          type="number"
          placeholder="Enter Number"
          className="input-box"
          ref={inputValue}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddButton}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubButton}
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default Controls;
