// a) crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

var anioActual = 2023;
var anioNacido = Number(prompt('cuando naciste?'));
function edadUsuario(anioActual, anioNacido) {
    return anioActual - anioNacido;
}
console.log('Tu edad es ' + edadUsuario(anioActual, anioNacido));

// b) Preguntar el salario anual y calcular el salario mensual

var salarioAnual = Number(prompt('cual es tu salario anual?'));
function salarioMensual(salarioAnual) {
    return salarioAnual / 12;
}

console.log('Por mes ganas $' + salarioMensual(salarioAnual));

// c) Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

var salarioPorMes = Number(prompt('Cuanto ganas mensualmente?'));

function calcularSalarioAnual(salarioPorMes) {
    return parseInt(salarioPorMes * 12);
}

function calcularSalarioDiario(salarioPorMes) {
    return parseInt(salarioPorMes / 30);
}

function calcularSalarioSemanal(salarioPorMes) {
    return parseInt(salarioPorMes / 4);
}

function calcularSalarioPorHora(salarioPorMes) {
    return parseInt((salarioPorMes / 30) / 24);
}

console.log('Anualmente ganas $' + calcularSalarioAnual(salarioPorMes));
console.log('Diariamente ganas $' + calcularSalarioDiario(salarioPorMes));
console.log('Semanalmente ganas $' + calcularSalarioSemanal(salarioPorMes));
console.log('Por hora ganas $' + calcularSalarioPorHora(salarioPorMes));

/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();
*/

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/
