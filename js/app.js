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
  let palabras;

  prompt("Introduce 7 palabras variadas con Mayusculas y algunas con 4 letras o menos");
  const contador = prompt().split(" ");

  alert();

}

// Ejercicio 3

function ejercicio3() {

}

// Ejercicio 4

function ejercicio4() {

}


