

let isPlaying = false;
let intervalleNote = 5;
let choixIntervalleNote = 5;
let boutonPlay = document.getElementById("boutonPlay");
let txtBoutonPlay = document.getElementById("");
boutonPlay.addEventListener("click", function(){
    if(isPlaying=false){
        isPlaying=true;
        boutonPlay.innerHTML = "<span>Stop</span>";
    }
    else{
        isPlaying=false;
        boutonPlay.innerHTML = "Play";
    }
});

const interval = setInterval(function(){
    if(intervalleNote == 0){
        rollNewNote();
        intervalleNote = choixIntervalleNote;
    }
    intervalleNote--;
}, 1000);

function rollNewNote(){

}