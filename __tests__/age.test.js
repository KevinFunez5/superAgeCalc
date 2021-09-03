import { Age, PlanetAge } from "../src/js/age";

//Edad is age in spanish

describe("Age", () => {

  test("Edad should return 20", () => {
    let age = new Age(20);
    expect(age.edad).toEqual(20);
  });

  test("Returns edad in Venus", () => {
    let venus = new PlanetAge(20);
    venus.venusAge();
    expect(venus.venusEdad).toEqual(12);
  });

  test("Returns edad in Mercury", () => {
    let mercury = new PlanetAge(20);
    mercury.mercuryAge();
    expect(mercury.mercuryEdad).toEqual(4);
  });

  test("Returns edad in Mars", () => {
    let mars = new PlanetAge(20);
    mars.marsAge();
    expect(mars.marsEdad).toEqual(4);
  });

  test("Returns edad in Jupiter", () => {
    let jupiter = new PlanetAge(20);
    jupiter.jupiterAge();
    expect(jupiter.jupiterEdad).toEqual(4);
  });

  test("Returns remaining years till life expectancy age is reached", () => {
    let venus = new PlanetAge(20);
    venus.venusAge();
    venus.venusLife();
    expect(venus.venusExpect).toEqual(66);
  })

  test("Returns years lived after life expectancy", () => {
    let venus = new PlanetAge(80);
    venus.venusAge();
    venus.venusLife();
    expect(venus.venusExpect).toEqual(29);
  })
});