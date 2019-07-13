/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      "accessor property",
      "data property",
      "object prototype",
      "inheritance",
      "prototype chain"
    ];
    this.activePhrase = null;
  }

  startGame() {
    const screenOverlay = document.querySelector("#overlay");
    // set game's active phrase property to a new phrase object with a random phrase
    this.activePhrase = new Phrase(this.getRandomPhrase());
    // add the phrase letter board to the document
    this.activePhrase.addPhraseToDisplay();

    // remove start screen overlay
    screenOverlay.style.display = "none";
    screenOverlay.classList.remove("win", "lose");
  }

  getRandomPhrase() {
    // returns a random phrase from this.phrases
    const randomNumber = Math.floor(Math.random() * 5);
    return this.phrases[randomNumber];
  }

  handleInteraction() {
    // Check to see if the element clicked was a button element
    if (event.target.tagName === "BUTTON") {
      const key = event.target;
      key.disabled = true;

      if (this.activePhrase.checkLetter(key.textContent)) {
        // if the user guesses correctly add the "chosen" class and show the game board letter
        key.classList.add("chosen");
        this.activePhrase.showMatchedLetter(key.textContent);
        if (this.checkForWin()) {
          this.gameOver();
        }
      } else {
        // if the user does not guess correctly add the "wrong" class and remove a life
        key.classList.add("wrong");
        this.removeLife();
      }
    }
  }

  removeLife() {
    const heartImageNodes = Array.from(
      document.querySelectorAll("#scoreboard ol li")
    );
    const allLiveHeartImages = heartImageNodes
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
    // returns boolean depending on whether or not the player has revealed the whole game board
    const lettersNodeList = document.querySelectorAll("#phrase ul li");
    const lettersOnBoard = Array.from(lettersNodeList);
    const areLettersOnBoardHidden = lettersOnBoard.find(letter => {
      return letter.classList.contains("hide");
    });
    return areLettersOnBoardHidden !== undefined ? false : true;
  }

  gameOver() {
    const screenOverlay = document.querySelector("#overlay");
    const gameOverMessage = document.querySelector("#game-over-message");

    if (this.missed === 5) {
      gameOverMessage.textContent = "You Lost! Better luck next time!";
      screenOverlay.classList.add("lose");
    } else {
      gameOverMessage.textContent = "You Won! You are an expert Hunter!";
      screenOverlay.classList.add("win");
    }
    screenOverlay.classList.remove("start");
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
