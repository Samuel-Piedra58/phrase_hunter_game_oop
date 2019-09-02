# Treehouse Techdegree Project 04

This project is part of the Treehouse Full Stack JavaScript Techdegree.

A fun interactive phrase guessing game! The phrases to guess are related to the paradigm of programming deployed in this project, Object-Oriented JavaScript. The game will test your knowledge of principles and terms related to object oriented programming in JavaScript. Programmer Beware!

## Phrase Hunter

A phrase guessing game where the user guess's letters to unveil a random hidden phrase!

![Phrase Hunter Game Board](https://github.com/Samuel-Piedra58/techdegree-project-04/blob/master/project_imgs/phrase_hunter_game_board.jpg)

### Understand the rules of the game (courtesy of teamtreehouse):

- The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.

- The player clicks an onscreen keyboard to guess letters in the phrase.

- The letter is disabled on the onscreen keyboard and a player can't select that letter again.
- If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).

- If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
- The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.

### Style and Script Enhancements in Addition to the Basic Requirements:

- When the player selects the "Start Game" button (or chooses to play again) the starting screen overlay will "fade out" of view. This was made posssible by utilizing [Animate.css](https://daneden.github.io/animate.css/) and the "fadeOut" css class.

- After the player either wins or loses the game an alternative "win" or "lose" screen overlay is "faded in" to view. This was made posssible by utilizing [Animate.css](https://daneden.github.io/animate.css/) and the "fadeIn" css class.

- Not only can the player utilize the on-screen keyboard interface to select letters, but they can also use their keyboard to guess any letter!

- Once the player guess's a correct letter a CSS Animation is used to scale the guessed game board letter(s) up and down quickly along with the font-size! The player will also see the background color of the game board letter(s) transition.
