// Solicitamos el nombre del alumno
let nombre = prompt("Por favor, ingresa el nombre del alumno:");

let suma = 0;
let nota = 0;
let promedio = 0;
let estado = "";

// Usamos un bucle for para solicitar las 4 notas
for (let i = 1; i <= 4; i++) {
  nota = parseFloat(prompt(`Por favor, ingresa la nota ${i} del alumno:`));
  suma += nota;
}

// Definimos una función para calcular el promedio
function calcularPromedio(suma, cantidadNotas) {
  return suma / cantidadNotas;
}

promedio = calcularPromedio(suma, 4);

// Definimos una función para verificar si el alumno aprobó o reprobó usando if
function verificarAprobacion(promedio) {
  if (promedio >= 4.0) {
    return "Aprobó";
  } else {
    return "Reprobó";
  }
}

estado = verificarAprobacion(promedio);

// Imprimimos los resultados en la consola
console.log(`El promedio de ${nombre} es ${promedio}`);
console.log(`El alumno ${estado}`);