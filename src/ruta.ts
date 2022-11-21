import {Tramo} from "./tramo"

class Ruta{

    private fechaRuta: Date;
    private origenRuta: string;
    private destinoRuta: string;
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

}