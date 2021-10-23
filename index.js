const employee = {
    "name": "Alice",
    "streetAddress": "123 Wonderland Ave"
} 

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee = {...employee}
    newEmployee [key]=value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee [key]=value
    return employee
}

function deleteFromEmployeeByKey(employee,key,value){
    const lessEmployee = {...employee}
    lessEmployee[key]=value
    return lessEmployee
}

const newEmployee = deleteFromEmployeeByKey (lessEmployee,key,value)

function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    employee [key]=value
    return employee
}

const newerEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value)