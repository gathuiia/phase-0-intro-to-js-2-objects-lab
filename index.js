// Write your solution in this file!

const employee = {
    name : "Ian",
    streetAdress : "11 Westlands"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updEmployee = {...employee};
    updEmployee[key] = value;
    return updEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const delEmployee = {...employee};
    delete delEmployee[key];
    return delEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}