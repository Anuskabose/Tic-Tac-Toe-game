# Tic-Tac-Toe-game
To complete this project, I followed a structured approach that involved creating a web-based Tic-Tac-Toe game using HTML, CSS, and JavaScript:

1. **Initial Setup:**
   - I began by setting up the project's HTML structure to create the game board, mode selection (human or computer), and elements for displaying messages and the score.

2. **Game Logic:**
   - I implemented the core game logic, allowing players to take turns and make moves by clicking on the grid cells. To prevent further interaction with marked cells, I added a "no-hover" class.
   - I created a function to check for a winner by evaluating winning combinations. If a player wins, I display a message and update the score.

3. **Player Switching:**
   - I ensured that the game alternates between players (X and O) after each valid move, creating an engaging competitive experience.

4. **Restart Feature:**
   - I added a restart button to reset the game board and allow users to start a new game. This involved clearing the cells, resetting the current player to X, and indicating that the game is not over.

5. **Game Modes:**
   - I introduced the choice of playing against a human or the computer, providing radio buttons to select the desired mode. In computer mode, the computer AI makes random moves.

6. **Score Tracking:**
   - I implemented a scoreboard to keep track of the score for both players (X and O). The score updates whenever a winner is determined.

7. **Responsive Design:**
   - I ensured that the game is visually appealing and responsive by styling it with CSS. Winning cells are highlighted for a better user experience.

8. **User Experience:**
   - To make the game engaging and user-friendly, I incorporated features like clear messages, a smooth player switch, and a delay for the computer's move to enhance gameplay.

The result is an interactive Tic-Tac-Toe game that offers multiple game modes, keeps track of scores, and provides a complete gaming experience. The code is well-organized and adheres to best practices for web development.
Certainly! Let's break down the JavaScript part of the Tic-Tac-Toe game into simpler terms:

1. **Initialization and Setup:**
   - We start by getting references to different elements in our HTML, like the game board, restart button, radio buttons for game mode, message area, and the score display.

2. **Game Logic:**
   - We create a grid of 9 cells (3x3) for the game board using HTML and CSS.
   - Each cell can be clicked, and when it's clicked, we check if it's empty and the game is not over.
   - If those conditions are met, we mark the cell with the current player's symbol (either X or O), and we make it unclickable for the rest of the game (no-hover class is added).
   - After marking a cell, we check if there's a winner. If there is a winner, we display a message and update the score.

3. **Player Switching:**
   - We toggle between X and O as the current player. For example, if X just made a move, it becomes O's turn, and vice versa.

4. **Winning Check:**
   - We have an array of winning combinations. These are the patterns of cells that result in a win.
   - We go through these combinations to check if any of them have the same symbol (X or O) in all three cells. If so, we declare the current player as the winner, highlight the winning cells, and update the score.
   - If all cells are filled and there's no winner, we declare it a draw.

5. **Restarting the Game:**
   - The restart button allows us to reset the game. All cells become empty, and the game can be played again. The current player is set to X, and the game is not over.

6. **Game Modes:**
   - You can choose to play against another human or the computer using radio buttons. If you choose the computer mode, the computer will make random moves for the opponent (O).

7. **Score Display:**
   - The game keeps track of the score for both players (X and O) and updates the score display whenever there's a winner.

8. **Initializing the Score:**
   - We set the initial score to 0 for both players.

9. **Playing Against the Computer:**
   - If you choose to play against the computer, it makes random moves (just for demonstration purposes) when it's the computer's turn. It also adds the no-hover class to the cells, making them unclickable.

10. **Updating the Score Display:**
    - We have two elements to display the score for X and O. We update these elements whenever the score changes.

11. **Handling Mode Change:**
    - We listen for changes in the game mode (human or computer) and update the game behavior accordingly. If you switch to the computer mode and it's the computer's turn, it makes a move.

