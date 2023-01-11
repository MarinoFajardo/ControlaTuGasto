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

const pesoArbol1:number = 13;
const pesoArbol2:number = 13;

const origen: string = "Granada";
const origen2: string = "Salobreña";
const destino: string = "Otivar";
const destino2: string = "Jete";
const valorDeseado: number = 4.20;

const raiz:Nodo = obtenerNodoRaíz(origen,array);
const raiz2:Nodo = obtenerNodoRaíz(origen2,array);

const arbol:Arbol = new Arbol(raiz,destino,array);
const arbol2:Arbol = new Arbol(raiz2,destino2,array);


test("La ruta más barata entre Granada y Otívar tiene un valor de 4.20",() => {
  expect(rutaMasBarata(origen,destino,arbol,array)).toBe(valorDeseado);
})

test("La ruta más barata entre Salobreña y Jete tiene un valor de 2.10",() => {
  expect(rutaMasBarata(origen,destino,arbol,array)).toBe(valorDeseado);
})

test("El nodo raíz tiene que ser el origen de la ruta",() => {
  expect(arbol.getRoot().parada?.getCiudad()).toBe(origen);
})

test("El peso del árbol genrado para calcular las rutas entre Granada y Otívar tiene un peso de 13",() => {
  expect(arbol.getPeso()).toBe(pesoArbol1);
})

test("El peso del árbol genrado para calcular las rutas entre Salobreña y Jete tiene un peso de 5",() => {
  expect(arbol.getPeso()).toBe(pesoArbol2);
})
