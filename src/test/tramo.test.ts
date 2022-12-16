import { Parada } from "../parada"
import {Tramo} from "../tramo"

const origen = new Parada("001","Granada");
const destino = new Parada("002","Almuñécar");
const tramo = new Tramo(origen,destino,1.4,30);

test("Origen y Destino de Tramo no pueden ser iguales", () => {
  expect(tramo.getOrigenTramo() == tramo.getDestinoTramo()).toBe(false);
});

test("El precio de un Tramo no puede ser negativo",() => {
  expect(tramo.getPrecioTramo()).toBeGreaterThan(0);
});

test("La duración de un Tramo no puede ser negativa",() => {
  expect(tramo.getTiempoTramo()).toBeGreaterThan(0);
});