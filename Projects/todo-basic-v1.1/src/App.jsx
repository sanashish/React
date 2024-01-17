import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import Message from "./components/Message";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addButton = (name, date) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: name, date: date },
    ]);
  };

  const deleteButton = (name) => {
    const newTodoItem = todoItems.filter((item) => item.name !== name);
    setTodoItems(newTodoItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addButton: addButton,
        deleteButton: deleteButton,
      }}
    >
      <center className="container">
        <AppName />
        <AddTodo />
        <Message />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
