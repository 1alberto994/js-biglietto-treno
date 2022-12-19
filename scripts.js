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