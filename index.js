let homeScore = document.getElementById("score-home");
let guestScore = document.getElementById("score-guest")
let scoreHomePoint = 0;
let scoreGuestPoint = 0


//HOME SCORES
function add1Home() {
   scoreHomePoint += 1;
   homeScore.textContent = scoreHomePoint;
}

function add2Home() {
   scoreHomePoint += 2;
   homeScore.textContent = scoreHomePoint;
}

function add3Home() {
   scoreHomePoint += 3;
   homeScore.textContent = scoreHomePoint;
}


//GUEST SCORES
function add1Guest() {
   scoreGuestPoint += 1;
   guestScore.textContent = scoreGuestPoint;
}

function add2Guest() {
   scoreGuestPoint += 2;
   guestScore.textContent = scoreGuestPoint;
}

function add3Guest() {
   scoreGuestPoint += 3;
   guestScore.textContent = scoreGuestPoint;
}


//RESET FUNCTION
function reset() {
   scoreHomePoint = 0;
   scoreGuestPoint = 0;

   homeScore.textContent = scoreHomePoint;
   guestScore.textContent = scoreGuestPoint;
}