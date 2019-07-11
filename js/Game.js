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
    // get a random phrase
    const randomPhrase = this.getRandomPhrase();
    // set game's active phrase property to a new phrase object with a new random phrase
    this.activePhrase = new Phrase(randomPhrase);
    // add the phrase letter board to the document
    this.activePhrase.addPhraseToDisplay();
    // add event listerner
    // remove start screen overlay
    screenOverlay.style.display = "none";
    screenOverlay.classList.remove("win");
    screenOverlay.classList.remove("lose");
  }

  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * 5);
    return this.phrases[randomNumber];
  }

  handleInteraction() {
    // Check to see if the element clicked was a button element
    if (event.target.tagName === "BUTTON") {
      console.log(event.target);
      const key = event.target;
      const guessedLetter = key.textContent;
      // disable the keyboard button
      key.disabled = true;
      if (this.activePhrase.checkLetter(guessedLetter)) {
        // if the user guesses correctly add the "chosen" class
        key.classList.add("chosen");
        // show the game board letter
        this.activePhrase.showMatchedLetter(guessedLetter);
        // then call the checkForWin() method to see if the player won!
        if (this.checkForWin() === undefined) {
          this.gameOver();
        }
      } else {
        // if the user does not guess correctly add the "wrong" class
        key.classList.add("wrong");
        // call removeLife();
        this.removeLife();
      }
    }
  }

  removeLife() {
    const allHeartImagesNodeList = Array.prototype.slice.call(
      document.querySelectorAll("#scoreboard ol li")
    );
    const allLiveHeartImages = allHeartImagesNodeList
      .map(heart => {
        return heart.querySelector("img");
      })
      .filter(heart => {
        return heart.src.includes("liveHeart");
      });

    // switch out the liveHeart with the lostHeart
    const lastLiveHeartImage = allLiveHeartImages.pop();
    lastLiveHeartImage.src = "images/lostHeart.png";

    this.missed++;
    if (this.missed === 5) {
      this.gameOver();
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
    const screenOverlay = document.querySelector("#overlay");
    const gameOverMessage = document.querySelector("#game-over-message");
    screenOverlay.classList.remove("start");

    if (this.missed === 5) {
      gameOverMessage.textContent = "You Lost! Better luck next time!";
      screenOverlay.classList.add("lose");
    } else {
      gameOverMessage.textContent = "You Won! You are an expert Hunter!";
      screenOverlay.classList.add("win");
    }
    screenOverlay.style.display = "";

    resetGame();
    function resetGame() {
      const letterBoard = document.querySelector("#phrase ul");
      const keyboardKeys = document.querySelectorAll("#qwerty div button");
      const heartLives = document.querySelectorAll("#scoreboard ol li");
      letterBoard.innerHTML = "";
      keyboardKeys.forEach(key => {
        key.classList.add("key");
        key.classList.remove("chosen");
        key.classList.remove("wrong");
        key.disabled = false;
      });
      heartLives.forEach(heart => {
        heart.querySelector("img").src = "images/liveHeart.png";
      });
    }
  }
}
