import Person from "./Person.js";

export default class Employee extends Person {
  constructor(_days, _salary) {
    super();
    this.days = _days;
    this.salary = _salary;
    this.income = 0;
  }
  salryCal() {
    this.income = Number(this.days) * Number(this.salary);
  }
}
