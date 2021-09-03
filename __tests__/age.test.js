import { Age, Venus, Mercury } from "../src/js/age";

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
});