export class Age {
  constructor(edad){
    this.edad = edad;
    this.lifeExpectancy = 78;
  }
}

export class PlanetAge extends Age { 
  constructor(edad) {
    super(edad);
    this.venusEdad = 0;
    this.venusExpect = 0;
    this.mercuryEdad = 0;
    this.marsEdad = 0;
    this.jupiterEdad = 0;
  }
  venusAge() {
    if (this.edad > 0){
      this.venusEdad = (Math.floor(this.edad * .62));
    } 
  }
  venusLife() {
    if (this.lifeExpectancy > this.venusEdad) {
      this.venusExpect = (Math.floor(this.lifeExpectancy - this.venusEdad));
    } else {
      this.venusExpect = (Math.floor(this.venusEdad - this.lifeExpectancy));
    }
  }

  mercuryAge() {
    if (this.edad > 0){
      this.mercuryEdad = (Math.floor(this.edad * .24));
    }
  }
  marsAge() {
    if (this.edad > 0){
      this.marsEdad = (Math.floor(this.edad * .24));
    }
  }
  jupiterAge() {
    if (this.edad > 0){
      this.jupiterEdad = (Math.floor(this.edad * .24));
    } 
  }
}
  
  




