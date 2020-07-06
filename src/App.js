import React from 'react';
import './App.css';
import OriginalsqlString from './Textimput/Textimputs';
import ConvertedsqlString from './Textoutput/Textoutput';
//import Converterbutton from './Buttons/Ripples'

function App() {
  return (
    <div className="App-header">
      <h1>SQL 2 VBA Formatter</h1>
     
      <div className = "App-body">
      <div className = "col"><OriginalsqlString /></div>
      <div className = "col"><ConvertedsqlString /></div>
      </div>

      <div className = "div-btn">
            <button className="btn btn-success btn-lg btn-block" type="submit">Format</button></div>
      </div>
      
      
      


  );
}


export default App;
