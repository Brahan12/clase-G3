let mensaje2: string = "¡Hola TypeScript!";
console.log(mensaje2);

let edad: number = "25"; // Error: Se esperaba un número, no una cadena Beneficio:
// No tienes que esperar a que el usuario lo pruebe o que el código se rompa en producción para encontrar errores.

let persona = { nombre: "Ana", edad: 30 };

// VS Code sabe que persona tiene `nombre` y `edad`, y los muestra como sugerencia
console.log(persona.nombre.toUpperCase()); 
// Aumenta tu velocidad al escribir.

// Disminuye los errores de escritura o de nombres incorrectos.

function calcularPrecio(base: number, descuento: number): number {
  return base - descuento;
}

// Alguien que llegue al proyecto puede entenderlo sin adivinar.

// Si cambias algo, TypeScript te avisa si rompe otras partes del código.


// Mal
function saludar(nombre: string): string {
  return "Hola " + nombre;
}

function saludar2(nombre) {
  return "Hola " + nombre;
}


interface Usuario {
  nombre: string;
  edad: number;
}

let user: Usuario = {
  nombre: "Carlos",
  edad: 28
};

// Requiere tiempo para acostumbrarse.

// Si estás aprendiendo a programar desde cero, es más contenido técnico que entender.