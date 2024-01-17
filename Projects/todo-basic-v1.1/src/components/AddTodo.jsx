import { useRef } from "react";
import style from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ handleOnAddButton }) {
  const todoName = useRef();
  const date = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const name = todoName.current.value;
    const dd = date.current.value;
    todoName.current.value = "";
    date.current.value = "";
    handleOnAddButton(name, dd);
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
              ref={todoName}
            />
          </div>
          <div className="col-4">
            <input className={style.inputbox} type="date" ref={date} />
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
