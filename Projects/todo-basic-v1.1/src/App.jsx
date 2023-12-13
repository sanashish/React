import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Mila",
      date: "14/12/2023",
    },
    {
      name: "Meeting",
      date: "22/12/2023",
    },
    {
      name: "Netflix",
      date: "24/12/2023",
    },
  ];
  return (
    <>
      <center className="container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
