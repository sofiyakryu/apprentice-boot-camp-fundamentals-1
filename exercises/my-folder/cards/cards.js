class Card {
  constructor(suit, faceValue) {
    this.suit = suit;
    this.faceValue = faceValue;
  }
}

// createCard() {

// }

const exampleCard = new Card("hearts", 6);

let deck = new Array([]);

console.log(exampleCard.suit + " of " + exampleCard.faceValue);

module.exports = {
  Card: Card,
};
