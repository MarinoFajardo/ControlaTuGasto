import { obtenerNodoRaíz, rutaMasBarata } from "../algoritmo";
import {Arbol} from "../algoritmo";

const origen = "Granada";
const destino = "Otívar";
const valorDeseado: number = 4.30;

const raiz = obtenerNodoRaíz(origen);
let arbol = new Arbol(raiz);
arbol.generarArbol();

test("La ruta más barata tiene un valor de 4.30",() => {
  expect(rutaMasBarata(origen,destino,arbol)).toBe(valorDeseado);
})

