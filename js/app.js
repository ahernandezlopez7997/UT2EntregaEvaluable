// Alumno: Alberto Hernández López 2º DAW

// Ejercicio 1
function ejercicio1() {
  let frase;
  let fraseValida = false;

  // Bucle para pedir la frase.
  while (!fraseValida) {
    frase = prompt("Introduce una frase de al menos 5 palabras:");

    if (frase === null) {
      alert("Has cancelado la entrada.");
      break;
    }

    const palabras = frase.trim().split(/\s+/).filter(p => p !== "");

    if (palabras.length >= 5) {
      fraseValida = true;
    } else {
      alert("La frase debe tener al menos 5 palabras. Inténtalo de nuevo.");
    }
  }

  // Apartados
  if (fraseValida) {

    const sinEspacios = frase.replace(/\s/g, "");
    const totalCaracteres = sinEspacios.length;


    const conAsteriscos = frase.replace(/[aeiouáéíóúü]/gi, "*");


    let contador = 0;
    let conGuiones = "";
    for (const c of frase) {
      if (/\s/.test(c)) {
        conGuiones += c;          // los espacios se mantienen y no cuentan
      } else {
        contador++;
        conGuiones += (contador % 2 === 0) ? "_" : c;
      }
    }

    // Estilos para la consola
    const estiloTitulo = "color: white; background: #2c3e50; font-size: 16px; font-weight: bold; padding: 4px 10px; border-radius: 4px;";
    const estiloDato = "color: #1a73e8; font-size: 14px; font-style: italic;";

    console.log("%cResultados del análisis", estiloTitulo);
    console.log("%cFrase original: " + frase, estiloDato);
    console.log("%cCaracteres (sin espacios): " + totalCaracteres, estiloDato);
    console.log("%cVocales por asteriscos: " + conAsteriscos, estiloDato);
    console.log("%cPosiciones pares por guion bajo: " + conGuiones, estiloDato);
  }
}

// Ejercicio 2
function ejercicio2() {

}

// Ejercicio 3
function ejercicio3() {

}

// Ejercicio 4
function ejercicio4() {

}


