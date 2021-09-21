class AlertWinner {
    $backdrop;
    $formCreate;
    $btnContinue;
    $btnExitRoom;

    constructor() {
        this.$backdrop = document.createElement("div");
        this.$backdrop.style.height = "100vh";
        this.$backdrop.style.width = "100vw";
        this.$backdrop.style.position = "fixed";
        this.$backdrop.style.top = "0";
        this.$backdrop.style.left = "0";
        this.$backdrop.classList.add("centering");
        this.$backdrop.style.backgroundColor = "rgba(0,0,0,0.5)";
        this.$backdrop.style.display = "none";

        this.$formCreate = document.createElement("form");

        this.$btnContinue = document.createElement("button");
        this.$btnContinue.innerHTML = "Continue";

        this.$btnExitRoom = document.createElement("button");
        this.$btnExitRoom.type = "submit";
        this.$btnExitRoom.innerHTML = "ExitRoom";

        this.$btnContinue.addEventListener("click", () => {
            this.setVisible(false);
        });

    };

    setVisible = (value) => {
        if (value === true){
            this.$backdrop.style.display = "flex";
        } else {
            this.$backdrop.style.display = "none";
        }
    };

    initRender = (container) => {
        const div = document.createElement("div");
        div.style.width = "500px";
        div.style.padding = "20px";
        div.style.backgroundColor = "white";

        const title = document.createElement("h3");
        title.innerHTML = "Alert player has win";
        div.appendChild(title);

        this.$formCreate.appendChild(this.$btnContinue);
        this.$formCreate.appendChild(this.$btnExitRoom);

        div.appendChild(this.$formCreate);
        this.$backdrop.appendChild(div);
        container.appendChild(this.$backdrop);

    };
}

export default AlertWinner;