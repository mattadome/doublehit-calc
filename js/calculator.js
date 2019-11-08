"use strict";

document.getElementById('move-select').addEventListener("change", vibeCheck)
document.getElementById('sereneGrace').addEventListener("change", vibeCheck)

/*
document.getElementById('txt-twicerow').onkeydown = function(e){
    e.preventDefault();
}
document.getElementById('txt-atleastonce').onkeydown = function(e){
    e.preventDefault();
}
document.getElementById('txt-never').onkeydown = function(e){
    e.preventDefault();
}
Originally prevented text to be typed in the text boxes, now Readonly is being used in HTML */ 



function vibeCheck(event){

    let moveSelect = document.getElementById("move-select").value;
    //console.log('vibe check is a success'); debug code
    //console.log(Object.values(moveSelect)); 

    var probDec = moveSelect/100;

    //serene grace modifier
    if (document.getElementById("sereneGrace").checked == true ){
        if (probDec > 0.5){
            probDec = 0.5
        }
        probDec *=2;
    }

    var calcTwiceRaw = ((probDec**2)*100);
    var calcAtLeastOnceRaw =  (((probDec * (1 - probDec))+(probDec*(1-probDec))+(probDec**2))*100) ;
    var calcNeverRaw = (100-calcAtLeastOnceRaw);



    var calcTwice = Math.round(calcTwiceRaw);
    var calcAtLeastOnce = Math.round(calcAtLeastOnceRaw);
    var calcNever = Math.round(calcNeverRaw);



    document.getElementById('txt-twicerow').value = calcTwice + "%";
    document.getElementById('txt-atleastonce').value = calcAtLeastOnce + "%";
    document.getElementById('txt-never').value = calcNever + "%";

}

