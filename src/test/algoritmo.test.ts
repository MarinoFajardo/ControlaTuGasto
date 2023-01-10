import tramos from "../data/datos.json"
import { Tramo } from "../tramo";
import {Parada} from "../parada"

//Función que extrae los elementos del json y los convierte en un array de tramos.
function tramosData():Tramo[]{
  let salida:Tramo[] = new Array();
  for(let tramo of tramos){
    var obj:Tramo = new Tramo(new Parada(tramo.origenTramo.idParada,tramo.origenTramo.ciudad), new Parada(tramo.destinoTramo.idParada,tramo.destinoTramo.ciudad), Number(tramo.precioTramo),Number(tramo.tiempoTramo));
    salida.push(obj);
  }
  return salida;
}
