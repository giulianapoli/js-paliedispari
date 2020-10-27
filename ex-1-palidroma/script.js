inputUtente = prompt("Inserisci una parola");
console.log(inputUtente);

// creo la funzione che mi inverte le lettere dell'input dell'utente
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
    document.getElementById("result").innerHTML = inputUtente;
  } // else {
  //   document.getElementById("result").innerHTML = inputUtente + "non è palindromo";
  // }

  return palindroma;
}
