import { Age, Venus } from "../src/js/age";

//Edad is age in spanish

describe("Age", () => {

  test("Edad should return 20", () => {
    let age = new Age(20);
    expect(age.edad).toEqual(20);
  });

  test("Returns edad in Venus years", () => {
    let venus = new Venus(20);
    expect(venus.venusEdad).toEqual(12);
  })
});