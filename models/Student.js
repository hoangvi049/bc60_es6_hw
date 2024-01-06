import Person from "./Person.js";

export default class Student extends Person {
  constructor(_math, _phys, _chem) {
    super();
    this.math = _math;
    this.phys = _phys;
    this.chem = _chem;
    this.average = 0;
  }

  avergeMark() {
    this.average =
      (Number(this.math) + Number(this.phys) + Number(this.chem)) / 3;
  }
}
