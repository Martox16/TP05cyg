import React from 'react';
import './TareaMasRapida.css';

function TareaMasRapida({ tareas, onMostrarTareaMasRapida }) {
  function mostrarTareaMasRapida() {
    const tareasCompletadas = tareas.filter(tarea => tarea.tachada && tarea.fechaTachado);
    if (tareasCompletadas.length > 0) {
      const tareaMasRapida = tareasCompletadas.reduce((min, tarea) => {
        if (tarea.fechaTachado - tarea.fechaCreacion < min.fechaTachado - min.fechaCreacion) {
          return tarea;
        } else {
          return min;
        }
      }, tareasCompletadas[0]);

      alert(`La tarea más rápida fue: "${tareaMasRapida.descripcion}"`);
    } else {
      alert("No hay tareas completadas aún.");
    }
  }

  return (
    <div>
      <button id="tarea-mas-rapida" onClick={mostrarTareaMasRapida}>Mostrar Tarea Más Rápida</button>
    </div>
  );
}

export default TareaMasRapida;
