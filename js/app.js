/*
 * Create a list that holds all of your cards
 */
 /*
Global Variables
 */
 const deck = document.querySelector('.deck');
 const stars = Array.from(document.querySelectorAll('.fa-star'));   // a variable to hold the starts in an array
 // let numberOfStars = 3;
 let moves = 0;
 let time = 0;
 let timerId;
 let timerOff = true;
 let flippedCards = [];



let allCards =Array.from(document.querySelectorAll('.card'));
shuffle(allCards);
for (card of allCards){
  deck.appendChild(card);
}



deck.addEventListener('click', event => {
  let clickedCard = event.target;
  if (clickedCard.classList.contains('card') &&
      flippedCards.length < 2 &&
      !flippedCards.includes(clickedCard) &&
      !clickedCard.classList.contains('match')){
    flip(clickedCard);
    addToflippedCards(clickedCard);
    if(flippedCards.length === 2){
      compare(deck);
    }
  }
  if (timerOff){
    timer();
    timerOff = false;
  }
});

// Function to open and show a clicked card
function flip(card){
 card.classList.toggle('open');
 card.classList.toggle('show');
}

// Function to push a clicked card to an Array (the "flippedCards" Array)
function addToflippedCards(card) {
  flippedCards.push(card);
  console.log(flippedCards)
}

// Function to check if the clicked cards match

function compare(){
  if (flippedCards[0].firstElementChild.className === flippedCards[1].firstElementChild.className){
    flippedCards[0].classList.toggle('match');
    flippedCards[1].classList.toggle('match');
    flippedCards = [];
    movesCounter ();
  } else {
      setTimeout(() => {
        flip(flippedCards[0]);
        flip(flippedCards[1]);
        flippedCards = [];
      }, 1000);
        movesCounter ();
  }
}

//function to increase the moves counter and change the moves HTML
function movesCounter(){
  moves++;
  const movesHTML = document.querySelector('.moves');
  movesHTML.innerHTML = moves;
  if(moves === 12 || moves === 15 || moves === 18){
    removeStar();
  }
}


//function to remove a start (when needed)


function removeStar(){
  stars.pop().style.display = "none";
}

function timer(){
   timerId = setInterval(() => {
   time++;
   displayTimer();
  },1000);
}


function stopTimer(){
   clearInterval(timerId);
}


function displayTimer(){
  let timerElm = document.querySelector('.timer');
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60);
  if (seconds < 10){
  timerElm.innerHTML = `${minutes}:0${seconds}`;
  }else{
    timerElm.innerHTML = `${minutes}:${seconds}`;
  }
}

// a function to show the last score modal
function showScoreModal() {
  let scoreTime = document.querySelector('.modal-time');
  let scoreStars = document.querySelector('.modal-stars');
  let scoreMoves = document.querySelector('.modal-moves');
  scoreTime.innerHTML = `Time = ${time}`;
  scoreMoves.innerHTML = `Moves = ${moves}`;
  scoreStars.innerHTML = `Stars = ${stars.length}`;

  let modal = document.querySelector('#score-modal');
  modal.style.display = "block";
}
// todo:  add an addEventListener to the :
// -modal X
// -modal playagain
// -reply button

// Extra:
// -better style the modal
// -show an actual start rather than a number

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
