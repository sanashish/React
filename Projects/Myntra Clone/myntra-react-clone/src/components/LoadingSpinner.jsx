const LoadingSpinner = () => {
  return (
    <div className="text-center m-5">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    </div>
  );
};

export default LoadingSpinner;
