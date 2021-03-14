//! Exercise 1

/*

function displayHelloWorld() {
    alert("Hello World!");
}

displayHelloWorld();
displayHelloWorld();
displayHelloWorld();

*/

// Exercise 2

//* a
/*

function displayName(name) {
    alert(`Hello ${name}!`);
}

displayName("John");

*/

//*b

/*
function areaCalculator(num1, numm2) {
    let area = num1 * numm2;
    alert(`The area is ${area}`);
}


areaCalculator(2,3);

*/

//*c

/*
function calculator(num1,num2,operator) {

if (operator == '*') {
    let operation = num1 * num2; 
    alert(operation);
}
else if (operator == '+') {
    let operation = num1 + num2;
    alert(operation);
}
else if (operator == '-') {
    let operation = num1 - num2; 
    alert(operation);
}
else if (operator == '/') {
    if (num2 == 0){
        alert('This division is impossible.')
    }
    else{
        let operation = num1 / num2; 
        alert(operation);
    }

}
else{
    alert('Please insert a valid operator')
}
}

let num1 = parseInt(prompt("Please insert a number."));
let num2 = parseInt(prompt("Please insert another number."));
let operator = prompt("Please insert an operator.");

calculator(num1,num2,operator)
*/

//* d

function BMIcalculator(calculatedBMI) {

    if (calculatedBMI < 18,5) {
        alert(`Your BMI is ${calculatedBMI}, which puts you in the cathegory`);
    }
    else if (calculatedBMI == '+') {
        alert(`Your BMI is ${calculatedBMI}, which puts you in the cathegory`);
    }
    else if (calculatedBMI == '-') { 
        alert(`Your BMI is ${calculatedBMI}, which puts you in the cathegory`);
    }
    else if (calculatedBMI == '/') {
        alert(`Your BMI is ${calculatedBMI}, which puts you in the cathegory`);
    }
    else if (calculatedBMI == '/') {
        alert(`Your BMI is ${calculatedBMI}, which puts you in the cathegory`);
    }
    else{
        alert(`Please insert a valid operator`)
    }
    }
    
    let height = parseInt(prompt("Please insert your height (cm)."));
    let weight = parseInt(prompt("Please insert your weight (kg). "));
    let calculatedBMI = weight / height * height;
    
    BMIcalculator(calculatedBMI)

