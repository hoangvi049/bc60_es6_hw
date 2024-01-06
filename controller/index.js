import Student from "../models/Student.js";
import ListPerson from "../models/ListPerson.js";
import Employee from "../models/Employee.js";
const getEle = (id) => document.getElementById(id);
const listPerson = new ListPerson();
getEle("loai").addEventListener("change", () => {
  const type = getEle("loai").value;
  switch (type) {
    case "0":
      getEle("empStatus").style.display = "flex";
      getEle("stuStatus").style.display = "none";

      break;
    case "1":
      getEle("stuStatus").style.display = "flex";
      getEle("empStatus").style.display = "none";
      break;
  }
});

const getInfor = () => {
  const type = getEle("loai").value;
  const _id = getEle("id").value;
  const _name = getEle("name").value;
  const _email = getEle("email").value;
  const _type = getEle("loai").value;
  const _days = getEle("days").value;
  const _salary = getEle("salary").value;
  const _math = getEle("math").value;
  const _phys = getEle("phys").value;
  const _chem = getEle("chem").value;
  switch (type) {
    case "0":
      const employee = new Employee(_id, _name, _email, _type, _days, _salary);
      listPerson.addUser(employee);
      break;
    case "1":
      const student = new Student(
        _id,
        _name,
        _email,
        _type,
        _math,
        _phys,
        _chem
      );
      listPerson.addUser(student);
      break;
  }
};
getEle("btnThemUser").onclick = function () {
  getInfor();
};
