let homePts = 0;
let homeScore = document.getElementById("home-score");

let homeFoulPts = 0;
let homeFoulScore = document.getElementById("home-foul-score");

let pdPts = 0;
let pdScore = document.getElementById("period-score");

let guestPts = 0;
let guestScore = document.getElementById("guest-score");

let guestFoulPts = 0;
let guestFoulScore = document.getElementById("guest-foul-score");

function homeOnePoint(){
homePts = homePts + 1;
homeScore.textContent = homePts
}
function homeTwoPoints(){
homePts = homePts + 2;
homeScore.textContent = homePts
}
function homeThreePoints(){
homePts = homePts + 3;
homeScore.textContent = homePts
}
function homeReset(){
homePts = 0
homeScore.textContent = 0
}
function homeUndo(){
homePts = homePts + 3;
homeScore.textContent = homePts
}

function homeFoulOne(){
homeFoulPts = homeFoulPts + 1;
homeFoulScore.textContent = homeFoulPts
}
function homeFoulReset(){
homeFoulPts = 0
homeFoulScore.textContent = 0
}

function periodPoint(){
pdPts = pdPts + 1;
pdScore.textContent = pdPts
}
function periodReset(){
pdPts = 0
pdScore.textContent = 0
}

function guestOnePoint(){
guestPts = guestPts + 1;
guestScore.textContent = guestPts
}
function guestTwoPoints(){
guestPts = guestPts + 2;
guestScore.textContent = guestPts
}
function guestThreePoints(){
guestPts = guestPts + 3;
guestScore.textContent = guestPts
}
function guestReset(){
guestPts = 0
guestScore.textContent = 0
}
function guestUndo(){
guestPts = guestPts + 3;
guestScore.textContent = guestPts
}
    
function guestFoulOne(){
guestFoulPts = guestFoulPts + 1;
guestFoulScore.textContent = guestFoulPts
}
function guestFoulReset(){
guestFoulPts = 0
guestFoulScore.textContent = 0
}  