//Partie Page Notes
let devantTxtSelectOctave = "Octave selectionné : ";
let selectedOctave = 0;
let txtInfoOctave = document.getElementById("txtInfoOctave");
let alterations = false;
let isPlaying = false;

function selPremOctave(){
    selectedOctave = 1;
    updateTxt();
}
function selDeuxOctave(){
    selectedOctave = 2;
    updateTxt();
}
function selTroisOctave(){
    selectedOctave = 3;
    updateTxt();
}
function selToutOctave(){
    selectedOctave = 4;
    updateTxt();
}

function updateTxt(){
    switch (selectedOctave){
        case 0:
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\naucun" + withAlterations();
            break;
        case 1:
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\npremier octave" + withAlterations();
            break;
        case 2:
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\ndeuxieme octave" + withAlterations();
            break;
        case 3:
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\ntroisieme octave" + withAlterations();
            break;
        case 4:
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\ntout les octaves" + withAlterations();
            break;
    }
}

function withAlterations(){
    if(alterations){
        return " avec alterations";
    } else return " sans alterations";
}

setInterval(playNotes, 1000);
let decompte = 10;
function playNotes(){
    if(!isPlaying) return;
    
    decompte --;
    if(decompte <= 0) {
        nextSon();
        decompte = tempsSeconde;
    }
}

function play(){
    isPlaying = true;
}

let txtNote = document.getElementById("texteNote");
let premOctave = ["Do1", "Re1", "Mi1", "Fa1", "Sol1", "La1", "Si1"];
let deuxOctave = ["Do2", "Re2", "Mi2", "Fa2", "Sol2", "La2", "Si2"];
let troiOctave = ["Do3", "Re3", "Mi3", "Fa3", "Sol3", "La3", "Si3"];

function nextSon(){
    let valAleatoire = Math.floor(Math.random() * premOctave.length);
    
    switch (selectedOctave){
        case 0:
            txtNote.innerHTML = "Choisissez un type d'exercice !";
            break;
        case 1:
            txtNote.innerHTML = premOctave[valAleatoire];
            break;
        case 2:
            txtNote.innerHTML = deuxOctave[valAleatoire];
            break;  
        case 3:
            txtNote.innerHTML = troiOctave[valAleatoire];
            break; 
        case 4:
            let octaveAleatoire = Math.floor(Math.random() * 3);
            switch(octaveAleatoire){
                case 0:
                txtNote.innerHTML = premOctave[valAleatoire];
                break;
            case 1:
                txtNote.innerHTML = deuxOctave[valAleatoire];
                break;  
            case 2:
                txtNote.innerHTML = troiOctave[valAleatoire];
                break; 
            }
            break;      
    }
}

function enableAlterations(){
    premOctave = ["Do1", "Re1", "Mi1", "Fa1", "Sol1", "La1", "Si1","Do#1", "Re#1", "Mi#1", "Fa#1", "Sol#1", "La#1", "Si#1"];
    deuxOctave = ["Do2", "Re2", "Mi2", "Fa2", "Sol2", "La2", "Si2","Do#2", "Re#2", "Mi#2", "Fa#2", "Sol#2", "La#2", "Si#2"];
    troiOctave = ["Do3", "Re3", "Mi3", "Fa3", "Sol3", "La3", "Si3","Do#3", "Re#3", "Mi#3", "Fa#3", "Sol#3", "La#3", "Si#3"];
    alterations = true;
    updateTxt();
}
function disableAlterations(){
    premOctave = ["Do1", "Re1", "Mi1", "Fa1", "Sol1", "La1", "Si1"];
    deuxOctave = ["Do2", "Re2", "Mi2", "Fa2", "Sol2", "La2", "Si2"];
    troiOctave = ["Do3", "Re3", "Mi3", "Fa3", "Sol3", "La3", "Si3"];
    alterations = false;
    updateTxt();
}



let txtTemps = document.getElementById("tempsReglage");
let tempsSeconde = 10;
function augmenterTemps(){
    tempsSeconde +=1;
    updateTxtTemps();
}
function reduireTemps(){
    tempsSeconde -=1;
    updateTxtTemps();
}
function updateTxtTemps(){
    txtTemps.innerHTML = tempsSeconde + " secondes"
}

//Fin Page notes