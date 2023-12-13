import "./App.css";

function App() {
  // let city = ["Lucknow", "Pune", "Banglore", "Kolkata"];
  let city = [];

  // if (city.length === 0) {
  //   return <h4>No City Found!</h4>;
  // }

  let msg = city.length === 0 ? <h4>No City Found!</h4> : null;

  return (
    <>
      <h1>
        <center>City</center>
      </h1>
      {/* {city.length === 0 ? <h4>No City Found!</h4>:null} */}
      {/* {msg} */}
      {city.length === 0 && <h4>No City Found!</h4>}
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
