import React from 'react';
import './ListaTareas.css';

function ListaTarea({ tareas, onToggleTarea, onEliminarTarea }) {
  function manejarClick(index) {
    onToggleTarea(index);
  }

  function manejarEliminar(index) {
    onEliminarTarea(index);
  }

  return (
    <ul id="listaTareas">
      {tareas.map((tarea, index) => (
        <li key={index}>
          <span className="tarea" onClick={() => manejarClick(index)} style={{ textDecoration: tarea.tachada ? 'line-through' : 'none' }}>{tarea.descripcion}</span>
          <button className="boton-eliminar" onClick={() => manejarEliminar(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTarea;
