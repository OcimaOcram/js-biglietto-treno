// domanda kilometri da percorrere
const km = parseInt(prompt("Quanti chilometri devi percorrere?"));

console.log(km);

// domanda età passeggero
const eta = prompt("Quanti anni hai?");

console.log(eta);

// calcolo prezzo biglietto
// calcolo sconti
const prezzoMinorenne = 0.21 * 80 / 100
const prezzoOver = 0.21 * 60 / 100
let prezzo

if (eta < 18 ) {
    prezzo = km * prezzoMinorenne;
    prezzo = prezzo.toFixed(2);
    console.log(prezzo);
    
    
} else if (eta > 65 ) {
    prezzo = km * prezzoOver;
    prezzo = prezzo.toFixed(2);
    console.log(prezzo);
   
    
} else {
    prezzo = (km * 0.21);
    prezzo = prezzo.toFixed(2);
    console.log(prezzo); 
   
}

// far dire al programma il prezzo
document.getElementById("prezzo-reale").innerHTML = "il costo del tuo biglietto è " + prezzo + "euro";