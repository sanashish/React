import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import style from "./Message.module.css";

function Message() {
  const contectObj = useContext(TodoItemsContext);
  const todoItems = contectObj.todoItems;

  return (
    todoItems.length === 0 && (
      <h3 className={style.msg}>Nothing to do Today! Enjoy your cuppa.</h3>
    )
  );
}

export default Message;
