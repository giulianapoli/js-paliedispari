var paridispariUtente = prompt("Pari o Dispari?").toLocaleLowerCase();
console.log(paridispariUtente);
var numeroUtente = prompt("Inserisci un numero da 1 a 5");
console.log(numeroUtente);
var somma =  + numeroUtente;
console.log(somma);
var pcNum = randomNum();

// funzione mathrandom
function randomNum (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
}


// dichiaro la funzione che verifica numero pari o dispari
function paridispari() {
  if (paridispariUtente == "pari") {

  }
}
