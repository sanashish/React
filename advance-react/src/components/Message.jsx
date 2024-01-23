function Message({ onGetPostClick }) {
  return (
    <h1 className="msg">
      <center>
        <p>There are no Post</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onGetPostClick}
        >
          Get Post from Server
        </button>
      </center>
    </h1>
  );
}

export default Message;
