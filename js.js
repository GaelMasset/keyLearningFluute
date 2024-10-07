//Partie Page Notes
let devantTxtSelectOctave = "Octave selectionné : ";
let selectedOctave = 0;
let txtInfoOctave = document.getElementById("txtInfoOctave");

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
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\naucun";
            break;
        case 1:
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\npremier octave";
            break;
        case 2:
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\ndeuxieme octave";
            break;
        case 3:
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\ntroisieme octave";
            break;
        case 4:
            txtInfoOctave.innerHTML = devantTxtSelectOctave + "\ntout les octaves";
            break;
    }
}

let txtNote = document.getElementById("texteNote");
const premOctave = ["Do#1", "Re#1", "Mi#1", "Fa#1", "Sol#1", "La#1", "Si#1"];
const deuxOctave = ["Do#2", "Re#2", "Mi#2", "Fa#2", "Sol#2", "La#2", "Si#2"];
const troiOctave = ["Do#3", "Re#3", "Mi#3", "Fa#3", "Sol#3", "La#3", "Si#3"];

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

//Fin Page notes