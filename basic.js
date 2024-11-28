//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('Ejercicio  1:')
console.log('"Bienvenida al bootcamp de FemCoders de Factoría F5"')


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por cada tipo de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
console.log('Ejercicio  2:')

let string='String';
console.log(string)

let number=13;
console.log(number)

let boolean=true;
console.log(boolean)

let isnull=null;
console.log(isnull)

let isundefined=undefined;
console.log(isundefined)

let persona = {
    nombres: ["Einar", " "],
    apellidos: ["Sanchez", "Reynoso"],
    pronombres: ["elle"],
    edad: 30,
    genero: "no binario",
    intereses: ["futbol", "baile"],
}
console.table(persona)

console.log(persona.nombres);
// console.log(persona.nombres[0]);
// console.log(persona.nombres[1]);
console.log(persona.apellidos);
// console.log(persona.apellidos[0]);
// console.log(persona.apellidos[1]);
console.log(persona.pronombres);
console.log(persona.edad);
console.log(persona.genero);
// console.log(persona.intereses[0]);
// console.log(persona.intereses[1]);


let familia = [];
familia["persona1"]= "Georgina";
familia["persona2"]= "Einar";
familia["gato1"]= "Dorian";
familia["gato2"]= "Ruby";

// console.log(familia["persona1"]);
// console.log(familia["persona2"]);
// console.log(familia["gato1"]);
// console.log(familia["gato2"]);

  console.table(familia)

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí
console.log('Ejercicio  3:')

const postres = [
    "Helado",
    "Tarta",
    "Pastel"
  ];
  
//   console.log(postres[0]);
//   console.log(postres[1]);
//   console.log(postres[2]);

  console.table(postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
console.log('Ejercicio  4:')


const coder = {
    nombre: "Einar",
    edad: 30,
    
  };

  console.table(coder);


//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.

//Escribe tu código aquí
console.log('Ejercicio  5:')

console.log(`La variable constante string con el value: ${string} tiene el siguiente tipo de dato: `+typeof(string))
console.log(`La variable constante number con el value: ${number} tiene el siguiente tipo de dato: `+typeof(number))
console.log(`La variable constante boolean con el value: ${boolean} tiene el siguiente tipo de dato: `+typeof(boolean))
console.log(`La variable constante isnull con el value: ${isnull} tiene el siguiente tipo de dato: `+typeof(isnull))
console.log(`La variable constante isundefined con el value: ${isundefined} tiene el siguiente tipo de dato: `+typeof(isundefined))
console.log(`La variable constante persona con el value representado en la siguiente tabla, tiene el siguiente tipo de dato: `+typeof(persona))
console.table(persona)
console.log(`La variable constante familia con el value representado en la siguiente tabla, tiene el siguiente tipo de dato: `+typeof(familia))
console.table(familia)


//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
console.log('Ejercicio  6:')

let suma=10+3;
console.log(suma);



//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí
console.log('Ejercicio  7:')

let resta=10-3;
console.log(resta);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí
console.log('Ejercicio  8:')

let multiplicacion=10*3;
console.log(multiplicacion);



//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí
console.log('Ejercicio  9:')

let division=10/3;
console.log(division);




//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con un valor numérico de 1 y la segunda con un valor numérico de 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
console.log('Ejercicio  10:')

let a=6
let b=2
if(a<b){
    console.info("A si es menor que b")
}else{
    console.warn("A NO es menor que b, asi que...")
}


// Ejercicio 11: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí




//Ejercicio 12: completa el ejercicio

let num1 = 15
let num2 = 20

let comparision = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparision)

//Ejercicio 13: completa el ejercicio

let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 


//Ejercicio 14: completa el ejercicio

let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)



//OPERADORES DE CADENAS
//Ejercicio 15: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí





//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

/* let a = 6;
let b = 3;

let res =  a < 10 __ b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 __ b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 __ b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 __ b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 __ b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) */
