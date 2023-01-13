import tramos from "./data/datos.json"
import { expect } from "chai";
import 'mocha';

const totalTramos: number = 12;

describe("Se han leido el número correcto de Tramos", () => {
  it("Debe devolver el número total de tramos", () => {
    expect(tramos.length).to.equal(totalTramos);
  });
});

