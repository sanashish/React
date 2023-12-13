import "./App.css";

function App() {
  let city = ["Lucknow", "Pune", "Banglore", "Kolkata"];
  return (
    <>
      <h1>
        <center>City</center>
      </h1>
      <ul className="list-group mx-5">
        {/* ------------------Map Method---------------- */}
        {/* ---------Render Lists from array data------- */}
        {city.map((cityName) => (
          <li key={cityName} className="list-group-item">
            {cityName}
          </li>
        ))}
        {/* -------------------------------------------- */}
      </ul>
    </>
  );
}

export default App;
