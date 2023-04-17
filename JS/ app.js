'use strict';



let Employees = [];
let netSalary;
let form = document.getElementById('add-Employee');



form.addEventListener('submit', addNewEmployee);


//constructor
function Employee(fullName, department, level, imageURL) {
    this.empId = generateEmployeeID();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    if (imageURL == null || imageURL == '') {
        this.imageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Crystal_personal.svg/640px-Crystal_personal.svg.png';
    }
    else {
        this.imageURL = imageURL;
    }

    this.salary = this.calSalary();

    Employees.push(this);
}

//enerateEmployeeID Function
function generateEmployeeID() {
    let id = Math.floor(Math.random() * 9000) + 1000;
    return id;
}


//calculating salary and net salary
Employee.prototype.calSalary = function () {
    if (this.level == 'Senior') {
        this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    }
    else if (this.level == 'Mid-Senior') {
        this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    }
    else if (this.level == 'Junior') {
        this.salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    }

    netSalary = this.salary - (this.salary * 0.075);
    this.salary = netSalary;
    return this.salary;
}




//rendering function
function showEmploye() {
    const container = document.getElementById('container');

    getAllEmployees();

    if (Employees == null) {
        Employees = [];
    }

    for (let i = 0; i < Employees.length; i++) {
        const divEl = document.createElement('div');
        divEl.style.width = '25%';
        divEl.style.backgroundColor = "green";
        divEl.style.margin = "20px"
        divEl.style.height = "auto";
        divEl.style.display = "inline-block";
        container.appendChild(divEl);

        const imgEl = document.createElement('img');
        imgEl.src = Employees[i].imageURL;
        imgEl.alt = "Personal image";
        imgEl.style.width = "80%";
        imgEl.style.height = "180px";
        imgEl.style.margin = "25px";
        imgEl.style.marginBottom = "10px";
        imgEl.style.textAlign = "center";
        divEl.appendChild(imgEl);

        const pEl1 = document.createElement('p');
        pEl1.textContent = `Name: ${Employees[i].fullName} - ID: ${Employees[i].empId}`
        pEl1.style.marginTop = "0";
        pEl1.style.fontSize = "15px";
        pEl1.style.textAlign = "center";
        divEl.appendChild(pEl1);

        const pEl2 = document.createElement('p');
        pEl2.textContent = `Department: ${Employees[i].department} - Level: ${Employees[i].level}`
        pEl2.style.fontSize = "15px";
        pEl2.style.textAlign = "center";
        divEl.appendChild(pEl2);

        const pEl3 = document.createElement('p');
        pEl3.textContent = `${Employees[i].salary}`
        pEl3.style.fontSize = "15px";
        pEl3.style.textAlign = "center";
        pEl3.style.marginBottom = "15px";
        divEl.appendChild(pEl3);
    }



}




function addNewEmployee(event) {
   // event.preventDefault();
    let name = event.target.fullName.value;
    let department = event.target.Departments.value;
    let level = event.target.Levels.value;
    let imageURL = event.target.imageURL.value;
    let newEmployee = new Employee(name, department, level, imageURL);

    let jsonEmployee = JSON.stringify(Employees);
    localStorage.setItem('allEmployees', jsonEmployee);

    //  newEmployee.calSalary();

}




function getAllEmployees() {
    let jsonArr = localStorage.getItem('allEmployees');
    let dataFormStorage = JSON.parse(jsonArr);
    Employees = dataFormStorage;
}


console.log(Employees);
showEmploye();


/*employees information
const employees = [
    new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior'),
    new Employee(1001, 'Lana Ali', 'Finance', 'Senior'),
    new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior'),
    new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior'),
    new Employee(1004, 'Omar Zaid', 'Development', 'Senior'),
    new Employee(1005, 'Rana Saleh', 'Development', 'Junior'),
    new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior')
  ];
  */
/*
//rendering objects
for (let i = 0; i < Employees.length; i++) {
    employees[i].calSalary();
    employees[i].showEmploye();
}

*/
