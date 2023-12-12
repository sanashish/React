import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  return (
    <>
      <center className="container">
        <AppName />
        <div className="items-container">
          <AddTodo />
          <TodoItem />
          <TodoItem2 />
        </div>
      </center>
    </>
  );
}

export default App;
