// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let i = 3; i < 22; i++) {
    console.log('Ejercicio 1: ' + i);
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

let i = 10;

while (i > 0) {
    console.log('Ejercicio 2: ' + i);
     i--;
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

let n = 1;

while (n < 50) {
    if (n % 3 === 0 && n % 5 === 0) console.log(`${n} es multiplo de 3 y 5: fizzbuzz`) 
    else if (n % 5 === 0) console.log(`${n} es multiplo de 5: buzz`)
    else if (n % 3 === 0) console.log(`${n} es multiplo de 3: fizz`)
    else console.log(`${n}`)
    n++;
}

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

let r = 0
let j = 0;
let numerosArray = [1,2,3,4,5];

while (j < numerosArray.length) {
    r += numerosArray[j];
    j++;
}

function promedio() {
    return r / numerosArray.length;
}

console.log('El promedio de todos los numeros en el array es: ' + promedio());