// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];

// Collect employee data
const collectEmployees = function () {
  let data = true;

  // TODO: Get user input to create and return an array of employee objects
  while (data) {
    const fName = prompt('First name:');
    const lName = prompt('Last name:');
    const salaryPrompt = prompt('Salary:');
    const salary = isNaN(parseInt(salaryPrompt)) ? 0 : parseInt(salaryPrompt);

    employeesArray.push({
      firstName: fName,
      lastName: lName,
      salary: salary
    });
    const addMore = confirm('Another one?')

    if (!addMore) {
      data = false;
    }
  }
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0
  for (let index = 0; index < employeesArray.length; index++) {
    totalSalary += employeesArray[index].salary;

};
const avgSalary = totalSalary / employeesArray.length;
console.log('The average salary is ' + avgSalary)
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomGrab = Math.floor(Math.random()* employeesArray.length);
  let randomEmployee = employeesArray[randomGrab].firstName;
  console.log('Winner! Congrats ' + randomEmployee)
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
