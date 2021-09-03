/* eslint-disable no-undef */
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
    expect(mars.marsEdad).toEqual(37);
  });

  test("Returns edad in Jupiter", () => {
    let jupiter = new PlanetAge(20);
    jupiter.jupiterAge();
    expect(jupiter.jupiterEdad).toEqual(237);
  });

  test("Returns remaining years till life expectancy age is reached on Venus", () => {
    let venus = new PlanetAge(20);
    venus.venusAge();
    venus.venusLife();
    expect(venus.venusExpect).toEqual(66);
  });

  test("Returns years lived after life expectancy on Venus", () => {
    let venus = new PlanetAge(77);
    venus.venusAge();
    venus.venusLife();
    expect(venus.venusExpect).toEqual(31);
  });

  test("Returns remaining years till life expectancy age is reached on Mercury", () => {
    let mercury = new PlanetAge(20);
    mercury.mercuryAge();
    mercury.mercuryLife();
    expect(mercury.mercuryExpect).toEqual(74);
  });
  test("Returns years lives after life expectancy on Mercury", () => {
    let mercury = new PlanetAge(77);
    mercury.mercuryAge();
    mercury.mercuryLife();
    expect(mercury.mercuryExpect).toEqual(60);
  });

  test("Returns remaining years till life expectancy age is reached on Mars", () => {
    let mars = new PlanetAge(20);
    mars.marsAge();
    mars.marsLife();
    expect(mars.marsExpect).toEqual(41);
  });
  test("Returns years lives after life expectancy on Mars", () => {
    let mars = new PlanetAge(80);
    mars.marsAge();
    mars.marsLife();
    expect(mars.marsExpect).toEqual(72);
  });

  test("Returns remaining years till life expectancy age is reached on jupiter", () => {
    let jupiter = new PlanetAge(5);
    jupiter.jupiterAge();
    jupiter.jupiterLife();
    expect(jupiter.jupiterExpect).toEqual(19);
  });
  test("Returns years lives after life expectancy on jupiter", () => {
    let jupiter = new PlanetAge(80);
    jupiter.jupiterAge();
    jupiter.jupiterLife();
    expect(jupiter.jupiterExpect).toEqual(870);
  });
});