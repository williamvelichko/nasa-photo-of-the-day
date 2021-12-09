import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Images from "./components/Images.js";
import Header from "./components/Header.js";
function App() {
  const [nasaImg, setNasaImg] = useState([]);
  const Date = "2012-03-04";

  useEffect(() => {
    const fetchImage = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${Date}`
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

      <Header title={nasaImg} explanation={nasaImg} date={nasaImg} />
      <Images info={nasaImg} />
    </div>
  );
}

export default App;
