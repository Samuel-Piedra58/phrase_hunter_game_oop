/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let keyboardListenerAdded = false;
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
const keyboard = document.querySelector("#qwerty");

startGameButton.addEventListener("click", function() {
  const game = new Game(phrases);
  game.startGame();

  if (!keyboardListenerAdded) {
    keyboard.addEventListener("click", game.handleInteraction.bind(game));
    keyboardListenerAdded = true;
  }
});

// // TODO

// -- It appears that the game is not appropriately being reset!!!!
// -- after the first game if the player elects to play again, then the game does not seem to create a new Object
// -- but appearts to keep playing from the old game
