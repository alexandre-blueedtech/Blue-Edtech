let prompt = require("prompt-sync")();

function employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
  this.printInfo = function () {
    console.log(name);
    console.log(position);
    console.log(salary);
  };
}

let validation = "y";
let employeeList = [];

while (validation === "y") {
  console.log("Type employee information: ");
  employeeList.push(
    new employee(
      prompt("Employee's name: "),
      prompt("Employee's position: "),
      +prompt("Employee's salary: ")
    )
  );
  validation = prompt(
    "Do you want to add new employee? Type 'y' for yes, or anything for no: "
  ).toLowerCase();
}

for (const emp of employeeList) emp.printInfo();

function increaseSalary(position, tax) {
  for (const value of employeeList) {
    if (value.position === position) {
      value.salary += value.salary * (tax/100);
      console.log(`${value.name}'s salary is updated to ${value.salary}!`);
    }
  }
}

increaseSalary(
  prompt("Type position you want to give salary increase: "),
  +prompt("Type the increase tax: ")
);
