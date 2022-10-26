
export class Tramo {

    private origenTramo: string;
    private destinoTramo: string;
    private precioTramo: number;
    private tiempoTramo: number;

    constructor(origenTramo: string, destinoTramo: string, precioTramo: number, tiempoTramo: number) {
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

    public getOrigenTramo(): string {
      return this.origenTramo;
    }

    public getDestinoTramo(): string {
      return this.destinoTramo;
    }

    public getPrecioTramo(): number {
      return this.precioTramo;
    }

    public getTiempoTramo(): number {
      return this.tiempoTramo;
    }

}