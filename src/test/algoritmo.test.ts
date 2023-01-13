import tramos from "./data/datos.json"
import { obtenerNodoRaíz, rutaMasBarata } from "../algoritmo";
import {Arbol, Nodo} from "../arbol";
import { Tramo } from "../tramo";
import { Parada } from "../parada";
import { expect } from "chai";
import 'mocha';


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
const pesoArbol2:number = 5;

const origen: string = "Granada";
const origen2: string = "Salobreña";
const destino: string = "Otivar";
const destino2: string = "Jete";
const valorDeseado: number = 4.2;
const valorDeseado2: number = 2.1;

const raiz:Nodo = obtenerNodoRaíz(origen,array);
const raiz2:Nodo = obtenerNodoRaíz(origen2,array);

const arbol:Arbol = new Arbol(raiz,destino,array);
const arbol2:Arbol = new Arbol(raiz2,destino2,array);

describe("La ruta más barata entre Granada y Otívar tiene un valor de 4.20", () => {
  it("Debe devolver 4.20", () => {
    expect(rutaMasBarata(origen,destino,arbol,array)).to.equal(valorDeseado);
  });
});

describe("La ruta más barata entre Salobreña y Jete tiene un valor de 2.10", () => {
  it("Debe devolver 2.1", () => {
    expect(rutaMasBarata(origen2,destino2,arbol2,array)).to.equal(valorDeseado2);
  });
});

describe("El nodo raíz tiene que ser el origen de la ruta", () => {
  it("Debe devolver Granada", () => {
    expect(arbol.getRoot().parada?.getCiudad()).to.equal(origen);
  });
});

describe("El peso del árbol generado para calcular las rutas entre Granada y Otívar tiene que ser 13", () => {
  it("Debe devolver 13", () => {
    expect(arbol.getPeso()).to.equal(pesoArbol1);
  });
});

describe("El peso del árbol generado para calcular las rutas entre Salobreña y Jete tiene que ser 5", () => {
  it("Debe devolver 5", () => {
    expect(arbol2.getPeso()).to.equal(pesoArbol2);;
  });
});

