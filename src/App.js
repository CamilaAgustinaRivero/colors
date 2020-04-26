import React from 'react';
import './App.css';
import Titulo from './components/Titulo/Titulo'
import Colores from './components/Colores/Colores'
import ColoresHook from "./components/Colores/ColoresHook";

function App() {
  let colores = ["pink", "orange", "red", "violet", "blue", "green"]
  return (
    <div className="App">
      <header className="App-header">
        <Titulo/>
        <Colores colores={colores}/>
        <ColoresHook colores={colores}/>
      </header>
    </div>
  );
}

export default App;
