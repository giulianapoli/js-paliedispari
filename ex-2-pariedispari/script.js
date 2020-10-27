var paridispariUtente = prompt("Pari o Dispari?").toLowerCase();
console.log(paridispariUtente);
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUtente);

var pcNum = randomNum(1, 5);
var somma = pcNum + numeroUtente;
console.log(somma);

// funzione mathrandom
function randomNum(min, max) {
  return (Math.floor(Math.random() * max) + min);
}
console.log(randomNum(1, 5));


// dichiaro la funzione che verifica numero pari o dispari
function paridispari(num) {
  if (num % 2 === 0) {
    var pd = "pari";
    console.log(pd);
  } else {
    var pd = "dispari";
  }
  return pd;
}
console.log(paridispari(somma));


if (paridispari(somma) === (paridispariUtente)) {
  document.getElementById("result").innerHTML = "Hai vinto";
} else {
  document.getElementById("result").innerHTML = "Hai perso";
}
