import tramos from "./data/datos.json"
import { Parada } from "./parada"

const circularReplacer = () => {
  
  // Creating new WeakSet to keep 
  // track of previously seen objects
  const seen = new WeakSet();
    
  return (key:string, value:string) => {

      // If type of value is an 
      // object or value is null
      if (typeof(value) === "object" && value !== null) {
        
      // If it has been seen before
        if (seen.has(value)) {
          return 'Object';
        }
        // Add current value to the set
        seen.add(value);
     }
       
     // return the value
     return value;
 };
};

interface Nodo{
  parada: Parada | null ;
  coste: number | null ;
  padre: Nodo | null;
  hijoIzq: Nodo | null;
  hermanoDrch: Nodo | null;
}


export class Arbol{
  private root: Nodo;
  private peso: number;

  constructor( root: Nodo){
    this.root = root;
    this.peso = 0;
  }

  public getRoot(){
    return this.root;
  }
  public getPeso(){
    return this.peso;
  }

  public incrementarPeso(){
    this.peso++;
  }

  public aniadirHijos(nodo: Nodo){
    let nodoactual: Nodo={
      parada : null,
      coste : null,
      padre : null,
      hijoIzq : null,
      hermanoDrch : null
    };
    nodoactual = nodo;
      for(let tramo of tramos){
        if(tramo.origenTramo.ciudad == nodoactual.parada?.getCiudad()){
          if(nodoactual.hijoIzq == null){
            let hijo : Nodo ={
              parada : new Parada(tramo.destinoTramo.idParada, tramo.destinoTramo.ciudad),
              coste : Number(tramo.precioTramo),
              padre : nodoactual,
              hijoIzq : null,
              hermanoDrch : null
            };
            nodoactual.hijoIzq = hijo;
            nodoactual = hijo;
          }else{
            let hermano : Nodo = {
              parada : new Parada(tramo.destinoTramo.idParada, tramo.destinoTramo.ciudad),
              coste : Number(tramo.precioTramo),
              padre : nodoactual,
              hijoIzq : null,
              hermanoDrch : null
            };
              nodoactual.hermanoDrch = hermano;
              nodoactual = hermano;
          }
        }else{
          while(tramo.origenTramo.ciudad != nodoactual.padre?.parada?.getCiudad()){
            if(nodoactual.padre != null){
              nodoactual = nodoactual.padre;
            }
          }
          let nodo: Nodo = {
            parada : new Parada(tramo.destinoTramo.idParada, tramo.destinoTramo.ciudad),
            coste : Number(tramo.precioTramo),
            padre : nodoactual.padre,
            hijoIzq : null,
            hermanoDrch : null
          }
          nodoactual.hermanoDrch = nodo;
          nodoactual = nodo;
        }
        this.incrementarPeso();
      }
  }
}

export function obtenerNodoRaíz(origen:string): Nodo{
  let nodo : Nodo = {
    parada : null,
    coste : null,
    padre : null,
    hijoIzq : null,
    hermanoDrch : null
  }
  for(let tramo of tramos){
    if(tramo.origenTramo.ciudad == origen){
      nodo.parada = new Parada(tramo.origenTramo.idParada, tramo.origenTramo.ciudad);
    }
  }
  return nodo;
}

export function rutaMasBarata(origen : string , destino: string, arbol: Arbol):number{
  let minimo : number = 100;
  let acumulado: number = 0;
  let nodoactual:Nodo = arbol.getRoot();
  let recorridos: number = 1;

  while(recorridos <= tramos.length){
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





