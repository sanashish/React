import Item from "./Item";

function CityList(props) {
  const handleOnChangeTextarea = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <ul className="list-group mx-5">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={handleOnChangeTextarea}
          ></textarea>
          <label htmlFor="floatingTextarea">Enter City of your choice</label>
        </div>
        {props.city.map((cityName) => (
          <Item key={cityName} cityName={cityName} />
        ))}
      </ul>
    </>
  );
}

export default CityList;
