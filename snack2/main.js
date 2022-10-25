/* 
! Snack 2*
Generatore di “nomi cognomi” casuali del grande gatsby:
Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale. */

let risposta = parseInt(prompt("non ho capito cosa devo fare, dimmi si per andare avanti e no per non farlo"));
console.log(risposta);

const getRandomInt = ( min = 0, max = 1 );

const listaCognomi = ["rossi", "verdi", "gialli", "blu"]

const listaNomi = ["luca", "marco", "giuseppe", "francesco"]

