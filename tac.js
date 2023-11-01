document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const restartButton = document.getElementById("restart");
    const modeRadios = document.querySelectorAll('input[name="mode"]');
    const cells = [];
    const message = document.getElementById("message");
    const playerXScore = document.getElementById("playerXScore");
    const playerOScore = document.getElementById("playerOScore");

    let currentPlayer = "X";
    let gameOver = false;
    let isComputerPlayer = false;
    let scores = { X: 0, O: 0 };

    // Create the game board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = i;
        cell.addEventListener("click", handleCellClick);
        cells.push(cell);
        board.appendChild(cell);
    }

    // Handle cell click
    function handleCellClick(event) {
        const cell = event.target;

        if (cell.innerText === "" && !gameOver) {
            cell.innerText = currentPlayer;
            cell.classList.add("no-hover");
            checkWinner();

            if (!gameOver) {
                if (isComputerPlayer) {
                    playComputerTurn();
                } else {
                    togglePlayer();
                }
            }
        }
    }

    // Toggle between X and O
    function togglePlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    // Check for a winner
    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
                cells[a].classList.add("winner");
                cells[b].classList.add("winner");
                cells[c].classList.add("winner");
                gameOver = true;
                scores[currentPlayer]++;
                updateScore();
                message.innerText = `Player ${currentPlayer} wins!`;
                return;
            }
        }

        if ([...cells].every(cell => cell.innerText)) {
            gameOver = true;
            message.innerText = "It's a draw!";
        }
    }

    // Restart the game
    restartButton.addEventListener("click", () => {
        cells.forEach(cell => {
            cell.innerText = "";
            cell.classList.remove("winner", "no-hover");
        });
        currentPlayer = "X";
        gameOver = false;
        message.innerText = "";
        isComputerPlayer = getSelectedMode() === "computer";
        if (isComputerPlayer && currentPlayer === "O") {
            playComputerTurn();
        }
    });

    // Get the selected game mode
    function getSelectedMode() {
        return Array.from(modeRadios).find(radio => radio.checked).value;
    }

    // Play a random move for the computer
    function playComputerTurn() {
        if (getSelectedMode() === "computer" && !gameOver) {
            const emptyCells = cells.filter(cell => cell.innerText === "");
            if (emptyCells.length > 0) {
                const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
                setTimeout(() => {
                    randomCell.innerText = currentPlayer;
                    randomCell.classList.add("no-hover");
                    checkWinner();
                    togglePlayer();
                }, 1000); // Delay computer's move for better user experience
            }
        }
    }

    // Handle mode change
    modeRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            isComputerPlayer = getSelectedMode() === "computer";
            if (isComputerPlayer && currentPlayer === "O") {
                playComputerTurn();
            }
        });
    });

    // Update the score display
    function updateScore() {
        playerXScore.innerText = `Player X: ${scores.X}`;
        playerOScore.innerText = `Player O: ${scores.O}`;
    }

    // Initialize the score display
    updateScore();
});
