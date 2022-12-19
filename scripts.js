const numeroChilometri=prompt("Quanti chilometri vuoi percorrere?");
console.log("I chilometri percorsi sono:", numeroChilometri);
const age=prompt("Quanti anni hai?");
console.log("L'utente ha :", age);
const prezzoAkm=0.21;
const ageUno=18;
const ageDue=65
if(age<ageUno){
    alert("Hai uno sconto del 20%");
}
else if(age>=ageUno && age<=ageDue){
    alert("Non hai nessuno sconto");
}
else if(age>ageDue) {
    alert("Hai uno sconto del 40%");
}
const prezzoBiglietto=prezzoAkm*numeroChilometri;
console.log("il prezzo pieno è di:",prezzoBiglietto);
const prezzoBigliettoMinorenni= Math.floor(prezzoBiglietto*20/100);
console.log( "sconto 20%:",prezzoBigliettoMinorenni);
const prezzoScontato=prezzoBiglietto-prezzoBigliettoMinorenni;
console.log("lo sconto è di:", prezzoScontato);
const prezzoBigliettoOver =Math.floor(prezzoBiglietto*40)/100;
console.log( "sconto 40%:",prezzoBigliettoOver);
const bigliettoScontatoOver=prezzoBiglietto-prezzoBigliettoOver;
console.log("lo sconto è di:",bigliettoScontatoOver);
numb=prezzoScontato;
Math.round(((prezzoScontato).toFixed(2)));
console.log(Math.round(prezzoScontato).toFixed(2));
Math.round((( bigliettoScontatoOver).toFixed(2)));
console.log(Math.round(bigliettoScontatoOver).toFixed(2));