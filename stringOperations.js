/** 1.Take a file with values like EmpName, EmpAge,Designamtion,Address,Phone number
 * 2.Perform String operations - Get list of only First name, List of Last name, Age, Same age people and their respective count
  */


const EmployeeDetails ={
    employees : [
    {fristName:"Shalu",lastName:"Dixit",Age:"44",Designation:"Frontend Dev",Address:"D.H Collijan"},
    {fristName:"Jinx",lastName:"luper",Age:"38",Designation:"Senior Frontend Dev",Address:"D.H Collijan"},
    {fristName:"Pam",lastName:"Beasely",Age:"48",Designation:"QA",Address:"PC Boutensalan"},
    {fristName:"Michale",lastName:"Scott",Age:"50",Designation:"Manager",Address:"PC Boutensalan"},
    {fristName:"Jim",lastName:"Halpert",Age:"50",Designation:"Manager",Address:"PC Boutensalan"},
    {fristName:"Dwight",lastName:"Schrute",Age:"50",Designation:"Manager",Address:"PC Boutensalan"},

]}

//Display all the employee Full name
EmployeeDetails.employees.forEach(employee =>{
    console.log(employee.fristName + " " + employee.lastName);
})

// Count the number of employees

const count = EmployeeDetails.employees.length;
console.log(`Number of employees: ${count}`);

//Display name of the employee with age>40
console.log("Emplyoee age more than 40:");
EmployeeDetails.employees.forEach(ageGroup =>{
    if(ageGroup.Age>40){
        console.log(` ${ageGroup.fristName} ${ageGroup.lastName}`);
    }


    //Display the name of the employees with same age with count of each employee
    const groupedByAge = EmployeeDetails.employees.reduce((result, employee) => {
        const age = employee.Age
        const fullName = `${employee.fristName} ${employee.lastName}`;
    
        if (!result[age]) {
            result[age] = { employees: [], count: 0 };
        }
        result[age].employees.push(fullName);
        result[age].count += 1;
    
        return result;
    }, {});
    
    // Display grouped results
    for (const [age, group] of Object.entries(groupedByAge)) {
        console.log(`Age: ${age}`);
        console.log(`Employees: ${group.employees.join(", ")}`);
        console.log(`Count: ${group.count}`);
        console.log("-------------------");
    }
})


