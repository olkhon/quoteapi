
import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {

let [text, setText] = useState('');



useEffect( ()=> {

  function apiCall () {
    axios
    .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then( (res) => {
        let accessObjectValue = Object.values(res);
        let accessArrayValue = accessObjectValue[0];
        setText(accessArrayValue);
    })
    .catch( (error) => {
      console.log(error);
    })
  }
  setInterval(function(){  apiCall()} , 3000);
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
