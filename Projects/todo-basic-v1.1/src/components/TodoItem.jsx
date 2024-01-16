import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, handleOnDeleteButton }) {
  return (
    <div className="row my-2">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger my-button"
          onClick={() => handleOnDeleteButton(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
