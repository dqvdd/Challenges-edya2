//1. Diferencia entre funciones regulares y funciones flecha (arrow functions).

//Las funciones flecha y las funciones regulares son dos tipos de funciones en JavaScript. 
//La principal diferencia entre ellas es la sintaxis. 
//Las funciones flecha son más compactas y concisas que las funciones regulares.

// Función flecha
const suma = (x, y) => x + y;

// Función regular
function suma(x, y) {
  return x + y;
}

//Las funciones flecha también tienen las siguientes diferencias con las funciones regulares:

//Las funciones flecha no pueden tener parámetros opcionales.
//Las funciones flecha no pueden ser utilizadas como constructores.
//Las funciones flecha no pueden tener enlaces a this o super.

//2. crear un funcion de cada tipo que reciba un numero y retorne si es par o impar.

function regularOddEven(a) {
    if (a % 2 === 0) {
      console.log("par");
    } else {
      console.log("impar");
    }
  }
  
  const arrowOddEven = (a) => {
    if (a % 2 === 0) {
      console.log("par");
    } else {
      console.log("impar");
    }
  };
  
  console.log(regularOddEven(2));
  console.log(regularOddEven(5));
  console.log(arrowOddEven(4));
  console.log(arrowOddEven(7));
  