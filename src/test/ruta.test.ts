import {isOriginDuplicated, Ruta} from "../ruta"
import {Parada} from "../parada"
import {Tramo} from "../tramo"
import { truncate } from "fs";

const origen = new Parada("001","Granada");
const destino = new Parada("002","Almuñécar");
const tramo = new Tramo(origen,destino,1.4,80);

const origen2 = new Parada("002","Almuñécar");
const destino2 = new Parada("003","Otívar");
const tramo2 = new Tramo(origen2,destino2,1.7,120);

const tramos: Tramo[] = [tramo,tramo2];
const ruta = new Ruta(new Date("2024-12-12"),tramos);

test("El precio de una ruta no puede ser negativo",() => {
  expect(ruta.getPrecioTotal()).toBeGreaterThan(0);
});

test("La duración total de una ruta no puede ser negativa",() => {
  expect(ruta.getTiempoTotal()).toBeGreaterThan(0);
});

test("El origen y el destino de una ruta no puede ser el mismo",() => {
  expect(ruta.getOrigenRuta() == ruta.getDestinoRuta()).toBe(false);
});

test("La fecha de una ruta no puede ser anterior a la fecha actual",() => {
  expect(Date.now() > ruta.getFechaRuta().getTime()).toBe(false);
});

test("El Origen no puede aparecer más de una vez en la ruta",() => {
  expect(isOriginDuplicated(ruta)).toBe(false);
});