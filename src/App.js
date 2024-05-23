import React, { useState } from 'react';
import Titulo from './componentes/Titulo/Titulo.js';
import AgregarTarea from './componentes/AgregarTarea/AgregarTarea.js';
import ListaTarea from './componentes/ListaTareas/ListaTareas.js';
import TareaMasRapida from './componentes/TareaMasRapida/TareaMasRapida.js';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (descripcion) => {
    const nuevaTarea = { descripcion, tachada: false, fechaCreacion: new Date() };
    setTareas([...tareas, nuevaTarea]);
  };

  const toggleTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].tachada = !nuevasTareas[index].tachada;
    if (nuevasTareas[index].tachada) {
      nuevasTareas[index].fechaTachado = new Date();
    } else {
      nuevasTareas[index].fechaTachado = null;
    }
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  const mostrarTareaMasRapida = () => {
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
  };

  return (
    <div className="App">
      <Titulo />
      <AgregarTarea onAgregarTarea={agregarTarea} />
      <ListaTarea tareas={tareas} onToggleTarea={toggleTarea} onEliminarTarea={eliminarTarea} />
      <TareaMasRapida tareas={tareas} onMostrarTareaMasRapida={mostrarTareaMasRapida} />
    </div>
  );
}

export default App;
