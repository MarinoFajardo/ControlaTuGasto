import { Parada } from "./parada";
import { Tramo } from "./tramo";

export interface Nodo{
  parada: Parada | null ;
  coste: number | null ;
  padre: Nodo | null;
  hijoIzq: Nodo | null;
  hermanoDrch: Nodo | null;
}

export class Arbol{
  private root:Nodo;
  private peso:number;

  constructor(root:Nodo,destino:string,array:Tramo[]){
    this.root = root;
    this.peso = 1; //Representa el número de nodos del árbol. Cuando se crea un árbol, el peso inicial el 1 ya que solo tiene el nodo raíz
    this.generarArbol(array,destino);
  }
  
  //Usado en el algoritmo
  public getRoot():Nodo{
    return this.root;
  }

  //Usado en el algoritmo
  public getPeso():number{
    return this.peso;
  }

  //Cada vez que añadimos un nodo en el árbol incrementamos su peso.
  public incrementarPeso(){
    this.peso++;
  }

  // Función que genera el árbol con el nodo root como origen de la ruta y el destino como las hojas del
  public generarArbol(tramos:Tramo[],destino:string){
    let nodoActual:Nodo = this.root;
    if(nodoActual.parada?.getCiudad() != null){
      let origen:string = nodoActual.parada.getCiudad();
    }else{
      throw new Error("El origen de la ruta es nulo");
    }
    for(let tramo of tramos){
        if(tramo.getOrigenTramo().getCiudad() == nodoActual.parada?.getCiudad() && tramo.getOrigenTramo().getCiudad() != destino){
          if(nodoActual.hijoIzq == null){
            let hijo : Nodo ={
              parada : new Parada(tramo.getDestinoTramo().getidParada(), tramo.getDestinoTramo().getCiudad()),
              coste : Number(tramo.getPrecioTramo()),
              padre : nodoActual,
              hijoIzq : null,
              hermanoDrch : null
            };
            nodoActual.hijoIzq = hijo;
            nodoActual = hijo;
            this.incrementarPeso();
          }else{
            let hermano : Nodo = {
              parada : new Parada(tramo.getDestinoTramo().getidParada(), tramo.getDestinoTramo().getCiudad()),
              coste : Number(tramo.getPrecioTramo()),
              padre : nodoActual,
              hijoIzq : null,
              hermanoDrch : null
            };
            nodoActual.hijoIzq.hermanoDrch = hermano;
            nodoActual = hermano;
            this.incrementarPeso();
          }
        }else{
          let tienePadre:boolean = false;
          while(tramo.getOrigenTramo().getCiudad() != nodoActual.padre?.parada?.getCiudad() && nodoActual.padre != null){
            if(nodoActual.padre != null){
              nodoActual = nodoActual.padre;
              if(nodoActual.padre?.parada?.getCiudad() == tramo.getOrigenTramo().getCiudad()){
                tienePadre = true;
              }
            }
          }
          if(tienePadre){
            let nodo: Nodo = {
              parada : new Parada(tramo.getDestinoTramo().getidParada(), tramo.getDestinoTramo().getCiudad()),
              coste : Number(tramo.getPrecioTramo()),
              padre : nodoActual.padre,
              hijoIzq : null,
              hermanoDrch : null
            }
            nodoActual.hijoIzq = nodo;
            nodoActual = nodo;
            this.incrementarPeso();
          }
        }
    }
  }
}

