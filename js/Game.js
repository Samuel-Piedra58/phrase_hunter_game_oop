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
      const letter = elementClicked.textContent;
      // disable the button
      elementClicked.disabled = true;
      if (this.activePhrase.checkLetter(letter)) {
        // if the user guesses correctly add the "chosen" class
        elementClicked.classList.add("chosen");
        // show the game board letter
        this.activePhrase.showMatchedLetter(letter);
        // then call the checkForWin() method to see if the player won!
        if (this.checkForWin() === undefined) {
        }
      } else {
        // if the user does not guess correctly add the "wrong" class
        elementClicked.classList.add("wrong");
        // call removeLife();
        this.removeLife();
      }
    }
  }

  removeLife() {
    // increment the number missed
    this.missed++;
    // switch out the liveHeart with the lostHeart
    getLastLiveHeart().src = "images/lostHeart.png";

    if (this.missed === 5) {
      console.log("You lose for good");
    }

    function getLastLiveHeart() {
      const allLives = Array.prototype.slice.call(
        document.querySelectorAll("#scoreboard ol li")
      );
      const allLiveHearts = allLives
        .map(heart => {
          return heart.querySelector("img");
        })
        .filter(heart => {
          return heart.src.includes("liveHeart");
        });
      return allLiveHearts.pop();
    }
  }
  checkForWin() {
    // check to see if the player has revealed all of the letters in the active phrase
    const lettersNodeList = document.querySelectorAll("#phrase ul li");
    const lettersOnBoard = Array.prototype.slice.call(lettersNodeList);
    return lettersOnBoard.find(letter => {
      return letter.classList.contains("hide");
    });
  }
  gameOver() {
    //TODO
    // display the original start screen overlay
    // depending on the outcome of the game
    //   Update the h1 overlay with a friendly win or lose message
    // replace the overlay "start" CSS class with either a "win" or "lose" CSS Class
  }
}
