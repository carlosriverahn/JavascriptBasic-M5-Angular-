'use strict'
// Exercici 1:
console.log("Hola mundo!");

// Exercici 2:
alert("Me llamo Carlos!");

// Exercici 3:
let name = "Carlos";
let lastName = "Rivera";
console.log(`Hola mi nombre es ${name} ${lastName}`);

// Exercici 4:
let num1 = 45;
let num2 = 60;
console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`);

// Exercici 5:
let nota_examen = 5;
if (nota_examen <= 5) {
    console.log(`Tu nota es ${nota_examen} has reprobado la materia`);
} else {
    console.log(`Tu nota es ${nota_examen} has aprobado la materia`);
}

// Exercici 6:
let text1 = "Tinc un cotxe de color verde";
text1 = text1.replace(/verde/g, "blau");
text1 = text1.replace(/o/g, "u");
console.log(text1);

// Exercici 7:
const arrayObjetes = ['taula', 'cadira', 'ordinador', 'libreta']
let i = 0;
for (i = 0; i < arrayObjetes.length; i++) {
    console.log(`L'objete ${arrayObjetes[i]} esta a la  posicio ${[i]}`);
}

// Exercici 8:
function Calculate() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let resultado;
    switch (operator) {
        case "+":
            resultado = suma(number1, number2);
            break;
        case "-":
            resultado = resta(number1, number2);
            break;
        case "*":
            resultado = multiplicacion(number1, number2);
            break;
        case "/":
            resultado = division(number1, number2);
            break;
        default:
            alert("Operador invalido intente de nuevo");
            resultado = ""
            break;
    }
    document.getElementById("data").innerHTML = `El resultado es ${resultado}`;
}

function suma(number1, number2) {
    let resultado
    resultado = number1 + number2;
    return resultado;
}

function resta(number1, number2) {
    let resultado
    resultado = number1 - number2;
    return resultado;
}

function multiplicacion(number1, number2) {
    let resultado
    resultado = number1 * number2;
    return resultado;
}

function division(number1, number2) {
    let resultado
    resultado = number1 / number2;
    return resultado;
}