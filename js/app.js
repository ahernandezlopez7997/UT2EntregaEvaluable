// Alumno: Alberto Hernández López
// 2º DAW
// Desarrollo de aplicaciones Web Entorno Cliente (DWEC)


// Ejercicio 1

function ejercicio1() {
  let frase = prompt("Introduce una frase de al menos 5 palabras:");
  while (frase.split(" ").length < 5) {
    alert("La frase debe tener al menos 5 palabras. Inténtalo de nuevo.");
    frase = prompt("Introduce una frase de al menos 5 palabras:");
  }

  // Contar caracteres no espacios
  let caracterSinEspacios = frase.replace(/\s+/g, "").length;
  console.log(`Número de caracteres sin espacios: ${caracterSinEspacios}`);

  // Sustituir vocales por asteriscos
  let fraseConAsteriscos = frase.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/gi, "*");
  console.log(`Frase con vocales sustituidas por asteriscos: ${fraseConAsteriscos}`);

  // Sustituir elementos pares por guion bajo
  let fraseConGuionesBajos = "";
  let contadorLetras = 0;

  for (let i = 0; i < frase.length; i++) {
    // Por pares entiendo sin considerar el 0.
    if (frase[i] === " ") {
      fraseConGuionesBajos += frase[i];
    } else {
      contadorLetras++;

      if (contadorLetras % 2 === 0) {
        fraseConGuionesBajos += "_";
      } else {
        fraseConGuionesBajos += frase[i];
      }
    }
  }
  console.log(`Frase con elementos pares sustituidos por guion bajo: ${fraseConGuionesBajos.trim()}`);
}

// Ejercicio 2

function ejercicio2() {
  let palabras = [];
  for (let i = 0; i < 7; i++) {
    let palabra = prompt(`Introduce la palabra ${i + 1}:`);
    while (palabra.length < 1) {
      alert("La palabra no puede estar vacía. Inténtalo de nuevo.");
      palabra = prompt(`Introduce la palabra ${i + 1}:`);
    }
    palabras.push(palabra);
  }

  // Ordenar palabras alfabéticamente (ignorando mayúsculas y minúsculas)
  palabras.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  console.log(`Palabras ordenadas alfabéticamente: ${palabras.join(", ")}`);

  let palabraBuscar = prompt("Introduce una palabra para buscar:");
  if (palabras.includes(palabraBuscar.toLowerCase())) {
    console.info(`La palabra "${palabraBuscar}" está en el listado.`);
  } else {
    palabras.push(palabraBuscar);
    palabras.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log(`Palabras ordenadas alfabéticamente (actualizado): ${palabras.join(", ")}`);
  }

// function ejercicio2() {
//   let palabras;
//
//   prompt("Introduce 7 palabras variadas con Mayusculas y algunas con 4 letras o menos");
//   const contador = prompt().split(" ");
//
//   alert();

}

// Ejercicio 3

function ejercicio3() {
  // Creamos un objeto que almacene los estudiantes y sus notas.
  let estudiantes = {
    "Juan": 8.5,
    "Maria": 9.2,
    "Pedro": 7.8,
    "Ana": 9.5
  };

  // Pedimos al usuario que introduzca el nombre de un estudiante.
  let nombreEstudiante = prompt("Introduce el nombre de un estudiante:");

  // Buscamos el estudiante en el objeto.
  if (estudiantes[nombreEstudiante]) {
    // Si el estudiante está registrado, mostramos su nota.
    alert(`La nota de ${nombreEstudiante} es ${estudiantes[nombreEstudiante]}`);
  } else {
    // Si el estudiante no está registrado, pedimos al usuario que introduzca la nota.
    let notaEstudiante = prompt("Introduce la nota del estudiante:");
    // Validamos que la nota sea un número entre 0 y 10.
    while (isNaN(notaEstudiante) || notaEstudiante < 0 || notaEstudiante > 10) {
      alert("La nota debe ser un número entre 0 y 10. Inténtalo de nuevo.");
      notaEstudiante = prompt("Introduce la nota del estudiante:");
    }
    // Convertimos la nota a un número
    notaEstudiante = parseFloat(notaEstudiante);
    // Agregamos el estudiante y su nota al objeto.
    estudiantes[nombreEstudiante] = notaEstudiante;
    alert(`El estudiante ${nombreEstudiante} ha sido agregado con una nota de ${notaEstudiante}`);
  }

  // Calculamos la nota media de la clase.
  let sumaNotas = 0;
  for (let estudiante in estudiantes) {
    sumaNotas += estudiantes[estudiante];
  }
  let notaMedia = sumaNotas / Object.keys(estudiantes).length;
  alert(`La nota media de la clase es ${notaMedia}`);

  // Mostramos el listado de estudiantes ordenado alfabéticamente.
  let estudiantesOrdenados = Object.keys(estudiantes).sort();
  alert(`Listado de estudiantes: ${estudiantesOrdenados.join(", ")}`);
}

// Ejercicio 4

function ejercicio4() {

}


