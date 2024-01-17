import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import Message from "./components/Message";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleOnAddButton = (name, date) => {
    setTodoItems((currentValue) => [
      ...currentValue,
      { name: name, date: date },
    ]);
  };

  const handleOnDeleteButton = (name) => {
    const newTodoItem = todoItems.filter((item) => item.name !== name);
    setTodoItems(newTodoItem);
  };

  return (
    <>
      <center className="container">
        <AppName />
        <AddTodo handleOnAddButton={handleOnAddButton} />
        {todoItems.length === 0 && <Message />}
        <TodoItems
          todoItems={todoItems}
          handleOnDeleteButton={handleOnDeleteButton}
        />
      </center>
    </>
  );
}

export default App;
