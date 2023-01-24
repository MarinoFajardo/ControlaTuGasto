import  tramosjson from "./data/datos.json"
import { obtenerNodoRaíz, rutaMasBarata } from "../algoritmo";
import {Arbol, Nodo} from "../arbol";
import { Tramo } from "../tramo";
import { Parada } from "../parada";
import { expect } from "chai";
import 'mocha';


//Función que extrae los elementos del json y los convierte en un array de tramos.
function tramosData():Tramo[]{
  let salida:Tramo[] = new Array();
  for(let tramo of tramosjson){
    var obj:Tramo = new Tramo(new Parada(tramo.origenTramo.idParada,tramo.origenTramo.ciudad), new Parada(tramo.destinoTramo.idParada,tramo.destinoTramo.ciudad), Number(tramo.precioTramo),Number(tramo.tiempoTramo));
    salida.push(obj);
  }
  return salida;
}

var tramos:Tramo[] = tramosData();

const pesoArbol1:number = 13;
const pesoArbol2:number = 5;

const origen: string = "Granada";
const origen2: string = "Salobreña";
const destino: string = "Otivar";
const destino2: string = "Jete";
const destino3: string = "Almuñecar";

describe("La entre Granada y Otívar tiene que ser más cara que la ruta entre Granada y Almuñécar", () => {
  it("Debe devolver true", () => {
    expect(rutaMasBarata(origen,destino,tramos)).to.greaterThan(rutaMasBarata(origen,destino3,tramos));
  });
});

describe("La ruta entre Salobreña y Jete tiene que ser más barata que la ruta entre Salobreña y Otívar", () => {
  it("Debe devolver true", () => {
    expect(rutaMasBarata(origen2,destino2,tramos)).to.below(rutaMasBarata(origen2,destino,tramos));
  });
});


