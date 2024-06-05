import './style.css'

alert("Hello, bienvenido al desafio 07.");               

                                                         //Ejercicio 1 y 2

const name = "Angel"                        //variable llamada nombre
const apellido = "Cardenas"                 
const age = 36                              //número entero
const num2 = 7 
let decimal = age / 5                       //número decimal
const city = "Puerto Cabello"               //cadena de texto
const respuesta = "si"
const verdadero = true                      //valor booleano
// !--------------------------------------------------------------------------------------------

console.log(`Hola soy  ${name} ${apellido}.`)              //Ejercicio 3

// !--------------------------------------------------------------------------------------------
decimal = age + num2                                        //Ejercicio 4
console.log(`El resultado de la suma es: ${decimal}`)

decimal = age - num2                                       
console.log(`El resultado de la resta es: ${decimal}`)

decimal = age * num2                                       
console.log(`El resultado de la multiplicación es: ${decimal}`)

decimal = age / num2                                       
console.log(`El resultado de la división es: ${decimal}`)

decimal = age % num2                                       
console.log(`El resultado del resto es: ${decimal}`)
// !--------------------------------------------------------------------------------------------
let contador = prompt ('¿Desea añadir al contador?');     //Ejercicio 5
let i =  0
do{
    if ( contador == respuesta){
    i = i + 1 
    }
      

     contador = prompt ('¿Desea añadir otro al contador?');      
}while( contador == respuesta)
console.log(`El contador finalizo en: ${i}`) 

contador = prompt ('¿Desea restar al contador?');
do{
    if ( contador == respuesta){
    i = i - 1 
    }
      

     contador = prompt ('¿Desea restar otro al contador?');      
}while( contador == respuesta)
console.log(`El contador finalizo en: ${i}`)

// !--------------------------------------------------------------------------------------------
let you_name = prompt ('¿ingrese su Nombre por favor?');     //Ejercicio 6
alert(`Hola ${you_name}, bienvenida al desafio 07`);

// !--------------------------------------------------------------------------------------------
                                                             //Ejercicio 7
let radio = prompt ('¿ingrese el radio de un círculo, para cálcular su área por favor?'); 
let area = 3.14 * radio * radio
console.log(`El área del circulo es: ${area}`)

// !--------------------------------------------------------------------------------------------
                                                             //Ejercicio 8
let celcius = prompt ('¿ingrese una temperatura en grados Celsius por favor?'); 
let faren = (1.8 * celcius) + 32 
console.log(`La temperatura en grados Fahrenheit es: ${faren}`)

// !--------------------------------------------------------------------------------------------
       let pro1 = 0                                                   //Ejercicio 9
       let pro2 = 0 
       let pro3 = 0 
       let resultado_pro = 0
pro1 = prompt ('¿ingrese el número 1 por favor?'); 
pro1 = parseFloat(pro1)
pro2 = prompt ('¿ingrese el número 2 por favor?');
pro2 = parseFloat(pro2)
pro3 = prompt ('¿ingrese el número 3 por favor?');
pro3 = parseFloat(pro3)
resultado_pro = (pro1 + pro2  +pro3)/3
console.log(`El promedio de los tres números es: ${resultado_pro}`)

// !--------------------------------------------------------------------------------------------
          let par = 0                                                   //Ejercicio 10
par = prompt ('¿ingrese un número para determinar si es par o impar?'); 

let resultado_par = par % 2
if (resultado_par == 0) {
    console.log(`El números ingresado es par`)
} else {
    console.log(`El números ingresado es impar`)
}
// !--------------------------------------------------------------------------------------------
                                                                        //Ejercicio 11
let edad  = prompt ('¿ingrese sú edad por favor?');
if (edad >= 18) {
    console.log(`Usted es mayor de Edad`)
} else {
    console.log(`Usted es menor de Edad`)
}
// !--------------------------------------------------------------------------------------------
                                                                         //Ejercicio 12
let dia = prompt ('¿ingrese un número para escoger un día de la semana?'); 
switch (dia){
case '1':
    console.log('El día seleccionado es Lunes')
    break;

case '2':
    console.log('El día seleccionado es Martes')
    break;
case '3':
    console.log('El día seleccionado es Miércoles')
    break;
case '4':
    console.log('El día seleccionado es Jueves')
    break;
case '5':
    console.log('El día seleccionado es Viernes')
    break;
case '6':
    console.log('El día seleccionado es Sábado')
    break;
case '7':
    console.log('El día seleccionado es Domingo')
    break;
default: /* else */
        console.log('Día no reconocido')
        break;
}








