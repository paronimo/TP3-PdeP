import { Suma, Resta, Multiplicacion, Division } from "./Operaciones";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

function solicitarNumeros(): [number, number] {
  const a = parseFloat(prompt("Ingrese el primer número: "));
  const b = parseFloat(prompt("Ingrese el segundo número: "));
  return [a, b];
}

function main(): void {
  let opc: number;

  do {
    console.log("\n--- MENÚ PRINCIPAL ---");
    console.log("0. Salir");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");

    opc = parseInt(prompt("Seleccione una opción: "));

    switch (opc) {
      case 0:
        console.log("¡Hasta luego!");
        break;

      case 1: {
        const [a, b] = solicitarNumeros();
        const operacion = new Suma(a, b);
        console.log("Resultado:", operacion.calcular());
        break;
      }

      case 2: {
        const [a, b] = solicitarNumeros();
        const operacion = new Resta(a, b);
        console.log("Resultado:", operacion.calcular());
        break;
      }

      case 3: {
        const [a, b] = solicitarNumeros();
        const operacion = new Multiplicacion(a, b);
        console.log("Resultado:", operacion.calcular());
        break;
      }

      case 4: {
        const [a, b] = solicitarNumeros();
        try {
          const operacion = new Division(a, b);
          console.log("Resultado:", operacion.calcular());
        } catch (error: any) {
          console.log(error.message);
        }
        break;
      }

      default:
        console.log("Opción inválida.");
    }
  } while (opc !== 0);
}

main();
