
// Pedir nombre al usuario
const nombre = prompt("Bienvenido al simulador de examen teórico para tu carnet de conducir! Ingresa tu nombre:");

// Saludar al usuario y comenzar simulador
alert("¿Estás listo, " + nombre +"? ¡Comencemos!");

// Inicializar puntaje
let puntaje = 0;

// Función para calcular el resultado y mostrar el mensaje final
function calcularResultado() {
  if (puntaje < 5) {
    alert("Mmm..." + nombre + " ¡debes estudiar más! ¡Así no aprobarás el examen!");
  } else if (puntaje >= 5 && puntaje <= 7) {
    alert("¡Vienes bien " + nombre +"!" + " ¡Pero es necesario un esfuerzo más!");
  } else if (puntaje >= 8 && puntaje <= 9) {
    alert("¡Bastante bien! ¡Puedes aprobar!, pero vamos " + nombre +"... ¡puedes hacerlo mejor!");
  } else if (puntaje === 10) {
    alert("¡Excelente! ¡Estoy seguro de que aprobarás " + nombre +"!" + " ¡Luego puedes salir a festejar, pero ojo, sin alcohol si manejas! ;-)");
  }
}

// Preguntas
for (let i = 1; i <= 5; i++) {
  // Utilización de ciclo for para repetir el proceso para cada pregunta

  // Pregunta actual
  let pregunta;
  let opciones;

  if (i === 1) {
    // Pregunta 1
    pregunta = "En un procedimiento judicial de un siniestro vial, al ser convocados en carácter de testigo, ¿no es obligatorio presentarse a declarar en la Fiscalía correspondiente?";
    opciones = "Opciones:\n1. Verdadero\n2. Falso\n\nIngresa el número de la opción correcta (1 o 2)";
  } else if (i === 2) {
    // Pregunta 2
    pregunta = "La persona que se da a la fuga en un siniestro vial, dejando a alguien herido, puede ser juzgada por el delito de abandono de persona.";
    opciones = "Opciones:\n1. Verdadero\n2. Falso\n\nIngresa el número de la opción correcta (1 o 2)";
  } else if (i === 3) {
    // Pregunta 3
    pregunta = "En caso de participar de un siniestro vial, ¿de cuánto tiempo se dispone para dar aviso sobre el hecho a la compañía aseguradora del vehículo?";
    opciones = "Opciones:\n1. 24Hs.\n2. 72Hs.\n\nIngresa el número de la opción correcta (1 o 2)";
  } else if (i === 4) {
    // Pregunta 4
    pregunta = "En caso de participar en un siniestro vial, ¿qué es recomendable hacer como primer paso?";
    opciones = "Opciones:\n1. Detenerse inmediatamente y permanecer en el lugar del hecho.\n2. Conducir hasta la comisaría más cercana.\n3. Llamar al 911 y continuar el viaje.\n\nIngresa el número de la opción correcta (1, 2 o 3)";
  } else if (i === 5) {
    // Pregunta 5
    pregunta = "En caso de siniestro, ¿cuál es el orden de actuación recomendado?";
    opciones = "Opciones:\n1. Alertar - Socorrer - Proteger.\n2. Proteger - Alertar - Socorrer.\n3. Socorrer - Proteger - Alertar.\n\nIngresa el número de la opción correcta (1, 2 o 3)";
  }

  // Mostrar pregunta y opciones
  const respuesta = prompt(pregunta + "\n" + opciones);

  // Verificar respuesta y sumar puntaje si es correcta
  if (i === 1 && respuesta === "2") {
    puntaje += 2;
  } else if (i === 2 && respuesta === "1") {
    puntaje += 2;
  } else if (i === 3 && respuesta === "2") {
    puntaje += 2;
  } else if (i === 4 && respuesta === "1") {
    puntaje += 2;
  } else if (i === 5 && respuesta === "2") {
    puntaje += 2;
  }
}

// Calcular resultado y mostrar mensaje final
calcularResultado();

