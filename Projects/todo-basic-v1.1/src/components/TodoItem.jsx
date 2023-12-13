function TodoItem(props) {
  return (
    <div className="row my-2">
      <div className="col-6">{props.todoName}</div>
      <div className="col-4">{props.todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger my-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
