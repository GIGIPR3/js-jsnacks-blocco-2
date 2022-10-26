
/* 
! Snack 3 
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari */

let numeri = [3,7,9,12,220,3233,33,17];

let sum = 0;

for (let i=0; i < numeri.length; i++){

    if (i % 2 != 0){
        sum = sum + numeri[i];
    }
}

console.log(sum);