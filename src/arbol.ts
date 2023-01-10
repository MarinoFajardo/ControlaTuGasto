import { Parada } from "./parada";
import { Tramo } from "./tramo";

export interface Nodo{
  parada: Parada | null ;
  coste: number | null ;
  padre: Nodo | null;
  hijoIzq: Nodo | null;
  hermanoDrch: Nodo | null;
}



