import promptSync from "prompt-sync";
import { Tarea } from "./Tarea";

const prompt = promptSync();

//-------------------------------------------
//  La lista de Tarea
//-------------------------------------------

let listaTareas = [];
let cantidadTareas = 0;

/*-------------------------------------------
 Crear Tarea
-------------------------------------------*/

function crearTarea() {
  console.clear();
  console.log("--- CREAR NUEVA TAREA ---\n");

  let titulo = prompt("Título:");
  let descripcion = prompt("Descripción:");
  let dificultad = parseInt(prompt("Dificultad (1-5):"));
  let estado = prompt("Estado:");

  let preguntaFecha = parseInt(prompt("¿Agregar fecha límite?\n1: Sí\n2: No\n"));

  let dia, mes, anio;

  if (preguntaFecha === 1) {
    dia = parseInt(prompt("Día:"));
    mes = parseInt(prompt("Mes:"));
    anio = parseInt(prompt("Año:"));
  }
}
  // Crear tarea usando el constructor
  let nueva = new Tarea(titulo, descripcion, dificultad, estado, dia, mes, anio, preguntaFecha);

  console.clear();
  nueva.mostrarResumen();

  let confirmar = parseInt(prompt("¿Confirmar tarea?\n1: Sí\n2: No\n"));

  if (confirmar === 1) {
    listaTareas.push(nueva);
    cantidadTareas++;
    console.log("\n¡Tarea guardada con éxito!\n");
  } else {
    console.log("\nTarea cancelada.\n");

/*  Editar tarea
-------------------------------------------*/

function editarTarea() {
  console.clear();

  if (cantidadTareas === 0) {
    console.log("No hay tareas registradas.");
    return;
  }

  console.log("\n--- EDITAR TAREA ---");
  for (let i = 0; i < listaTareas.length; i++) {
    console.log(`${i + 1}. ${listaTareas[i].getTitulo()}`);
  }

  let seleccion = parseInt(prompt("Seleccione número de tarea (0 para volver):")) - 1;

  if (seleccion >= 0 && seleccion < cantidadTareas) {
    let tarea = listaTareas[seleccion];
    console.clear();
    console.log(`Editando: ${tarea.getTitulo()}\n`);

    tarea.setTitulo(prompt("Nuevo título:"));
    tarea.setDescripcion(prompt("Nueva descripción:"));
    tarea.setDificultad(parseInt(prompt("Nueva dificultad (1-5):")));
    tarea.setEstado(prompt("Nuevo estado:"));

    let pf = parseInt(prompt("¿Cambiar fecha? 1: Sí / 2: No"));
    tarea.setPreguntaFecha(pf);

    if (pf === 1) {
      tarea.setDia(parseInt(prompt("Día:")));
      tarea.setMes(parseInt(prompt("Mes:")));
      tarea.setAnio(parseInt(prompt("Año:")));
    }

    console.log("\n¡Tarea editada con éxito! \n");
  } else if (seleccion !== -1) {
    console.log("Número inválido.");
  }

  prompt("ENTER para continuar...");
}


/*  Buscar Tarea
-------------------------------------------*/

function buscarTarea() {
  console.clear();

  if (cantidadTareas === 0) {
    console.log("No hay tareas registradas.");
    return;
  }

  console.log("\n--- BUSCAR TAREA ---");
  for (let i = 0; i < listaTareas.length; i++) {
    console.log(`${i + 1}. ${listaTareas[i].getTitulo()}`);
  }

  let seleccion = parseInt(prompt("Número de tarea (0 para volver):"));

  if (seleccion > 0 && seleccion <= cantidadTareas) {
    console.clear();
    listaTareas[seleccion - 1].mostrarResumen();
  } else if (seleccion !== 0) {
    console.log("Número inválido.");
  }

  prompt("ENTER para continuar...");
}
}