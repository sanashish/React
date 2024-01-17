import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

function TodoItems() {
  const contectObj = useContext(TodoItemsContext);
  const todoItems = contectObj.todoItems;
  // console.log(todoItems);

  return (
    <>
      <div className={style.todoitem}>
        {todoItems.map((item) => (
          <TodoItem key={item.name} todoName={item.name} todoDate={item.date} />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
