//esercizio del 16 gennaio

let totaleGatti = 20;
let gattiFila = 2;
let file = totaleGatti / gattiFila;
let resto = totaleGatti%gattiFila;
let mancanza = gattiFila - resto;
console.log(`Ci sono ${file} file di gatti e ne mancano ${resto} per una nuova fila, con avanzo di ${mancanza}`);


//traccia 2
let v = 2;
if(v < 18){
    console.log ("insufficiente")
}
else if(v >=18 && v<21){
    console.log("Sufficiente")
}
else if(v>=21 && v<24){
    console.log("Buono")
}
else if(v>=24 && v<27){
    console.log("Distinto")
}
else if(v>= 27 && v<=29){
    console.log("Ottimo")
}
else if(v===30){
    console.log("Eccellente")
}


//traccia 3
let temperatura = prompt("inserisci la temperatura");
 if (temperatura <-10 ){
    console.log("copriti...ancora ti raffreddi")
}
else if(temperatura <0){
    console.log("non è tanto il freddo quanto l'umidità")
}
else if (temperatura <20){
    console.log("non ci sono più le mezze stagioni")
}
else if(temperatura <30){
    console.log("mi dia una peroni sudata")
}
else if(temperatura >=30 ){
    console.log("lu mare, lu sole, lu ientu")
}















