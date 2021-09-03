export class Age {
  constructor(edad){
    this.edad = edad;
  }
}
export class Venus extends Age {
  constructor(edad) {
    super(edad);
    this.venusEdad = "";
  }
}