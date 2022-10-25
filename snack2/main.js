/* 
! Snack 2*
Generatore di “nomi cognomi” casuali del grande gatsby:
Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale. */

/* let risposta = parseInt(prompt("non ho capito cosa devo fare, dimmi si per andare avanti e no per non farlo"));
console.log(risposta);

 */

var listaCognomi = ["rossi", "verdi", "gialli", "blu"];


var listaNomi = ["luca", "marco", "giuseppe", "francesco"];

var rand = Math.floor(Math.random() * listaNomi.length);

var rando = Math.floor(Math.random() * listaCognomi.length);

let cogn = listaCognomi[rando]
let nom = listaNomi [rand]
console.log(nom + " " + cogn)



