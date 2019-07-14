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
    // Begins game by selecting a random phrase and
    // displaying it to the user and remove start screen overlay
    const randomPhrase = this.getRandomPhrase();
    this.activePhrase = new Phrase(randomPhrase);
    this.activePhrase.addPhraseToDisplay();

    const screenOverlay = document.querySelector("#overlay");

    function screenOverlayAnimation() {
      const startGameButton = document.querySelector("#btn__reset");
      startGameButton.disabled = true;
      const classes = ["win", "lose", "start", "fadeOut", "fadeIn", "animated"];
      screenOverlay.style.display = "none";
      screenOverlay.classList.remove(...classes);
      screenOverlay.removeEventListener("animationend", screenOverlayAnimation);
    }

    // fade's out the screen overlay
    screenOverlay.addEventListener("animationend", screenOverlayAnimation);
    screenOverlay.classList.add("fadeOut", "animated");
  }

  getRandomPhrase() {
    // returns a lowercase random phrase from this.phrases
    const randomNumber = Math.floor(Math.random() * 5);
    return this.phrases[randomNumber].toLowerCase();
  }

  handleInteraction(key) {
    // handles the user guesses
    // disables key if not disabled,
    // checks if letter exists on board and shows letter
    // if letter existed will check if player won
    // else will increment this.missed and remove a life
    if (!key.disabled) {
      key.disabled = true;
      const guessedLetter = key.textContent;
      const isLetterOnGameBoard = this.activePhrase.checkLetter(guessedLetter);

      if (isLetterOnGameBoard) {
        key.classList.add("chosen");
        this.activePhrase.showMatchedLetter(guessedLetter);
        if (this.checkForWin()) {
          this.gameOver(true);
        }
      } else {
        key.classList.add("wrong");
        this.removeLife();
        if (this.missed >= 5) {
          this.gameOver(false);
        }
      }
    }
  }

  removeLife() {
    // increment this.missed value
    // Removes a life from the scoreboard
    this.missed++;
    const heartNodeList = Array.from(
      document.querySelectorAll("#scoreboard ol li")
    );
    const allLiveHeartImages = heartNodeList
      .map(heart => heart.querySelector("img"))
      .filter(heart => heart.src.includes("liveHeart"));
    const lastLiveHeartImage = allLiveHeartImages.pop();
    lastLiveHeartImage.src = "images/lostHeart.png";
  }

  checkForWin() {
    // returns boolean depending on whether or not the player has revealed the whole game board
    const lettersNodeList = document.querySelectorAll("#phrase ul li");
    const lettersOnBoard = Array.from(lettersNodeList);
    const foundHiddenLetter = lettersOnBoard.find(letter => {
      return letter.classList.contains("hide");
    });
    return foundHiddenLetter !== undefined ? false : true;
  }

  gameOver(didPlayerWin) {
    // Displays the game over message depending on if the user won or lost
    const screenOverlay = document.querySelector("#overlay");
    const gameOverMessage = document.querySelector("#game-over-message");

    if (!didPlayerWin) {
      gameOverMessage.textContent =
        "You're Out of Lives! Better luck next time!";
      screenOverlay.classList.add("lose");
    } else {
      gameOverMessage.textContent = "You Won! You're an Expert Hunter!";
      screenOverlay.classList.add("win");
    }

    // fade's in the screen overlay
    screenOverlay.addEventListener("animationend", resetGame);
    screenOverlay.style.display = "";
    screenOverlay.classList.add("fadeIn", "animated");

    function resetGame() {
      // Reset the Gameboard after animation ends
      // clear <li> elements on game board
      const letterBoard = document.querySelector("#phrase ul");
      letterBoard.innerHTML = "";

      // re-enable keys and add/remove the appropriate clases
      const keyboardKeys = document.querySelectorAll("#qwerty div button");
      keyboardKeys.forEach(key => {
        key.classList.add("key");
        key.classList.remove("chosen", "wrong");
        key.disabled = false;
      });

      // replace the lost heart images with the live heart images
      const heartLives = document.querySelectorAll("#scoreboard ol li");
      heartLives.forEach(heart => {
        heart.querySelector("img").src = "images/liveHeart.png";
      });
      startGameButton.disabled = false;
      screenOverlay.removeEventListener("animationend", resetGame);
    }
  }
}
