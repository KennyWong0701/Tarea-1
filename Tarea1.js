

//Binario y Octal literal
//Es un elemento sintático que representa un valor, solo que está representado según el metodo utilizado en binario y octal
//Binario solo utiliza unos y ceros
//Octal utiliza desde el cero hasta el 7

//Ejemplo

//Decimal
int  = 10;
//Binario
int = 0b1010;
//Octal
int = 016;

//String repeat
//Se usa para construir una nueva cadena que contiene un número específico de copias de la cadena en la que se ha llamado a esta función
//Es decir si una cadena dice "Hola" y la llamamos tres veces entonces la nueva cadena dirá "HolaHolaHola"

//Ejemplo

    a = "Hola";
    b = a.repeat(3);
    document.write(b);

//String search method
//Es un metodo utilizado para busccar una expresión en un string
//Sintaxis str.search(expresionregular)

//Cabe mencionar que esto diferencia de mayusculas y minusculas y hay que especificarlo, por otro lado si lo que buscamos no se encuentra en la cadena
//el valor devuelto es "-1"

const str = "Hojas verdes en verano, hojas amarillas en otoño"

//Resultado en pocisión 23
let hojas = "hojas"; 
str.search(hojas)
//Resultado en pocisión 23
let regExp = /hojas/; 
str.search(regExp) 
//Resultado 0 porque no distingue mayúsculas 
let regExpIns = /hojas/i; 
str.search(regExpIns)
//Resultado -1 porque no existe
let azul = "azul"; 
str.search(azul)