'use strict';

let Employees=JSON.parse(localStorage.getItem('allEmployees'));

let Departments=['Administration','Marketing','Development','Finance'];
let totalSalary=[0,0,0,0];
let sumOfTotalSalary=0;
let numberOfEmployees=[0,0,0,0];
let sumOfnumberOfEmployees=0;
let avg=[0,0,0,0];
let sumOfAvg=0;



function Calculation()
{
for(let i=0;i<Employees.length;i++)
{
    if(Employees[i].department==Departments[0])
    {
        totalSalary[0]+=Employees[i].salary;
        numberOfEmployees[0]+=1;
    }
    else if(Employees[i].department==Departments[1])
    {
        totalSalary[1]+=Employees[i].salary;
        numberOfEmployees[1]+=1;
    }
    else if(Employees[i].department==Departments[2])
    {
        totalSalary[2]+=Employees[i].salary;
        numberOfEmployees[2]+=1;
    }
    else if(Employees[i].department==Departments[3])
    {
        totalSalary[3]+=Employees[i].salary;
        numberOfEmployees[3]+=1;
    }
}

for(let i=0;i<Departments.length;i++)
{
    if(numberOfEmployees[i]!=0)
    {
        avg[i]=totalSalary[i]/numberOfEmployees[i];
    }
    else
    {
        avg[i]=0;
    }
}



for(let i=0;i<Departments.length;i++)
{
    sumOfTotalSalary+=totalSalary[i];
    sumOfnumberOfEmployees+=numberOfEmployees[i];
    sumOfAvg+=avg[i];
}


}









function render(){
    let sec = document.getElementById('accountingMain');


    // Step5:
    if(Employees == null){
        Employees = [];
    }

    Calculation();

    let tableE=document.createElement('table');
    tableE.style.textAlign="center";
    sec.appendChild(tableE);

     let thEl = document.createElement('tr');
     tableE.appendChild(thEl);

 let tdEl1 = document.createElement('th');
 tdEl1.textContent = "Department Name";
 thEl.appendChild(tdEl1);

 let tdEl2 = document.createElement('th');
 tdEl2.textContent = "# of Employees";
 thEl.appendChild(tdEl2);

 let tdEl3 = document.createElement('th');
 tdEl3.textContent = "Total Salary";
 thEl.appendChild(tdEl3);


 let tdEl4 = document.createElement('th');
 tdEl4.textContent = "Average Salary";
 thEl.appendChild(tdEl4);

 for(let i=0;i<Departments.length;i++){
     let trEl1 = document.createElement('tr');
     tableE.appendChild(trEl1);

     let tdEl1 = document.createElement('td');
     tdEl1.textContent = Departments[i];
     trEl1.appendChild(tdEl1);

     let tdEl2 = document.createElement('td');
     tdEl2.textContent = numberOfEmployees[i];
     trEl1.appendChild(tdEl2);

     let tdEl3 = document.createElement('td');
     tdEl3.textContent = totalSalary[i];
     trEl1.appendChild(tdEl3);

     let tdEl4 = document.createElement('td');
     tdEl4.textContent = avg[i];
     trEl1.appendChild(tdEl4)
 }


 let thE3 = document.createElement('tr');
     tableE.appendChild(thE3);

 let tdEl11 = document.createElement('td');
 tdEl11.textContent = "Total";
 tdEl11.style.fontSize="25px";
 thE3.appendChild(tdEl11);

 let tdEl22 = document.createElement('td');
 tdEl22.textContent = sumOfnumberOfEmployees;
 thE3.appendChild(tdEl22);

 let tdEl33 = document.createElement('td');
 tdEl33.textContent = sumOfTotalSalary;
 thE3.appendChild(tdEl33);


 let tdEl44 = document.createElement('td');
 tdEl44.textContent = sumOfAvg;
 thE3.appendChild(tdEl44);
}



render();

