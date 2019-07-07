/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor(phrases) {
    this.missed = 0;
    this.phrases = phrases;
    this.activePhrase = null;
  }

  startGame() {
    const screenOverlay = document.querySelector("#overlay");
    screenOverlay.style.display = "none";

    const randomPhrase = this.getRandomPhrase();
    this.activePhrase = new Phrase(randomPhrase);

    this.activePhrase.addPhraseToDisplay();
  }
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * 5);
    return this.phrases[randomNumber];
  }

  handleInteraction() {
    // Check to see if the element clicked was a button element
    const elementClicked = event.target;
    if (elementClicked.tagName === "BUTTON") {
      elementClicked.disabled = true;
      const letter = elementClicked.textContent;
      if (this.activePhrase.checkLetter(letter)) {
        // if the user guesses correctly add the "chosen" class
        // show the game board letter
        // disable the button
        elementClicked.classList.add("chosen");
        this.activePhrase.showMatchedLetter(letter);
      } else {
        // if the user does not guess correctly add the "wrong" class
        elementClicked.classList.add("wrong");
      }
    }
  }

  removeLife() {}
  checkForWin() {}
  gameOver() {}
}
