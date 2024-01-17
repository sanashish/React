import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteButton } = useContext(TodoItemsContext);

  return (
    <div className="row my-2">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger my-button"
          onClick={() => deleteButton(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
