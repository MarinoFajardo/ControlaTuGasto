
class Tramo {

    origen_tramo: string;
    destino_tramo: string;
    precio_tramo: number;
    tiempo_tramo: number;

    constructor(origen_tramo: string, destino_tramo: string, precio_tramo: number, tiempo_tramo: number) {
        this.origen_tramo = origen_tramo;
        this.destino_tramo = destino_tramo;
        this.precio_tramo = precio_tramo;
        this.tiempo_tramo = tiempo_tramo;
    }

    getOrigenTramo() {
        return this.origen_tramo;
    }

    getDestinoTramo() {
        return this.destino_tramo;
    }

    getPrecioTramo() {
        return this.precio_tramo;
    }

    getTiempoTramo() {
        return this.tiempo_tramo;
    }
}