import GameBoard from "./gameboard.js.js";


const container = document.getElementById("app");

const myGameBoard = [
    new GameBoard(container, 0),
    new GameBoard(container, 1),
    new GameBoard(container, 2),
    new GameBoard(container, 3),
    new GameBoard(container, 4),
    new GameBoard(container, 5),
    new GameBoard(container, 6),
    new GameBoard(container, 7),
    new GameBoard(container, 8),
];
myGameBoard.forEach((c) => {
    c.initRender();
});

// Choi game

const boxes = Array.from(document.getElementsByClassName("box"));
console.log(boxes);

const spaces = ["", "", "", "", "", "", "", "", ""];
const O_Text = "O";
const X_Text = "X";
let currentPlayer = O_Text;

const drawBoard = () => {
    boxes.forEach((box, index) => {
        box.addEventListener("click", boxClicked);       
    });
};

const boxClicked = (e) => {
    const id = e.target.id;
    console.log(e.target)
    // console.log(id);
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if (playerHasWon()) {
            return;
        }
        if (currentPlayer === O_Text) {
            currentPlayer = X_Text;
        } else {
            currentPlayer = O_Text;
        }
    };
};

const playerHasWon = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            
            return true;
        }
         if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            return true;
        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            return true;
        }
         if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            return true;
        }
        if (spaces[0] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            return true;
        }
         if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            return true;
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            return true;
        }
         if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} has win`);
            return true;
        }
    }
}

drawBoard()

