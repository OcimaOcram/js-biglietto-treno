// domanda kilometri da percorrere
const km = parseInt(prompt("Quanti chilometri devi percorrere?"));

console.log(km);

// domanda età passeggero
const eta = parseInt(prompt("Quanti anni hai?"));

console.log(eta);

// calcolo prezzo biglietto

// prezzo standard
const prezzoStandard = 0.21;

let prezzo = (km * prezzoStandard);
console.log(prezzo);

if (eta < 18 ) {
    const prezzoMinorenne = prezzoStandard * 80 / 100;
    prezzo = km * prezzoMinorenne;
    console.log(prezzo);
       
} else if (eta > 65 ) {
    const prezzoOver = prezzoStandard * 60 / 100;
    prezzo = km * prezzoOver;
    console.log(prezzo);
      
} 

// far dire al programma il prezzo
document.getElementById("prezzo-reale").innerHTML = "il costo del tuo biglietto è " + prezzo.toFixed(2); + "euro";