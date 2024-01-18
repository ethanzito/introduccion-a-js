document.getElementById('botonCrearMiembro').onclick = function() {
    agregarMiembro();

    document.getElementById('botonReset').classList.remove('oculto');
    document.getElementById('botonCalcularEdad').classList.remove('oculto');

    return false;
}

document.getElementById('botonEliminarMiembro').onclick = function() {
    const $miembros = document.getElementsByClassName('miembros');

    if ($miembros.length > 0) {
        $miembros[0].remove();
    }

    return false;
}

document.getElementById('botonCalcularEdad').onclick = function() {
    const $valorEdades = document.getElementsByClassName('valorEdades');
    const valorEdades = obtenerValorMiembros($valorEdades)
    
    document.getElementById('mensajeValor').innerText = 'Salario Anual Mayor: ' + numeroMayor(valorEdades) + ' / Menor: ' +  numeroMenor(valorEdades) + ' / Promedio: ' + numeroPromedio(valorEdades) + ' / Promedio Mensual: ' + numeroPromedioMensual(valorEdades);

    document.getElementById('botonReset').classList.remove('oculto');
    document.getElementById('botonCalcularEdad').classList.add('oculto');
    document.getElementById('botonCrearMiembro').classList.add('oculto');
    document.getElementById('botonEliminarMiembro').classList.add('oculto');

    apagarCuadrosEdades($valorEdades, true);

    return false;
}

document.getElementById('botonReset').onclick = function() {
    const miembros = document.getElementsByClassName('miembros');

    while (0 < miembros.length) {
        miembros[0].remove();
    }
    
    document.getElementById('botonReset').classList.add('oculto');
    document.getElementById('botonCalcularEdad').classList.add('oculto');
    document.getElementById('listaMiembros').classList.remove('oculto');
    document.getElementById('botonCrearMiembro').classList.remove('oculto');
    document.getElementById('botonEliminarMiembro').classList.remove('oculto');

    document.getElementById('mensajeValor').innerText = '';

    return false;
}

function agregarMiembro() {
    const label = document.createElement('label');

    const textNodeLabel = document.createTextNode(`Miembro: `);
    label.appendChild(textNodeLabel);

    const input = document.createElement('input');
    input.setAttribute('type','number');
    input.setAttribute('class','valorEdades');

    const div = document.createElement('div');
    div.setAttribute('class','miembros');

    div.appendChild(label);
    div.appendChild(input);

    document.getElementById('listaMiembros').appendChild(div);
}

function numeroMayor(valorEdades) {
    let total = valorEdades[0];
    let i = 1;
    
    while (i < valorEdades.length) {
        if (total < valorEdades[i]) {
            total = valorEdades[i];
        }

        i++;
    }

    return total;
}

function numeroMenor(valorEdades) {
    let total = valorEdades[0];
    let i = 1;
    
    while (i < valorEdades.length) {
        if (total > valorEdades[i]) {
            total = valorEdades[i];
        }

        i++
    }

    return total;
}

function numeroPromedio(valorEdades) {
    let total = 0;
    let i = 0;
    
    while (i < valorEdades.length) {
        total += valorEdades[i];

        i++;
    }

    return Math.round(total / valorEdades.length);
}

function numeroPromedioMensual(valorEdades) {
    let total = 0;
    let i = 0;
    
    while (i < valorEdades.length) {
        total += valorEdades[i];

        i++;
    }

    return Math.round((total / 12) / valorEdades.length);
}

function apagarCuadrosEdades($valorEdades, on) {
    let i = 0;
    
    while (i < $valorEdades.length) {
        if (on == true) $valorEdades[i].setAttribute('disabled','');

        if (on == false) $valorEdades[i].removeAttribute('disabled');

        i++;
    }
}

function obtenerValorMiembros($valorEdades) {
    const edades = [];
    for (let i = 0; i < $valorEdades.length; i++) {
        edades.push(Number($valorEdades[i].value));
    }

    return edades;
}

/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/



