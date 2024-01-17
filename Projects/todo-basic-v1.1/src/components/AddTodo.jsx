import { useState } from "react";
import style from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ handleOnAddButton }) {
  const [todoName, setTodoName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    handleOnAddButton(todoName, date);
    setTodoName("");
    setDate("");
  };

  return (
    <>
      <form
        className={style["addtodo-container"]}
        action=""
        onSubmit={handleAddButtonClick}
      >
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
            <button className={`${style["myButton"]} btn btn-success`}>
              <IoMdAddCircle />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
