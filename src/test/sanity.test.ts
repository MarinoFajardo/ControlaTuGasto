import tramos from "../data/datos.json"

const totalTramos = 9;

test("Se han leido el número correcto de Tramos", () => {
  expect(tramos.length).toBe(totalTramos);
});

