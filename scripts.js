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
numb=numb.toFixed(2)
rounded=Math.round((numb + Number.EPSILON )*100 /100);
console.log(rounded);

// console.log("sconto 40%:",prezzoBigliettoOver);

// prezzoBigliettoUno= Math.round(Math.floor(prezzoBiglietto*40)/100);
// console.log(prezzoBigliettoUno)

