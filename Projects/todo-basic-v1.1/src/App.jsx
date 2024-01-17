import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Message from "./components/Message";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="container">
        <AppName />
        <AddTodo />
        <Message />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
