import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Images from "./components/Images.js";
import Header from "./components/Header.js";
import Dates from "./components/Dates";

function App() {
  const [nasaImg, setNasaImg] = useState([]);
  const [nasaDate, setNasaDate] = useState(
    Dates[Math.floor(Math.random() * Dates.length)]
  );

  useEffect(() => {
    const fetchImage = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=0wbopJqXy9iL8UmYBH7WkFrbTDPIlDNcgCdCaCXa&date=${nasaDate}`
        )
        .then((res) => {
          console.log(res.data);
          setNasaImg(res.data);
        })
        .catch((error) => {
          debugger;
        });
    };
    fetchImage();
  }, []);

  return (
    <div className="App">
      <p>
        <span role="img" aria-label="go!"></span>
      </p>

      <Header
        title={nasaImg}
        explanation={nasaImg}
        date={nasaImg}
        action={setNasaDate}
      />
      <Images info={nasaImg} />
    </div>
  );
}

export default App;
