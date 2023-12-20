import ErrorMsg from "./components/ErroMsg";
import CityList from "./components/CityList";
import "./App.css";
import Container from "./components/Container";

function App() {
  let city = ["Lucknow", "Pune", "Banglore", "Kolkata"];

  return (
    <>
      <Container>
        <h1 className="title">
          <center>City</center>
        </h1>
        <ErrorMsg city={city} />
        <CityList city={city} />
      </Container>
    </>
  );
}

export default App;
