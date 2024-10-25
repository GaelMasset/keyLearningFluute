

let isPlaying = false;
let intervalleNote = 1;
let choixIntervalleNote = 1;
let boutonPlay = document.getElementById("boutonPlay");
let txtBoutonPlay = document.getElementById("txtBoutonPlay");
let txtNote = document.getElementById("txtNote");

//Appuyer sur le bouton play alterne le isPlaying entre true et false
boutonPlay.addEventListener("click", function(){
    if(isPlaying==false){
        isPlaying=true;
        txtBoutonPlay.innerHTML = "Stop";
    }
    else{
        isPlaying=false;
        txtBoutonPlay.innerHTML = "Play";
    }
});

let bouton1oct = document.getElementById("bouton1oct");
let bouton2oct = document.getElementById("bouton2oct");
let bouton3oct = document.getElementById("bouton3oct");
let boutonAlter = document.getElementById("boutonAlter");

bouton1oct.addEventListener("click", function(){
    if(avecOct1){
        avecOct1 = false;
        bouton1oct.style.backgroundColor = "red";
    } else{
        avecOct1 = true;
        bouton1oct.style.backgroundColor = "green";
    }
});
bouton2oct.addEventListener("click", function(){
    if(avecOct2){
        avecOct2 = false;
        bouton2oct.style.backgroundColor = "red";
    } else{
        avecOct2 = true;
        bouton2oct.style.backgroundColor = "green";
    }
});
bouton3oct.addEventListener("click", function(){
    if(avecOct3){
        avecOct3 = false;
        bouton3oct.style.backgroundColor = "red";
    } else{
        avecOct3 = true;
        bouton3oct.style.backgroundColor = "green";
    }
});
boutonAlter.addEventListener("click", function(){
    if(avecAlter){
        avecAlter = false;
        boutonAlter.style.backgroundColor = "red";
    } else{
        avecAlter = true;
        boutonAlter.style.backgroundColor = "green";
    }
});


let boutTempsPlus = document.getElementById("boutTempsPlus");
let boutTempsMoins = document.getElementById("boutTempsMoins");
boutTempsMoins.addEventListener("click", function(){
    if(choixIntervalleNote >= 1)choixIntervalleNote --;
    updateTxtTemps();
});
boutTempsPlus.addEventListener("click", function(){
    choixIntervalleNote ++;
    updateTxtTemps();

});

function updateTxtTemps(){
    document.getElementById("txtTempsNote").innerHTML = "Temps choisi : " + choixIntervalleNote;
}

const interval = setInterval(function(){
    if(!isPlaying) return;

    if(intervalleNote == 0){
        rollNewNote();
        intervalleNote = choixIntervalleNote;
    }
    intervalleNote--;
}, 1000);

const octave1 = ["Do1", "Re1", "Mi1", "Fa1", "Sol1", "La1", "Si1"];
const octave1alters = ["Do1#", "Re1#", "Mi1#", "Fa1#", "Sol1#", "La1#", "Si1#"];

const octave2 = ["Do2", "Re2", "Mi2", "Fa2", "Sol2", "La2", "Si2"];
const octave2alters = ["Do2#", "Re2#", "Mi2#", "Fa2#", "Sol2#", "La2#", "Si2#"];

const octave3 = ["Do3", "Re3", "Mi3", "Fa3", "Sol3", "La3", "Si3"];
const octave3alters = ["Do3#", "Re3#", "Mi3#", "Fa3#", "Sol3#", "La3#", "Si3#"];

let avecAlter = false;
let avecOct1 = false;
let avecOct2 = false;
let avecOct3 = false;
let listeOctave = [];

function rollNewNote(){
    listeOctave = [];

    if (avecOct1) {
        if (avecAlter) {
            listeOctave = listeOctave.concat(octave1, octave1alters);
        } else {
            listeOctave = listeOctave.concat(octave1);
        }
    }

    if (avecOct2) {
        if (avecAlter) {
            listeOctave = listeOctave.concat(octave2, octave2alters);
        } else {
            listeOctave = listeOctave.concat(octave2);
        }
    }

    if (avecOct3) {
        if (avecAlter) {
            listeOctave = listeOctave.concat(octave3, octave3alters);
        } else {
            listeOctave = listeOctave.concat(octave3);
        }
    }

    var randomNumber = Math.floor(Math.random() * listeOctave.length);
    txtNote.innerHTML = listeOctave[randomNumber];
}