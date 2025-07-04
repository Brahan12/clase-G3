// function calcularAreaRectangulo(base, altura) {
//   return base * altura;
// }

// let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
// let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

// let area = calcularAreaRectangulo(base, altura);

// console.log("El área del rectángulo es: " + area);


// let parrafo = document.getElementById("mensaje");
// parrafo.style.color = "red"; // Cambia el color a rojo


// let items = document.getElementsByClassName("item");
// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "yellow";
// }

// let parrafos = document.getElementsByTagName("p");
// for (let p of parrafos) {
//   p.style.fontWeight = "bold";
// }

// let primeraCaja = document.querySelector(".caja");
// primeraCaja.innerText = "Modificado";

// let tareas = document.querySelectorAll("li.tarea");
// tareas.forEach(t => t.style.textDecoration = "underline");

 const boton = document.getElementById("miBoton");
const input = document.getElementById("miInput");
const parrafo = document.getElementById("resultado");

let alternarColor = false;

/**
 * Funci...................
 * Autor: Pepito
 * Se en condi
 * Fecha: 26/06/2025
 */

boton.addEventListener("click", function () { 
    parrafo.textContent = input.value;  
    if (alternarColor) {
    parrafo.style.color = "blue";
    } else {
    parrafo.style.color = "green";
    }

    alternarColor = !alternarColor; 
});

 
// function areaRectanguloInterativo(){
//   debugger
//   let iteracion = true
//   let resultados = []
//   let e = 1
 
//   while (iteracion){
//     let base =  prompt("ingresa la medida de la base")
//     let altura =  prompt("ingresa la altura de la figura")
//     let area = base * altura
//     resultados.push(`El area de la figura ${e} de ${base} x ${altura} es de ${area} unidades^2 \n`)
//     let aux;
//     let preguntar = true
//     while(preguntar){
//       aux = prompt("Desea calcular el area de otra figura s/n")
//     if (aux.toUpperCase() == "NO" || aux.toUpperCase() == "N" ){
//       iteracion = false
//       break
//     }
//     else if (aux.toUpperCase() == "SI" || aux.toUpperCase() == "S" ){
//       e++
//       break
//     }
//     else{
//       alert("opcion no valida")
//       console.log("opcion no valida")
//     }
//     }
//   }
//   for (var i = 0; i < resultados.length; i++) {
//     console.log(resultados[i])
//   }
// }

// areaRectanguloInterativo();