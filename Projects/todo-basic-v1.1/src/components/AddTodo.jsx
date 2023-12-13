import style from "./AddTodo.module.css";

function AddTodo() {
  return (
    <>
      <div className={style["addtodo-container"]}>
        <div className="row">
          <div className="col-6">
            <input
              className={style.inputbox}
              type="text"
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input className={style.inputbox} type="date" />
          </div>
          <div className="col-2">
            {/* <button type="button" className="btn btn-success"> */}
            <button
              type="button"
              className={`${style["myButton"]} btn btn-success`}
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
