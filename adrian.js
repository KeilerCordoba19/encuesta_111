// console.log(square(5));
// function square(n){
// return n * n;
// }

// let peliculas = 2;
//   switch(peliculas){
//      case 1 :
//         console.log("depool");
//         break;
//      case 2 :
//         console.log("Godzilla");
//         break;
//      case 3 :
//         console.log("king" );
//         break;
//       case 4 :
//         console.log("lagrimas");
//         break;       

//   }


//   for (let i = 0; i < 5; i ++){
//      console.log("iteracion numero: " + i);
     
//   }

//   let contador = 0;
//   while (contador < 5){
//     console.log("contador:" + contador);
//     contador++;
//   }
 

// function operacionAsincrona(x, y, callback) {
//     setTimeout(function() {
//       var resultado = x + y;
//       callback(resultado);
//     }, 1000)

//   }
  
//   function mostrarResultado(resultado) {
//     console.log("El resultado es: " + resultado);
//   }
  
// operacionAsincrona(5,8, mostrarResultado);


// let hola = (a,b)=> a+b;
// console.log(hola(9,9));

// console.log(square(5,18));
// function square(n,m){
//     return n + m
// }
 
// let havertz = (a,c,d,t,i,u) => a+c+d+t+i+u;
// console.log(havertz(8,9,7,5,4,6));

// let nombre = prompt("ingrese su nombre");
// let edad = parseInt(prompt("ingrese su edad"));


//  edad<18? alert(`hola ${nombre}, eres menor de edad, tienes ${edad}`):alert(`hola ${nombre},eres mayor de edad, tienes ${edad}`) 

// let A= prompt("ingrese primer valor");
// let b = parseInt(prompt("ingrese segundo valor"));
// if(A === b){
//   alert("el valor que tiene A es igual al valor que tiene b")
// }else if(A > b){
//   alert("el valor que tiene A es mayor")
// }else{
//   alert("el valor que tiene A es menor")

// }


let encuesta 
let continuarEncuesta;
let totalSalariosAdmin = 0;
let SalariosAdmin = 0;
let Salmayor= 0;
let edadSalarioMayor;
let alumno;

do {
  let nombre = prompt("Ingrese su nombre:");
  let salario = parseFloat(prompt("Ingrese su salario:"));
  let edad = parseInt(prompt("Ingrese su edad:"));
  let carrera = parseInt(prompt("Ingrese el número de su carrera (1: administración, 2: derecho, 3: medicina, 4: sistemas):"));

 

  continuarEncuesta = prompt("¿Desea realizar otra encuesta? (Sí/No)");
} while (continuarEncuesta === 'si');

encuesta.prompt({ nombre, salario, edad, carrera });

// do {
//   contadorCarreras(alumno.carrera - 1)++;
  
//   if (alumno.carrera === 1) {
//     totalSalariosAdmin += alumno.salario;
//     SalariosAdmin++;
//   }

//   if (alumno.salario > Salmayor) {
//     Salmayor = alumno.salario;
//     edadSalarioMayor = alumno.edad;
//   }
// }while

let carreraMasAlumnos = contadorCarreras (contadorCarreras) + 1;
let promedioSalariosAdmin = SalariosAdmin > 0 ? totalSalariosAdmin / SalariosAdmin : "No hay alumnos de administración en la encuesta.";

alert("La carrera con más alumnos es: " + carreraMasAlumnos);
alert("El promedio de salario de los alumnos de administración es: " + promedioSalariosAdmin);
alert("La edad de la persona con mayor salario es: " + edadSalarioMayor);
