import { Age, Venus, Mercury, Mars, Jupiter } from "../src/js/age";

//Edad is age in spanish

describe("Age", () => {

  test("Edad should return 20", () => {
    let age = new Age(20);
    expect(age.edad).toEqual(20);
  });

  test("Returns edad in Venus", () => {
    let venus = new Venus(20);
    venus.venusAge();
    expect(venus.venusEdad).toEqual(12);
  });

  test("Returns edad in Mercury", () => {
    let mercury = new Mercury(20);
    mercury.mercuryAge();
    expect(mercury.mercuryEdad).toEqual(4);
  });

  test("Returns edad in Mars", () => {
    let mars = new Mars(20);
    mars.marsAge();
    expect(mars.marsEdad).toEqual(4);
  });

  test("Returns edad in Jupiter", () => {
    let jupiter = new Jupiter(20);
    jupiter.jupiterAge();
    expect(jupiter.jupiterEdad).toEqual(4);
  });
});