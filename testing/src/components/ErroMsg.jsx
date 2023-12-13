function ErrorMsg(props) {
  return <>{props.city.length === 0 && <h4>No City Found!</h4>}</>;
}

export default ErrorMsg;
