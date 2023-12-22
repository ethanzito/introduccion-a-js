document.querySelector('#calculo').onclick = function() {
    const $numeros = document.querySelectorAll('.numero');
    
    document.querySelector('#mostrarPromedio').innerText = promedio($numeros);
    document.querySelector('#mostrarMayor').innerText = mayorNumero($numeros);
    document.querySelector('#mostrarMenor').innerText = menorNumero($numeros);

    return false;
}

function promedio($numeros) {
    let i = 0;
    let total = 0;
    
    while (i < $numeros.length) {
        total += Number($numeros[i].value);

        i++;
    }

    return Math.round(total / $numeros.length);
}

function mayorNumero($numeros) {
    let i = 0;
    let mayor = 0;

    while (i < $numeros.length) {

        if (mayor < Number($numeros[i].value)) {
            mayor = Number($numeros[i].value);
        }

        i++
    }

    return mayor;
}

function menorNumero($numeros) {
    let i = 0;
    let menor = mayorNumero($numeros);

    while (i < $numeros.length) {

        if (menor > Number($numeros[i].value)) {
            menor = Number($numeros[i].value);
        }

        i++
    }

    return menor;
}

function igualNumero($numeros) {
    let i = 0;
    let igual = 0;

    while (i < $numeros.length) {

        if (igual == Number($numeros[i].value)) {
            igual = Number($numeros[i].value);
        }

        i++
    }

    return igual;
}

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
