import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

function TodoItems({ todoItems, handleOnDeleteButton }) {
  return (
    <>
      <div className={style.todoitem}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.date}
            handleOnDeleteButton={handleOnDeleteButton}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
