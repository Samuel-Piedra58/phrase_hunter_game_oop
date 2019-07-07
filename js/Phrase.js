/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
    const letters = this.phrase
      .split("")
      .map(createGameLi)
      .join("");

    const letterBoard = document.querySelector("#phrase ul");
    letterBoard.innerHTML = letters;

    function createGameLi(character) {
      if (character === " ") {
        return `<li class="space"> </li>`;
      } else {
        return `<li class="hide letter ${character}">${character}</li>`;
      }
    }
  }
  checkLetter(guess) {
    return this.phrase.includes(guess);
  }
  showMatchedLetter(guess) {
    const lettersOnBoard = document.querySelectorAll("#phrase ul li");
    lettersOnBoard.forEach(function(letter) {
      if (letter.classList.contains(guess)) {
        letter.classList.add("show");
        letter.classList.remove("hide");
      }
    });
  }
}
