//esercitazione del 21 gennaio
let numero = prompt("numero")
for(let i= 0; i < 11; i++){
    console.log(numero * i)
}

//traccia 2
let numdispari = 0
let sommadispari =0
for(let number = 1; number <= 20; number++){
    if(number % 2==0){
        console.log(number)
    }
    else{
        numdispari++
        // console.log('num dispari vale', numdispari)
        sommadispari += number
        // console.log('somma dispari vale', sommadispari)
    }
}
console.log(sommadispari / numdispari)

//traccia 3

do{
    let utente = prompt('inserisci un numero per scegliere la tua bevanda:\n1.Acqua; \n 2.Coca-Cola \n 3. Birra')
    if(utente == 1){
        console.log("E’ stata selezionata l’acqua")
    }
    else if(utente == 2){
        console.log("E’ stata selezionata coca cola")
    }
    else if(utente==3){
        console.log("E’ stata selezionata birra")
    }
    
} while(utente<1 ||utente >3);