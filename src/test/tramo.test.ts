import { Parada } from "../parada"
import {isPrizePositive, isTimePositive, Tramo} from "../tramo"
import {isOriginEqualToDestiny} from "../tramo"

const origen = new Parada("001","Granada");
const destino = new Parada("002","Almuñécar");
const tramo = new Tramo(origen,destino,1.4,30);

test("Origen y Destino de Tramo no pueden ser iguales", () => {
  expect(isOriginEqualToDestiny(tramo)).toBe(false);
});

test("El precio de un Tramo no puede ser negativo",() => {
  expect(isPrizePositive(tramo)).toBe(true);
});

test("La duración de un Tramo no puede ser negativa",() => {
  expect(isTimePositive(tramo)).toBe(true);
});