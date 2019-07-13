/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
    // populate the gameboard with this.phrase
    const letters = this.phrase
      .split("")
      .map(letter => {
        if (letter === " ") {
          return `<li class="space"> </li>`;
        } else {
          return `<li class="hide letter ${letter}">${letter}</li>`;
        }
      })
      .join("");

    const gameBoard = document.querySelector("#phrase ul");
    gameBoard.innerHTML = letters;
  }

  checkLetter(guessedLetter) {
    // returns boolean if phrase includes the guessed letter
    return this.phrase.includes(guessedLetter);
  }

  showMatchedLetter(guessedLetter) {
    //  displays all matching letters to the game board
    const lettersOnGameBoard = document.querySelectorAll("#phrase ul li");
    lettersOnGameBoard.forEach(function(letter) {
      if (letter.classList.contains(guessedLetter)) {
        letter.classList.add("show");
        letter.classList.remove("hide");
        letter.classList.add("remove-border");
      }
    });
  }
}
