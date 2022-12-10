import {areParadaIdEqual, Parada} from "../parada"

const parada1 = new Parada("001","Granada");
const parada2 = new Parada("002","Almuñécar");

test("Dos paradas de ciudades distintas no pueden tener el mismo ID", () => {
  expect(areParadaIdEqual(parada1,parada2)).toBe(false);
});