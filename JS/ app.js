'use strict';

let netSalary;



//constructor
function Employee(empId,fullName,department,level,salary){
    this.empId=empId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imageURL=`./assets/${this.fullName}.png`;
    this.salary=salary;
}



//calculating salary and net salary
Employee.prototype.calSalary=function()
{
    if(this.level=='Senior')
    {
        this.salary=Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    }
    else if(this.level=='Mid-Senior')
    {
        this.salary=Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    }
    else if(this.level=='Junior')
    {
        this.salary=Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    }
    
    netSalary=this.salary-(this.salary*0.75);
}



//rendering function
Employee.prototype.showEmploye=function()
{
    document.write(`fullName: ${this.fullName} ,Salary: ${this.salary}<br>`);
}


//employees information
const employees = [
    new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior'),
    new Employee(1001, 'Lana Ali', 'Finance', 'Senior'),
    new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior'),
    new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior'),
    new Employee(1004, 'Omar Zaid', 'Development', 'Senior'),
    new Employee(1005, 'Rana Saleh', 'Development', 'Junior'),
    new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior')
  ];
  

//rendering objects
for (let i = 0; i < employees.length; i++) {
    employees[i].calSalary();
    employees[i].showEmploye();
}