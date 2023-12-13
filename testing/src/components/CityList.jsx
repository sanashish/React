import Item from "./Item";

function CityList(props) {
  return (
    <ul className="list-group mx-5">
      {props.city.map((cityName) => (
        <Item key={cityName} cityName={cityName} />
      ))}
    </ul>
  );
}

export default CityList;
