// Alumno: Alberto Hernández López
// 2º CFGS: Desarrollo de Aplicaciones Web
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

    while (palabra === null || palabra.trim().length < 1) {
      alert("La palabra no puede estar vacía. Inténtalo de nuevo.");
      palabra = prompt(`Introduce la palabra ${i + 1}:`);
    }

    palabras.push(palabra.trim());
  }

  // Filtro para las palabras de más de 4 caracteres
  let palabrasFiltradas = palabras.filter(palabra => palabra.length > 4);

  // Ordenarlo alfabéticamente ignorando tanto las mayúsculas y minúsculas
  palabrasFiltradas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  alert(`Palabras ordenadas alfabéticamente:\n${palabrasFiltradas.join(", ")}`);
  console.log(`Palabras ordenadas alfabéticamente: ${palabrasFiltradas.join(", ")}`);

  // Bucle para que no introduzca una palabra vacía
  let palabraBuscar = prompt("Introduce una palabra para buscar:");

  while (palabraBuscar === null || palabraBuscar.trim().length < 1) {
    alert("La palabra a buscar no puede estar vacía. Inténtalo de nuevo.");
    palabraBuscar = prompt("Introduce una palabra para buscar:");
  }

  // Apartados
  palabraBuscar = palabraBuscar.trim();

  let existePalabra = palabrasFiltradas.some(
    palabra => palabra.toLowerCase() === palabraBuscar.toLowerCase()
  );

  if (existePalabra) {
    console.info(`La palabra "${palabraBuscar}" está en el listado.`);
  } else {
    palabrasFiltradas.push(palabraBuscar);

    palabrasFiltradas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    alert(`Palabras ordenadas alfabéticamente actualizadas:\n${palabrasFiltradas.join(", ")}`);
    console.log(`Palabras ordenadas alfabéticamente actualizadas: ${palabrasFiltradas.join(", ")}`);
  }
}

function ejercicio3() {
  // Creamos un objeto que almacene los estudiantes y sus notas.
  let estudiantes = {
    "Juan": 8.5,
    "Maria": 9.2,
    "Pedro": 7.8,
    "Ana": 9.5
  };

  //Mostramos los alumnos ya registrados
  let informacionInicial = "Alumnos registrados inicialmente:\n";

  for (let estudiante in estudiantes) {
    informacionInicial += `${estudiante}: ${estudiantes[estudiante]}\n`;
  }

  alert(informacionInicial);

  // Pedimos al usuario que introduzca el nombre de un estudiante.
  let nombreEstudiante = prompt("Introduce el nombre de un estudiante:");

  // Impedimos que el nombre esté vacío
  while (nombreEstudiante === null || nombreEstudiante.trim().length < 1) {
    alert("El nombre no puede estar vacío. Inténtalo de nuevo.");
    nombreEstudiante = prompt("Introduce el nombre de un estudiante:");
  }
  nombreEstudiante = nombreEstudiante.trim();

  // Nos aseguramos que no hay problemas con la mayúsculas en la busqueda
  let EstudianteBuscado = Object.keys(estudiantes).find(estudiantes => estudiantes.toLocaleLowerCase()=== nombreEstudiante.toLocaleLowerCase());

  // Buscamos el estudiante en el objeto.
  if (EstudianteBuscado !== undefined) {

    // Si el estudiante está registrado, mostramos su nota.
    alert(`La nota de ${EstudianteBuscado} es ${estudiantes[EstudianteBuscado]}`);
  } else {

    // Si el estudiante no está registrado, pedimos la nota.
    let notaEstudiante = prompt("Introduce la nota del estudiante:");

    // Validamos que la nota sea un número entre 0 y 10.
    while (isNaN(notaEstudiante) || notaEstudiante < 0 || notaEstudiante > 10 || parseFloat(notaEstudiante) * 100 !== Math.floor(parseFloat(notaEstudiante) * 100)) {
      alert("La nota debe ser un número entre 0 y 10 y como máximo 2 decimales. Inténtalo de nuevo.");
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
  console.log(`La nota media de la clase es ${notaMedia}`);

  // Mostramos el listado de estudiantes ordenado alfabéticamente.
  let estudiantesOrdenados = Object.keys(estudiantes).sort();
  alert(`Listado de estudiantes: ${estudiantesOrdenados.join(", ")}`);
}

// Ejercicio 4
function ejercicio4() {
  alert("Mira el log para ver el resultado");

  // Conjuntos numéricos (de 0 a 30)
  const multiplosDe2 = [];
  const multiplosDe3 = [];

  for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) multiplosDe2.push(i);
    if (i % 3 === 0) multiplosDe3.push(i);
  }

  // Hay que usar el Set para no tener duplicados
  const setA = new Set(multiplosDe2);
  const setB = new Set(multiplosDe3);

  // Resultado de la unión
  const union = [...new Set([...setA, ...setB])].sort((a, b) => a - b);

  // Resultado de la intersección
  const interseccion = [...setA].filter(x => setB.has(x));

  // Resultado de la diferencia del setA menos el setB
  const diferencia1 = [...setA].filter(x => !setB.has(x));

  // Resultado de la diferencia del setB menos el setA
  const diferencia2 = [...setB].filter(x => !setA.has(x));

  // Resultado de la exclusión
  const exclusion = [...diferencia1, ...diferencia2].sort((a, b) => a - b);

  // Estilo distinto para cada log
  console.log(`%cUnión de conjuntos: ${union.join(", ")}`,
    "color: white; background: black; padding: 2px 6px; font-weight: bold;");

  console.log(`%cIntersección de conjuntos: ${interseccion.join(", ")}`,
    "color: white; background: darkblue; padding: 2px 6px; font-style: italic;");

  console.log(`%cDiferencia del primero menos el segundo: ${diferencia1.join(", ")}`,
    "color: purple; background: white; font-size: 14px; text-decoration: underline;");

  console.log(`%cDiferencia del segundo menos el primero: ${diferencia2.join(", ")}`,
    "color: green; font-size: 16px; font-weight: bold;");

  console.log(`%cExclusión de los elementos que pertenecen a ambos conjuntos: ${exclusion.join(", ")}`,
    "color: yellow; background: black; padding: 2px 6px; border: 1px solid #6a1b9a;");
}

