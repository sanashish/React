import { useState } from "react";
import Item from "./Item";

function CityList({ city }) {
  let [activeCity, setActiveCity] = useState([]);

  let onVisitButton = (cityName, event) => {
    let newCity = [...activeCity, cityName];
    setActiveCity(newCity);
  };

  return (
    <>
      <ul className="list-group">
        {city.map((cityName) => (
          <Item
            key={cityName}
            cityName={cityName}
            visited={activeCity.includes(cityName)}
            handleOnClickVisitButton={(event) => onVisitButton(cityName, event)}
          />
        ))}
      </ul>
    </>
  );
}

export default CityList;
