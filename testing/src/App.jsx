import ErrorMsg from "./components/ErroMsg";
import Cities from "./components/Cities";
import "./App.css";
import Container from "./components/Container";
import CityInput from "./components/CityInput";
import { useState } from "react";

function App() {
  let [city, setCity] = useState([]);

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newCity = event.target.value;
      let updatedCity = [...city, newCity];
      setCity(updatedCity);
    }
  };

  return (
    <>
      <Container>
        <h1 className="title">
          <center>City</center>
        </h1>
        <CityInput handleOnKeyDown={handleOnKeyDown} />
        <ErrorMsg city={city} />
        <Cities city={city} />
      </Container>
    </>
  );
}

export default App;
