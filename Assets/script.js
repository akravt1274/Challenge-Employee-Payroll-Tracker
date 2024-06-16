// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  
  // initializing empty array to store employee data
  let employeesArray = [];
  
  // using do-while loop to add employee data till user clicks Cancel on "confirm" promt
  do {   
    //getting user input for first name by using prompt() method
    let firstName = prompt("Enter first name:");
    //breaking out from the function if user cancels or if there is no input
    if (firstName === null || firstName === '') {
      break;
    }

    //getting user input for last name by using prompt() method
    let lastName = prompt("Enter last name:");
    //breaking out from the function if user cancels or if there is no input
    if (lastName === null || lastName === '') { 
      break; 
    }

    //getting user input for salary by using prompt() method
    let salary = prompt("Enter salary:");

    //breaking out from the function if user cancels or if there is no input
    if (salary === null || salary === '') {
      break;
    }
    else {
      //validating if salary input is of type Number by using isNaN() method
      if (isNaN(Number(salary))) {
        salary = 0; // setting salary to $0 if input is not a number
      }
      else {
        salary = Number(salary); 
        //console.log(salary);
      }
    }
    //pushing entered data into employee array 
    employeesArray.push(
      {"firstName": firstName, "lastName": lastName, "salary": salary}
     ); 
        
    //getting user input to continue or cancel by using confirm() method
    result = confirm("Do you want to add another employee?");
    
  } while (result);
  //returing added employees as an array objects
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  
  if (employeesArray.length === 0) {
    return;
  }
  else {
    let totalSalary = 0;

    //going through the employee array and getting salary for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      totalSalary += employeesArray[i].salary; //calculating total salary
    }
    //calculating average salary by dividing total salary by number of employees
    const averageSalary = totalSalary / employeesArray.length;
    console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${(Math.trunc(averageSalary)).toLocaleString("en-US", { style: "currency", currency: "USD" })}.`);
  }
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  if (employeesArray.length === 0) {
    return;
  }
  else {
    //selecting random employee using Math.random() method, and Math.floor() method to round down to its nearest integer  
    let rndInt = Math.floor((Math.random() * employeesArray.length));
    console.log(`Congratulations to ${employeesArray[rndInt].firstName} ${employeesArray[rndInt].lastName}, our random drawing winner!`);
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
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