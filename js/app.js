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

// TODO:
//  To get exceeds:
//    -Experiement with a transition where when the player wins the game the background of the game board "bubbles" with a green colr
//      if they lose it bubbles with a red color and then the win/lose screen is overlayed
//    -Add a ui effect for when a key is selected it looks like it is actaully being clicked

window.addEventListener("keypress", function(event) {
  let keyPressed = event.charCode;
  const screenOverlay = document.querySelector("#overlay");
  const screenOverlayDisplay = screenOverlay.style.display;

  // convert charCode to lowerCase letter charCode
  if (keyPressed >= 65 && keyPressed <= 90) {
    keyPressed += 32;
  }

  // Check if keypress charcode is a lowercase letter
  if (keyPressed >= 97 && keyPressed <= 122 && game !== undefined) {
    // return the onscreen keyboard button that matches the keypress
    const keys = Array.from(keyboard.querySelectorAll("button"));
    const keyboardButton = keys.find(key => {
      return key.textContent.charCodeAt(0) === keyPressed;
    });
    game.handleInteraction(keyboardButton);
  }
});
