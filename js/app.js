/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameButton = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");

startGameButton.addEventListener(
  "click",
  function() {
    game = new Game();
    game.startGame();
  },
  false
);

keyboard.addEventListener(
  "click",
  function(event) {
    if (event.target.tagName === "BUTTON") {
      game.handleInteraction(event.target);
    }
  },
  false
);

window.addEventListener("keypress", function(event) {
  let keyPressed = event.charCode;
  const screenOverlay = document.querySelector("#overlay");
  const screenOverlayDisplay = screenOverlay.style.display;

  // convert charCode to lowerCase letter charCode
  if (keyPressed >= 65 && keyPressed <= 90) {
    keyPressed += 32;
  }

  // Check if keypress charCode is a lowercase letter
  if (
    keyPressed >= 97 &&
    keyPressed <= 122 &&
    screenOverlayDisplay === "none"
  ) {
    // return the onscreen keyboard button that matches the keypress
    const keys = Array.from(keyboard.querySelectorAll("button"));
    const keyboardButton = keys.find(key => {
      return key.textContent.charCodeAt(0) === keyPressed;
    });
    game.handleInteraction(keyboardButton);
  }
});
