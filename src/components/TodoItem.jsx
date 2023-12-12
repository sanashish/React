function TodoItem() {
  let todoName = "Buy Milk";
  let todoDate = "14/12/2023";

  return (
    <div className="row my-2">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger my-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
