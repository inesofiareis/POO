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

/*
function BMIcalculator(calculatedBMI) {

    if (calculatedBMI < 18,5) {
        alert(`Your BMI is ${calculatedBMI}, which puts you in the Bellow Weight cathegory`);
    }
    else if (calculatedBMI >= 18.5 && calculatedBMI =< 24.9) {
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
        alert(`Something went wrong.`)
    }
    }
    
    let height = parseInt(prompt("Please insert your height (cm)."));
    let weight = parseInt(prompt("Please insert your weight (kg). "));
    let calculatedBMI = weight / height * height;
    
    BMIcalculator(calculatedBMI)

*/

//* e

/*
function wordsInEcho(string,n) {
    let echo = Array(n+1).join(string);
    alert(echo);
    }
    
    let string = prompt("Please insert a string.");
    let n = parseInt(prompt("Please insert a number."));
    
    wordsInEcho(string,n);

*/

/*
function whatsInBetween(firstNumber, secondNumber) {
    numbers=[];
    for (let i = firstNumber; i < secondNumber; i++ ) {
        numbers.push(" "+ i);

        return numbers;
    }
    alert(`These are the numbers between ${firstNumber} and ${secondNumber}: ${numbers} `);
    }
    
    let firstNumber = parseInt(prompt("Please insert a number."));
    let secondNumber = parseInt(prompt("Please insert another number."));
    
    whatsInBetween(firstNumber,secondNumber);
*/

/*

function whatIsTheMin(2, 5){
    let minimum = Math.min(2,5);
    return minimum;
};


whatIsTheMin(2, 5);
alert(minimum);

*/

/* function multiplicationTable(multiNumber) {
    console.log(`This is ${multiNumber}'s multiplication table:`)
    for (let i = 1; i<=10; i++)
    console.log(`${i} x ${multiNumber} = ${i * multiNumber}`)
}

let multiNumber = parseInt(prompt("Please insert a number."));
multiplicationTable(multiNumber); */




/* function numbersSum(){
    let result = 0 //arguments é um objeto que permite aceder a estas cenas
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    alert(result);
}

numbersSum(4,8,10,12)
numbersSum(2,4,5) */

/* 
friendCounter("Inês", "Reis", "Bruna", "Diana", "Daniel");

function friendCounter(nome,apelido,amigos) {
    alert(`A ${nome} ${apelido} tem ${amigos.length - 2} amigos!`)
} */

/* let num1 = prompt("Please insert a number: ");
let num2 = prompt("Please insert another number: ");

min(num1,num2)


function min(a,b) {
    if (a>b) {
        alert (`O mínimo de ${a} e ${b} é ${b}`)
    }
    else if (b>a) {
        alert (`O mínimo de ${a} e ${b} é ${a}`)
    }
    else {
        alert (`Os números são iguais`)
    }
} */

/* let num1 = prompt("Please insert a number: ");
let num2 = prompt("Please insert another number: ");

pow(num1,num2)


function pow(a,b) {
    if (b < 1) {
        b = prompt("Por favor insira um número maior que 1")
        pow(a,b)
    }
    else{
        c = a**b;
        alert (`${a} elevado a ${b} é ${c}`)
    }
} */

