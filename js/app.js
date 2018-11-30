/*
 * Create a list that holds all of your cards
 */
let flippedCards = [];
const deck = document.querySelector('.deck');
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
   //  if(flippedCards.includes(clickedCard)){
   //    return;
   //  }else{
   //  addToflippedCards(clickedCard);
   // }



});

// Function to open and show a clicked card
function flip(card){
 card.classList.toggle('open');
 card.classList.toggle('show');
}

// Function to push a clicked card to an Array
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
  } else {
      setTimeout(() => {
        flip(flippedCards[0]);
        flip(flippedCards[1]);
        flippedCards = [];
      }, 1000);
  }
}
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
