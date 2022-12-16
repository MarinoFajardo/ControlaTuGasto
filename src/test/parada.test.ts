import {Parada} from "../parada"

const parada1 = new Parada("001","Granada");
const parada2 = new Parada("002","Almuñécar");

test("Dos paradas de ciudades distintas no pueden tener el mismo ID", () => {
  expect((parada1.getCiudad()!=parada2.getCiudad())&&(parada1.getidParada()!=parada2.getidParada())).toBe(true);
});