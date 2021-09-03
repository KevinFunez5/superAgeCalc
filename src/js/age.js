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
    this.mercuryExpect = 0;
    this.marsEdad = 0;
    this.marsExpect = 0;
    this.jupiterEdad = 0;
    this.jupiterExpect = 0;
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
  mercuryLife() {
    if (this.lifeExpectancy > this.mercuryEdad) {
      this.mercuryExpect = (Math.floor(this.lifeExpectancy - this.mercuryEdad));
    } else {
      this.mercuryExpect = (Math.floor(this.mercuryEdad - this.lifeExpectancy));
    }
  }

  marsAge() {
    if (this.edad > 0){
      this.marsEdad = (Math.floor(this.edad * 1.88));
    }
  }
  marsLife() {
    if (this.lifeExpectancy > this.marsEdad) {
      this.marsExpect = (Math.floor(this.lifeExpectancy - this.marsEdad));
    } else {
      this.marsExpect = (Math.floor(this.marsEdad - this.lifeExpectancy));
    }
  }

  jupiterAge() {
    if (this.edad > 0){
      this.jupiterEdad = (Math.floor(this.edad * 11.86));
    } 
  }

  jupiterLife() {
    if (this.lifeExpectancy > this.jupiterEdad) {
      this.jupiterExpect = (Math.floor(this.lifeExpectancy - this.jupiterEdad));
    } else {
      this.jupiterExpect = (Math.floor(this.jupiterEdad - this.lifeExpectancy));
    }
  }
}
  
  




