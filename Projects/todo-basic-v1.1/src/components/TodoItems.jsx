import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

function TodoItems(props) {
  return (
    <>
      <div className={style.todoitem}>
        {props.todoItems.map((item) => (
          <TodoItem key={item.name} todoName={item.name} todoDate={item.date} />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
