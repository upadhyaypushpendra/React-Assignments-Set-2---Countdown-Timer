import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  const [currentTime,setCurrentTime] = useState(0);
  const handleKeyDown =(event)=>{
    if(event.key === 'Enter') {
      let time = parseInt(event.target.value);
      
    }
  };
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{currentTime}</div>
    </div>
  )
}


export default App;
