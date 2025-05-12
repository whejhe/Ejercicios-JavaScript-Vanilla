// Initialize game variables
let board;
let ships;
let gameActive = false;

// Function to start the game
function startGame() {
    board = createBoard();
    ships = placeShips();
    gameActive = true;
    renderBoards();
    displayMessage("Game started! Click on the squares to attack.");
}

// Function to create the game board
function createBoard() {
    const size = 10;
    const newBoard = Array(size).fill(null).map(() => Array(size).fill(0));
    return newBoard;
}

// Function to place ships randomly on the board
function placeShips() {
    const shipSizes = [5, 4, 3, 3, 2];
    const newShips = [];
    shipSizes.forEach(size => {
        let placed = false;
        while (!placed) {
            const orientation = Math.random() < 0.5 ? 'H' : 'V';
            const row = Math.floor(Math.random() * 10);
            const col = Math.floor(Math.random() * 10);
            if (canPlaceShip(row, col, size, orientation)) {
                const ship = {
                    size,
                    orientation,
                    positions: []
                };
                for (let i = 0; i < size; i++) {
                    const position = orientation === 'H' ? [row, col + i] : [row + i, col];
                    ship.positions.push(position);
                    board[position[0]][position[1]] = 1; // Mark ship on board
                }
                newShips.push(ship);
                placed = true;
            }
        }
    });
    return newShips;
}

// Function to check if a ship can be placed at the specified location
function canPlaceShip(row, col, size, orientation) {
    for (let i = 0; i < size; i++) {
        const r = orientation === 'H' ? row : row + i;
        const c = orientation === 'H' ? col + i : col;
        if (r >= 10 || c >= 10 || board[r][c] === 1) {
            return false;
        }
    }
    return true;
}

// Function to handle user clicks on the board
function handleClick(row, col) {
    if (!gameActive || board[row][col] === -1) return;
    if (board[row][col] === 1) {
        board[row][col] = -1; // Mark hit
        displayMessage("Hit!");
    } else {
        board[row][col] = -1; // Mark miss
        displayMessage("Miss!");
    }
    checkWin();
    //renderBoards();
}

// Function to check for win conditions
function checkWin() {
    const allHit = ships.every(ship => ship.positions.every(pos => board[pos[0]][pos[1]] === -1));
    if (allHit) {
        gameActive = false;
        displayMessage("You sunk all the ships! Game over.");
    }
}

// Function to render the game boards
function renderBoards() {
    const boardElement = document.getElementById("game-board");
    const overlayElement = document.getElementById("overlay-board");
    boardElement.innerHTML = "";
    overlayElement.innerHTML = "";

    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement("div");
            cellElement.className = "cell";
            if (cell === 1) {
                cellElement.classList.add("ship");
            } else if (cell === -1) {
                cellElement.classList.add("hit");
            } else if (cell === 0) {
                cellElement.classList.add("miss");
            }
            boardElement.appendChild(cellElement);

            const overlayCellElement = document.createElement("div");
            overlayCellElement.className = "cell hidden";
            overlayCellElement.onclick = () => {
                handleClick(rowIndex, colIndex);
                overlayCellElement.style.visibility = 'hidden';
            };
            overlayElement.appendChild(overlayCellElement);
        });
    });
}

// Function to display messages to the user
function displayMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.innerText = message;
}

// Event listener for the start button
document.getElementById("start-button").onclick = startGame;