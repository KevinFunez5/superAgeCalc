export class Age {
  constructor(edad){
    this.edad = edad;
  }
}
export class Venus extends Age {
  constructor(edad) {
    super(edad);
    this.venusEdad = 0;
  }

  venusAge() {
    if (this.edad > 0){
      this.venusEdad = (Math.floor(this.edad * .62));
    }
  }
}
