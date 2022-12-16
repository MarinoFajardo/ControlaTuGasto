import { obtenerNodoRaíz, rutaMasBarata } from "../algoritmo";
import {Arbol} from "../algoritmo";

const numElementos: number = 12;
const origen: string = "Granada";
const destino: string = "Otivar";
const destino2: string = "Jete"
const valorDeseado: number = 4.30;

const raiz = obtenerNodoRaíz(origen);
let arbol = new Arbol(raiz);
arbol.aniadirHijos(arbol.getRoot());

test("La ruta más barata tiene un valor de 4.30",() => {
  expect(rutaMasBarata(origen,destino,arbol)).toBe(valorDeseado);
})

test("El peso del árbol debe ser igual al número de elementos",() => {
  expect(arbol.getPeso()).toBe(numElementos);
})

test("El nodo raíz tiene que ser el origen de la ruta",() => {
  expect(arbol.getRoot().parada?.getCiudad()).toBe(origen);
})

test("El valor de la ruta de una parada anterior tiene que ser menor",() => {
  expect(rutaMasBarata(origen,destino,arbol) > rutaMasBarata(origen,destino2,arbol)).toBe(true);
})
