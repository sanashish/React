const Container = ({ children }) => {
  return (
    <div className="card my-conatiner" style={{ width: "50%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
