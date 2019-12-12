// 1er ejercicio
console.log("Hola Mundo");

// 2o ejercicio
nombre = alert("Hola me llamo Luis");

// 3er ejercicio

var nom = "Luis";
var cognom = "Saura";

console.log(nom,cognom);

// 4th ejercicio
var a= 34;
var b= 56;

suma=a+b;

console.log("La suma entre " + a + " i "+ b + " es "+ suma);

// 5o ejercicio

function miNota(nota_examen) {

  var nota_examen = prompt("Introduce el resultado obtenido en el examen");

  nota_examen>=5 ? console.log("WOW!! has aprobado con un",nota_examen) : console.log("Ohhh has suspendido el examen con un ", nota_examen);
}
miNota();

// 6th ejercicio

var frase = "Tinc un cotxe de color blau";
var frase1 = frase.replace("blau","verd");
var frase2 = frase.replace(/['o']/gi,"u");
console.log(frase);
console.log(frase1);
console.log(frase2);

//7th ejercicio

var objectes = ["taula", "cadira", "ordinador", "llibreta"];
  for (i=0;i<objectes.length;i++) {
      console.log("L' objecte " + objectes[i] + " està a la posició ", i);
}

// 8th ejercicio

function calculadora (valor1,valor2) {

  var valor1 = parseInt(prompt("Introduce el primer valor"));
  var valor2 = parseInt(prompt("Introduce el segundo valor"));
  var opcion = prompt("Elije opción de calculadora \n 1. Suma \n 2.Resta \n 3.Multiplicación \n 4.División");
  var operador = 0;
    if (opcion == 1) {
      operador =  valor1 + valor2;
      console.log("El valor de la suma es: "+operador);
    }else if (opcion == 2){
      operador =  valor1 - valor2;
      console.log("El valor de la resta es: "+operador);
    }else if (opcion == 3){
      operador =  valor1 * valor2;
      console.log("El valor de la multiplicación es: "+operador);
    }else if (opcion == 4){
      operador =  valor1 / valor2;
      console.log("El valor de la división es: "+operador);
    }else { console.log("La opción introducida es errónea")
    }
}
calculadora();