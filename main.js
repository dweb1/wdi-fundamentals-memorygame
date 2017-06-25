var cards = [
{
  rank: "Queen",
  suit: "hearts",
  cardImage: src = "images/queen-of-hearts.png"
},
{
  rank: "Queen",
  suit: "diamonds",
  cardImage: src = "images/queen-of-diamonds.png"
},
{
  rank: "King",
  suit: "hearts",
  cardImage: src = "images/king-of-hearts.png"
},
{
  rank: "King",
  suit: "diamonds",
  cardImage: src = "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
  console.log(cardId);
	cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = [];
  }
};

var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard();