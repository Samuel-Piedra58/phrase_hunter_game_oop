/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const phrases = [
  "cheesecake",
  "javascript",
  "coding rocks",
  "treehouse",
  "visual studio"
];

// // Add event listener to the overlay start game button
// TODO: Calling "game.startGame" as the callback, changed "this" to the button instead of the game object.
//   Is the below the best way to resolve this issue, or should i use something like call(), apply(), or bind()
const startGameButton = document.querySelector("#btn__reset");
startGameButton.addEventListener("click", function() {
  game = new Game(phrases);
  game.startGame();

  const keyboard = document.querySelector("#qwerty");
  keyboard.addEventListener("click", game.handleInteraction.bind(game));
});
