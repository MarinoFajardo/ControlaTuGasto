
class Ruta{
    origen_ruta: string;
    destino_ruta: string;
    precio_total: number;
    tiempo_total: number;
    tramos: Tramo[];

    constructor(origen_ruta: string, destino_ruta: string, precio_total: number, tiempo_total: number, tramos: Tramo[]) {
        this.origen_ruta = origen_ruta;
        this.destino_ruta = destino_ruta;
        this.precio_total = precio_total;
        this.tiempo_total = tiempo_total;
        this.tramos = tramos;
    }

    getOrigenRuta() {
        return this.origen_ruta;
    }

    getDestinoRuta() {
        return this.destino_ruta;
    }

    getPrecioTotal() {
        return this.precio_total;
    }

    getTiempoTotal() {
        return this.tiempo_total;
    }

    getTramos() {
        return this.tramos;
    }
}