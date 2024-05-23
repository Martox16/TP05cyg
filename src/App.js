import logo from './logo.svg';
import './App.css';
import React from 'react';
import Titulo from './componentes/Titulo/Titulo.js';
import AgregarTarea from './componentes/AgregarTarea/AgregarTarea.js';
import ListaTarea from './componentes/ListaTareas/ListaTareas.js';
import TareaMasRapida from './componentes/TareaMasRapida/TareaMasRapida.js';

function App() {
  return (
    <div className="App">
      <Titulo />
      <AgregarTarea />
      <ListaTarea />
      <TareaMasRapida></TareaMasRapida>
    </div>
  );
}

export default App;


