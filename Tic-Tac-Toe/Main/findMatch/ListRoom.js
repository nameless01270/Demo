import GamePlay from "../../gamePlay.js";
import app from "../../index.js";

class ListRoom {
    id;
    name;
    users;
    onClick;

    $txtName;
    $txtNoOfUsers;
    $container;
    $btnJoin;

    constructor(id, name, users, onClick) {
        this.id = id;
        this.name = name;
        this.users = users;

        this.$txtName = document.createElement("div");
        this.$txtName.innerHTML = this.name;
        this.$txtName.classList.add("grow-1", "d-flex", "centering")
        this.$txtName.style.fontSize = "22px"

        this.$txtNoOfUsers = document.createElement("small");
        this.$txtNoOfUsers.innerHTML = this.users + "/2";
        this.$txtNoOfUsers.style.width = "70px";
        this.$txtNoOfUsers.classList.add("d-flex", "centering")

        this.$btnJoin = document.createElement("button");
        this.$btnJoin.innerHTML = "Join";
        this.$btnJoin.type = "button";
        this.$btnJoin.classList.add("btn", "btn-primary");
        this.$btnJoin.style.width = "150px"
        this.$btnJoin.addEventListener("click", () => {
            this.changeGamePlayScreen()}
        );
    };
    
    changeGamePlayScreen = () => {
        const gamePlay = new GamePlay();
        app.changeActiveScreen(gamePlay);
    };

    initRender = (container) => {
        const div = document.createElement("div");
        div.classList.add("conversation-item", "d-flex");
        
        div.appendChild(this.$txtName);
        div.appendChild(this.$txtNoOfUsers);
        div.appendChild(this.$btnJoin);
        container.appendChild(div);
    }
}

export default ListRoom;
