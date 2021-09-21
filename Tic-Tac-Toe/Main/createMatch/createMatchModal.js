import app from "../../index.js";
import GamePlay from "../../gamePlay.js";

class CreateMatchModal {
    $backdrop;
    $txtNameRoom;
    $btnCreate;
    $btnClose;
    
    constructor() {
        this.$backdrop = document.createElement("div");
        this.$backdrop.classList.add("vh100", "vw100", "d-flex", "centering");
        this.$backdrop.style.position = "fixed";
        this.$backdrop.style.top = "0";
        this.$backdrop.style.left = "0";
        this.$backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.35)";
        this.$backdrop.style.display = "none";

        this.$txtNameRoom = document.createElement("input");
        this.$txtNameRoom.type = "text";
        this.$txtNameRoom.placeholder = "Enter your name rooms";
        this.$txtNameRoom.classList.add("form-input","m-b-md");

        this.$btnCreate = document.createElement("button");
        this.$btnCreate.type = "submit"
        this.$btnCreate.innerHTML = "Create";
        this.$btnCreate.classList.add("btn", "btn-secondary", )
        this.$btnCreate.addEventListener("click", this.onSubmit)

        this.$btnClose = document.createElement("button");
        this.$btnClose.type = "button";
        this.$btnClose.innerHTML = "Close";
        this.$btnClose.classList.add("btn", "btn-third", "m-t-sm")
        this.$btnClose.addEventListener("click", () => {
            this.setVisible(false);
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const nameRoom = this.$txtNameRoom.value;
        const authUser = firebase.auth().currentUser;
        console.log(nameRoom, authUser);

        db.collection("rooms").add({
            name: nameRoom,
            creator: authUser.email,
            users: [authUser.email],
        })
        .then(() => {
            this.setVisible(false);
            this.changeGamePlayScreen();
            
        });       
    };

    changeGamePlayScreen = () => {
        const gamePlay = new GamePlay();
        app.changeActiveScreen(gamePlay);
    };

    setVisible = (value) => {
        if (value) {
            this.$backdrop.style.display = "flex";
        } else {
            this.$backdrop.style.display = "none";
        }
    };

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex", "flex-column", "centering", "item");
        flexContainer.style.backgroundColor = "white";
        flexContainer.style.width = "500px";
        flexContainer.style.height = "250px";
        flexContainer.style.backgroundColor = "rgb(161, 213, 243)";


        const title = document.createElement("h2");
        title.innerHTML = "Tao tran dau";
        title.classList.add("m-b-md")

        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$txtNameRoom);

        const div = document.createElement("div");
        div.classList.add("d-flex", "space-between")
        div.appendChild(this.$btnCreate);
        div.appendChild(this.$btnClose);
        flexContainer.appendChild(div);

        this.$backdrop.appendChild(flexContainer);
        container.appendChild(this.$backdrop);
    }
}

export default CreateMatchModal;