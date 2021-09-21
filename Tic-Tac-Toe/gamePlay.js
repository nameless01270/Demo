import MessageList from "./gameplay/message/messageList.js";
import Composer from "./gameplay/message/composer.js";
import GameBoard from "./gameplay/playingGame/gameBoard.js";
import AlertWinner from "./gameplay/playingGame/alertWinner.js";
import NameRoom from "./gameplay/nameRoom/nameRoom.js";

class GamePlay {
    // roomName;
    // players;
    messageList;
    gameBoard;
    composer;
    alertWinner;

    activeRoom;
    nameRoom;

    constructor() {
        this.nameRoom = new NameRoom();

        this.messageList = new MessageList(); 
        this.composer = new Composer();
        this.alertWinner = new AlertWinner();
    };

    initRender = (container) => {
        const div = document.createElement("div");
        div.classList.add("d-flex", "flex-column", "vh100", "vw100");

        // const roomName = document.createElement("div");
        // roomName.innerHTML = "Room name";
        // roomName.classList.add("item");
        // roomName.style.height = "100px"

        const div2 = document.createElement("div");
        div2.classList.add("item", "d-flex", "grow-1");

        const gameBoard = document.createElement("div");
        gameBoard.classList.add("item", "grow-1");
        gameBoard.id = "playing";

        const players = document.createElement("div");
        players.classList.add("item");
        players.style.width = "250px";
        
        const div3 = document.createElement("div");
        div3.classList.add("item", "d-flex", "grow-1", "flex-column");

        this.messageList.initRender(div3);
        this.composer.initRender(div3);

        div2.appendChild(players);
        div2.appendChild(gameBoard);
        div2.appendChild(div3);

        this.nameRoom.initRender(div);
        div.appendChild(div2);

        this.alertWinner.initRender(div);

        container.appendChild(div);

        
        const containerBox = document.getElementById("playing");

        const myGameBoard = [
        new GameBoard(containerBox, 0),
        new GameBoard(containerBox, 1),
        new GameBoard(containerBox, 2),
        new GameBoard(containerBox, 3),
        new GameBoard(containerBox, 4),
        new GameBoard(containerBox, 5),
        new GameBoard(containerBox, 6),
        new GameBoard(containerBox, 7),
        new GameBoard(containerBox, 8),
        ];
        myGameBoard.forEach((c) => {
            c.initRender();
        });

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

                    this.alertWinner.setVisible(true);
                    return true;
                }
                 if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
                    console.log(`${currentPlayer} has win`);
                    this.alertWinner.setVisible(true);
                    return true;
                }
            }
            if (spaces[4] === currentPlayer) {
                if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
                    console.log(`${currentPlayer} has win`);
                    this.alertWinner.setVisible(true);
                    return true;
                }
                 if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
                    console.log(`${currentPlayer} has win`);
                    this.alertWinner.setVisible(true);
                    return true;
                }
                if (spaces[0] === currentPlayer && spaces[8] === currentPlayer) {
                    console.log(`${currentPlayer} has win`);
                    this.alertWinner.setVisible(true);
                    return true;
                }
                 if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
                    console.log(`${currentPlayer} has win`);
                    this.alertWinner.setVisible(true);
                    return true;
                }
            }
            if (spaces[8] === currentPlayer) {
                if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
                    console.log(`${currentPlayer} has win`);
                    this.alertWinner.setVisible(true);
                    return true;
                }
                 if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
                    console.log(`${currentPlayer} has win`);
                    this.alertWinner.setVisible(true);
                    return true;
                }
            }
        }
        
        drawBoard()


        

    }
}

export default GamePlay;
