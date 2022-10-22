let homeScore = 0;
let scoreEl = document.getElementById("score");


function onePoint(){
    homeScore = homeScore + 1;
    scoreEl.textContent = homeScore
}
function twoPoints(){
    homeScore = homeScore + 2;
    scoreEl.textContent = homeScore
}
function threePoints(){
    homeScore = homeScore + 3;
    scoreEl.textContent = homeScore
}

function reset(){
    homeScore = 0
    scoreEl.textContent = 0
}

function undo(){
    homeScore = homeScore + 3;
    scoreEl.textContent = homeScore
}