import { useState } from "react";
import style from "./AddTodo.module.css";

function AddTodo({ handleOnAddButton }) {
  const [todoName, setTodoName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    handleOnAddButton(todoName, date);
    setTodoName("");
    setDate("");
  };

  return (
    <>
      <div className={style["addtodo-container"]}>
        <div className="row">
          <div className="col-6">
            <input
              className={style.inputbox}
              type="text"
              placeholder="Enter Todo Here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input
              className={style.inputbox}
              type="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-2">
            {/* <button type="button" className="btn btn-success"> */}
            <button
              type="button"
              className={`${style["myButton"]} btn btn-success`}
              onClick={handleAddButtonClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
