import {Parada} from "./parada"

export class Tramo {

    private origenTramo: Parada;
    private destinoTramo: Parada;
    private precioTramo: number;
    private tiempoTramo: number;

    constructor(origenTramo: Parada, destinoTramo: Parada, precioTramo: number, tiempoTramo: number) {
        this.origenTramo = origenTramo;
        this.destinoTramo = destinoTramo;

        if(precioTramo >= 0) {
          this.precioTramo = precioTramo;
        } else {
          throw new Error("El precio del tramo no puede ser negativo");
        }

        if(tiempoTramo > 0) {
          this.tiempoTramo = tiempoTramo;
        } else {
          throw new Error("El tiempo del tramo no puede ser negativo");
        }
    }

    public getOrigenTramo(): Parada {
      return this.origenTramo;
    }

    public getDestinoTramo(): Parada {
      return this.destinoTramo;
    }

    public getPrecioTramo(): number {
      return this.precioTramo;
    }

    public getTiempoTramo(): number {
      return this.tiempoTramo;
    }
    
}
