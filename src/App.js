import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  const getDogImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => setImageUrl(response.data.message))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>random dog generator lol</h1>
      <button onClick={getDogImage}>woof! woof!</button>
      <br />
      {imageUrl && <img src={imageUrl} alt="Dog" />}
    </div>
  );
}

export default App;
