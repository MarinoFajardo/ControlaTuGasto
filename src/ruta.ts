import {Tramo} from "./tramo"
import {Parada} from "./parada"

export class Ruta{

    private fechaRuta: Date;
    private origenRuta: Parada;
    private destinoRuta: Parada;
    private precioTotal: number;
    private tiempoTotal: number;
    private tramos: Tramo[];

    constructor(fecha: Date,tramos: Tramo[]) {
      this.fechaRuta = fecha;
      this.tramos = tramos;
      
      let n = tramos.length;

      this.origenRuta = tramos[0].getOrigenTramo();
      this.destinoRuta = tramos[n-1].getDestinoTramo();

      // El precioTotal es la suma de los precios de cada tramo
      this.precioTotal = tramos.reduce((cumsum, current) => {
        return + current.getPrecioTramo()
      } , 0);

      // El tiempoTotal es la suma de los tiempos de cada tramo
      this.tiempoTotal = tramos.reduce((cumsum, current) => {
        return + current.getTiempoTramo()
      } , 0);
    }

    public getPrecioTotal(): number {
      return this.precioTotal;
    }

    public getTiempoTotal(): number {
      return this.tiempoTotal;
    }

    public getOrigenRuta(): Parada{
      return this.origenRuta;
    }

    public getDestinoRuta(): Parada{
      return this.destinoRuta;
    }

    public getFechaRuta(): Date{
      return this.fechaRuta;
    }
    public getTramos(): Tramo[]{
      return this.tramos;
    }
}