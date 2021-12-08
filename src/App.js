import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Images from "./components/Images.js";
function App() {
  const [nasaImg, setNasaImg] = useState([]);

  useEffect(() => {
    const fetchImage = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
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
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
      <Images info={nasaImg} />
    </div>
  );
}

export default App;
