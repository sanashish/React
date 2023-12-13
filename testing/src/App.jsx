import ErrorMsg from "./components/ErroMsg";
import CityList from "./components/CityList";
import "./App.css";

function App() {
  let city = ["Lucknow", "Pune", "Banglore", "Kolkata"];

  return (
    <>
      <h1>
        <center>City</center>
      </h1>
      <ErrorMsg city={city} />
      <CityList city={city} />
    </>
  );
}

export default App;
