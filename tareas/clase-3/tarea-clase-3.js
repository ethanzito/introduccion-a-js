// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

var nombreMio = 'ramon';
var nombreUsuario = prompt('Hola, cual es tu nombre?');
var nombreAmigo = prompt('Y el de tu amigo?');

if (nombreMio === nombreUsuario)
{ console.log('Hola ' + nombreUsuario + '! Tambien me llaman ' + nombreUsuario); }
else if (nombreMio === nombreAmigo) 
{ console.log('Hola ' + nombreUsuario + '! Me llamo igual que tu amigo ' + nombreAmigo); }
else console.log('Hola ' + nombreUsuario + '!');

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

var edadMia = 20;
var edadUsuario = Number(prompt('Hola, que edad tienes?'));

if (edadMia < edadUsuario) console.log('Oh sos mayor que yo!');
if (edadMia > edadUsuario) console.log('Oh sos menor que yo!');
if (edadMia === edadUsuario) console.log('Tenes la misma edad que yo!');

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

var poseeDocumento = prompt('Hola, posee documento?');

if (poseeDocumento === 'si') {
    var edadUsuario = Number(prompt('Que edad tienes?'));
    if (edadUsuario >= 18) console.log('Puedes pasar'); 
    else if (edadUsuario < 18) console.log('No puedes entrar');     
    else console.log('No te entiendo'); 
    }
else if (poseeDocumento === 'no') console.log('No puedes entrar'); 
else console.log('No te entiendo');
