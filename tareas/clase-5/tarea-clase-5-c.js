// 3)

document.querySelector('#calcular').onclick = function() {
  let i = 1;
  let totalHoras = 0;
  let totalMinutos = 0;
  let totalSegundos = 0;

  while (i <= 5) {
    $Horas = Number(document.querySelector(`#video-clase-${i}-hora`).value);
    $Minutos = Number(document.querySelector(`#video-clase-${i}-minuto`).value);
    $Segundos = Number(document.querySelector(`#video-clase-${i}-segundo`).value);
    
    totalHoras += $Horas;
    totalMinutos += $Minutos;
    totalSegundos += $Segundos;
    
    i++
  }

  minutosEnHoras = Math.floor(totalMinutos / 60);
  minutos = totalMinutos % 60;

  segundosEnMinutos = Math.floor(totalSegundos /60);
  segundos = totalSegundos % 60;

  const mensajeTotal = document.querySelector('#total-videos'); 
  
  mensajeTotal.innerText = (totalHoras + minutosEnHoras) + ' hr : ' + (minutos + segundosEnMinutos) + ' min : ' + segundos + " seg";

  return false;
}

//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.