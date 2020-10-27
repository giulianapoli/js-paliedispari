var inputUtente = prompt("Inserisci una parola");
console.log(inputUtente);

// dichiaro la funzione per invertire le lettere. inputUtente è l'argomento della funzione
function wordReverse(inputUtente) {
  var chars = inputUtente.split(""); //trasformo la variabile inputUtente in arrey dividendo le lettere

  chars.reverse(); // inverto le lettere dell'arrey

  return chars.join(""); //riassembla le lettere
}

// creo la funzione che verifica che il palindromo sia vero
function palindroma(inputUtente) {

  var palindroma = false;

  if (inputUtente === wordReverse(inputUtente)) {
    palindroma = true;

  }

  return palindroma;
}
console.log(wordReverse(inputUtente));

// richiamo le funzioni

if (palindroma(inputUtente)) {
  document.getElementById("result").innerHTML = inputUtente + " è palindroma/o";
} else {
  document.getElementById("result").innerHTML = inputUtente + " non è palindroma/o";
}
