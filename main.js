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

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

flipCard(0);
flipCard(2);
