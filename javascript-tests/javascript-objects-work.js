var person = {
    firstName: 'George',
    lastName: 'Washington',
    fullName: 'George Washington',
};

console.log(person);

var calculator = {
    operand01: -1,
    operand02: -1,
}

console.log(calculator);

function divider(title) {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
}

divider('Calculator');
calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;
console.log('operand01 is the length of firstName', calculator.operand01)
console.log('operand02 is the length of lastName', calculator.operand02);

var calculator = {
    add: function() {
        console.log("Add length of first and lastNames: " + calculator.operand01 + calculator.operand02);
    },
    subtract: function() {
        console.log("Subtract length of first and lastNames: " + calculator.operand01 - calculator.operand02);
    }
}
calculator.add();
calculator.subtract();

calculator.multiply = (calculator.operand01, calculator.operand02)
    return calculator.operand01 * calculator.operand02