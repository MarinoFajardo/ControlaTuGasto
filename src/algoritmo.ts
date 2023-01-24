import { Parada } from "./parada"
import { Tramo } from "./tramo"
import { Nodo } from "./arbol"
import { Arbol } from "./arbol"


export function obtenerNodoRaíz(origen:string,tramos:Tramo[]): Nodo{
  let nodo : Nodo = {
    parada : null,
    coste : null,
    padre : null,
    hijoIzq : null,
    hermanoDrch : null
  }
  for(let tramo of tramos){
    if(tramo.getOrigenTramo().getCiudad() == origen){
      nodo.parada = new Parada(tramo.getOrigenTramo().getidParada(), tramo.getOrigenTramo().getCiudad());
    }
  }
  if(nodo.parada != null){
    return nodo;
  }else{
    throw new Error("El origen de ruta indicado no existe");
  }
}

export function rutaMasBarata(origen : string , destino: string, tramos:Tramo[]):number{
  let minimo : number = 100;
  let acumulado: number = 0;
  let arbol = new Arbol(obtenerNodoRaíz(origen,tramos),destino,tramos);
  let nodoactual:Nodo = arbol.getRoot();
  let recorridos: number = 1;

  while(recorridos <= arbol.getPeso()){//Hay que recorrer todos los nodos del árbol
    if(nodoactual != arbol.getRoot() || nodoactual.parada?.getCiudad() != origen){
      if((nodoactual.coste != null)){
        acumulado += nodoactual.coste
        recorridos ++;
        if(nodoactual.parada?.getCiudad() != destino){
          if(nodoactual.hijoIzq != null)
            nodoactual = nodoactual.hijoIzq;
        }else{
          if(acumulado < minimo){
            minimo = acumulado;
          }
          while(nodoactual.padre != arbol.getRoot()){
            if(nodoactual.padre != null)
              nodoactual = nodoactual.padre;
          }
          if(nodoactual.hermanoDrch != null)
            nodoactual = nodoactual.hermanoDrch;
            acumulado = 0;
        }

      }
    }else{
      if((nodoactual.hijoIzq != null)){
        nodoactual = nodoactual.hijoIzq;
      }
    }
  }
  return minimo;
}





