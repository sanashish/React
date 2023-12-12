function Content() {
  let date = new Date();
  return (
    <>
      <div className="content">
        <div>This is the clock that shows the time in Bharat at all times</div>
        <div>
          This is the current time: {date.toLocaleDateString("en-GB")} -{" "}
          {date.toLocaleTimeString()}
        </div>
      </div>
    </>
  );
}

export default Content;