// Ejercicio 5
function ejercicio5() {
  let valoresArray = [];
  let numerosValidos = false;

  // Pedimos los números hasta que todos sean válidos
  while (numerosValidos === false) {
    let valores = prompt("Introduce una serie de números separados por comas:");
    numerosValidos = true;

    // Si cancela o lo deja vacío, no vale
    if (valores === null || valores.trim() === "") {
      numerosValidos = false;
    } else {
      // Hacemos el array de números
      valoresArray = valores.split(",");

      // Comprobamos uno por uno que sean números
      for (let i = 0; i < valoresArray.length; i++) {
        if (valoresArray[i].trim() === "" || isNaN(valoresArray[i])) {
          numerosValidos = false;
        }
      }
    }

    if (numerosValidos === false) {
      alert("Alguno de los valores no es numérico. Inténtalo de nuevo.");
    }
  }

  // Pasamos los textos a números
  let numeros = [];
  for (let i = 0; i < valoresArray.length; i++) {
    numeros.push(Number(valoresArray[i]));
  }

  // Nos quedamos con los que solo aparecen una vez
  let unicos = [];
  for (let i = 0; i < numeros.length; i++) {
    let veces = 0;

    for (let j = 0; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        veces++;
      }
    }

    if (veces === 1) {
      unicos.push(numeros[i]);
    }
  }

  // Si no hay ninguno, avisamos (si no, dividiríamos entre 0)
  if (unicos.length === 0) {
    alert("No hay ningún valor que aparezca solo una vez.");
    return;
  }

  // Calculamos la media
  let suma = 0;
  for (let i = 0; i < unicos.length; i++) {
    suma = suma + unicos[i];
  }
  let media = suma / unicos.length;

  alert("Valores que solo aparecen una vez: " + unicos.join(", "));
  alert("Media de dichos valores: " + media);
}

