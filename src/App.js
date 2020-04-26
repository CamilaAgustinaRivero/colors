import React from 'react';
import './App.css';
import Titulo from './components/Titulo/Titulo'
import Colores from './components/Colores/Colores'

function App() {
  let colores = ["Rosa", "Naranja", "Rojo", "Violeta", "Azul", "Verde"]
  return (
    <div className="App">
      <header className="App-header">
        <Titulo/>
        <Colores colores={colores}/>
      </header>
    </div>
  );
}

export default App;
