/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startGameButton = document.querySelector("#btn__reset");
const keyboard = document.querySelector("#qwerty");

startGameButton.addEventListener("click", function() {
  game = new Game();
  game.startGame();
});

keyboard.addEventListener("click", function() {
  game.handleInteraction();
});
