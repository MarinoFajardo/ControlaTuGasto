import {isDateRouteOK,isOriginDuplicated,isRouteOriginEqualToDestiny, isRoutePrizePositive, isRouteTimePositive, Ruta} from "../ruta"
import {Parada} from "../parada"
import {Tramo} from "../tramo"

const origen = new Parada("001","Granada");
const destino = new Parada("002","Almuñécar");
const tramo = new Tramo(origen,destino,1.4,80);

const origen2 = new Parada("002","Almuñécar");
const destino2 = new Parada("003","Otívar");
const tramo2 = new Tramo(origen2,destino2,1.7,120);

const tramos: Tramo[] = [tramo,tramo2];
const ruta = new Ruta(new Date("2024-12-12"),tramos);

test("El precio de una ruta no puede ser negativo",() => {
  expect(isRoutePrizePositive(ruta)).toBe(true);
});

test("La duración total de una ruta no puede ser negativa",() => {
  expect(isRouteTimePositive(ruta)).toBe(true);
});

test("El origen y el destino de una ruta no puede ser el mismo",() => {
  expect(isRouteOriginEqualToDestiny(ruta)).toBe(false);
});

test("La fecha de una ruta no puede ser anterior a la fecha actual",() => {
  expect(isDateRouteOK(ruta)).toBe(true);
});

test("El Origen no puede aparecer más de una vez en la ruta",() => {
  expect(isOriginDuplicated(ruta)).toBe(false);
});