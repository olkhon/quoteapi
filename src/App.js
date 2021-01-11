
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

let [text, setText] = useState('');

useEffect( ()=> {
  axios
  .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
  .then( (res) => {
      let accessObjectValue = Object.values(res);
      let accessArrayValue = accessObjectValue[0];
      setText(accessArrayValue)
  })
  .catch( (error) => {
    console.log(error);
  })
}, []);



  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <p>Quote: {text}</p>
    </div>
  );
}

export default App;