//Ejercicio 6
function ejercicio6() {
  let frase = prompt("Introduce una frase o palabra:");

  // Si cancela o lo deja vacío, volvemos a pedirlo
  while (frase === null || frase.trim() === "") {
    alert("Debes introducir una frase o palabra. Inténtalo de nuevo.");
    frase = prompt("Introduce una frase o palabra:");
  }

  // Lo dejamos todo en minúsculas
  let minusculas = frase.toLowerCase();

  // Nos quedamos solo con las letras (quitamos las tildes)
  let letras = "";
  for (let i = 0; i < minusculas.length; i++) {
    let c = minusculas[i];

    if (c === "á") {
      c = "a";
    }
    if (c === "é") {
      c = "e";
    }
    if (c === "í") {
      c = "i";
    }
    if (c === "ó") {
      c = "o";
    }
    if (c === "ú") {
      c = "u";
    }

    // Solo se guarda si es una letra (la ñ también cuenta)
    if ((c >= "a" && c <= "z") || c === "ñ") {
      letras += c;
    }
  }

  // Le damos la vuelta a las letras
  let reversa = "";
  for (let i = letras.length - 1; i >= 0; i--) {
    reversa += letras[i];
  }

  if (letras === reversa) {
    alert(`La frase "${frase}" es un palíndromo.`);
  } else {
    alert(`La frase "${frase}" no es un palíndromo.`);
  }
}

//Ejercicio 7
function ejercicio7() {
  // Definimos la lista de tareas como un arreglo vacío
  let tareas = [];

  // Función para agregar tarea
  function agregarTarea() {
    let tarea = prompt("Ingrese la tarea a agregar:");
    if (tarea === null || tarea.trim() === "") {
      console.log("Tarea inválida.");
      return;
    }
    tarea = tarea.trim();
    if (!tareas.some((t) => t.tarea.toLowerCase() === tarea.toLowerCase())) {
      tareas.push({ tarea: tarea, completada: false });
      console.log(`Tarea agregada: ${tarea}`);
    } else {
      console.log("La tarea ya existe.");
    }
  }

  // Función para completar tarea
  function completarTarea() {
    let tarea = prompt("Ingrese la tarea a completar:");
    let indice = tareas.findIndex((t) => t.tarea === tarea);
    // Verificamos si la tarea existe en la lista
    if (indice !== -1) {
      tareas[indice].completada = true;
      console.log(`Tarea completada: ${tarea}`);
    } else {
      console.log("La tarea no existe.");
    }
  }

  // Función para eliminar tarea
  function eliminarTarea() {
    let tarea = prompt("Ingrese la tarea a eliminar:");
    let indice = tareas.findIndex((t) => t.tarea === tarea);
    // Verificamos si la tarea existe en la lista
    if (indice !== -1) {
      tareas.splice(indice, 1);
      console.log(`Tarea eliminada: ${tarea}`);
    } else {
      console.log("La tarea no existe.");
    }
  }

  // Función para mostrar lista de tareas
  function mostrarLista() {
    console.log("Lista de tareas:");
    tareas.forEach((t, indice) => {
      console.log(`${indice + 1}. ${t.tarea} - ${t.completada ? "Completada" : "Pendiente"}`);
    });
  }

  // Función para mostrar tareas pendientes
  function mostrarPendientes() {
    // Filtramos las tareas pendientes
    console.log("Tareas pendientes:");
    tareas.forEach((t, indice) => {
      if (!t.completada) {
        console.log(`${indice + 1}. ${t.tarea}`);
      }
    });
  }

  // Función principal
  function main() {
    while (true) {
      let opcion = prompt("Ingrese su opción: 1.crear, 2.completar, 3.eliminar, 4.mostrar, 5.pendientes, 6.salir");
      switch (opcion) {
        case "1":
          agregarTarea();
          break;
        case "2":
          completarTarea();
          break;
        case "3":
          eliminarTarea();
          break;
        case "4":
          mostrarLista();
          break;
        case "5":
          mostrarPendientes();
          break;
        case "6":
          console.log("Adiós.");
          return;
        default:
          console.log("Opción inválida.");
      }
    }
  }

  // Llamamos a la función principal
  main();
}
