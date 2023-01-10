import tramos from "../data/datos.json"
import { obtenerNodoRaíz, rutaMasBarata } from "../algoritmo";
import {Arbol, Nodo} from "../arbol";
import { Tramo } from "../tramo";
import { Parada } from "../parada";

//Función que extrae los elementos del json y los convierte en un array de tramos.
function tramosData():Tramo[]{
  let salida:Tramo[] = new Array();
  for(let tramo of tramos){
    var obj:Tramo = new Tramo(new Parada(tramo.origenTramo.idParada,tramo.origenTramo.ciudad), new Parada(tramo.destinoTramo.idParada,tramo.destinoTramo.ciudad), Number(tramo.precioTramo),Number(tramo.tiempoTramo));
    salida.push(obj);
  }
  return salida;
}

var array:Tramo[] = tramosData();

const numElementos: number = 12;
const origen: string = "Granada";
const destino: string = "Otivar";
const destino2: string = "Jete";
const valorDeseado: number = 4.30;

const raiz:Nodo = obtenerNodoRaíz(origen,array);
var arbol:Arbol = new Arbol(raiz);

arbol.generarArbol(array,destino);

console.log(arbol.getPeso());


test("La ruta más barata tiene un valor de 4.30",() => {
  expect(rutaMasBarata(origen,destino,arbol,array)).toBe(valorDeseado);
})

test("El nodo raíz tiene que ser el origen de la ruta",() => {
  expect(arbol.getRoot().parada?.getCiudad()).toBe(origen);
})

test("El valor de la ruta de una parada anterior tiene que ser menor",() => {
  expect(rutaMasBarata(origen,destino,arbol,array) > rutaMasBarata(origen,destino2,arbol,array)).toBe(true);
})
