import { GestorTareas } from "./GestorTareas";
import promptSync from "prompt-sync";
const prompt = promptSync();

const gestor = new GestorTareas();

let opcion;

do {
    console.log("\nMenu Principal");
    console.log("__________________________________________")
    console.log("1. Crear Tarea");
    console.log("2. Buscar Tarea");
    console.log("3. Editar Tarea");
    console.log("0. Salir");

    opcion = parseInt(prompt("Seleccione una opción: "));

    switch (opcion) {
        case 1: gestor.crearTarea(); break;
        case 2: gestor.buscarTarea(); break;
        case 3: gestor.editarTarea(); break;
        case 0: console.log("Saliendo..."); break;
        default: console.log("Opción inválida");
    }
} while (opcion !== 0);
