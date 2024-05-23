import React, { useState } from 'react';

function AgregarTarea({ onAgregarTarea }) {
  const [inputTarea, setInputTarea] = useState('');

  function manejarCambioInput(event) {
    setInputTarea(event.target.value);
  }

  function agregarTarea() {
    if (inputTarea.trim() === '') {
      alert('No puedes agregar una tarea vacía');
      return;
    }

    onAgregarTarea(inputTarea);
    setInputTarea('');
  }

  return (
    <div id="agregar-tarea">
      <div className="input-container">
        <input type="text" value={inputTarea} onChange={manejarCambioInput} />
        <button id="send" onClick={agregarTarea}>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default AgregarTarea;

