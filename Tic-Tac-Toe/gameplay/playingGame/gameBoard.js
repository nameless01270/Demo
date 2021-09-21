class GameBoard {
    $box;
    $container;

    constructor(containerBox, index) {
        this.styleString = "";
        this.spaces = ["null", "null", "null", "null", "null", "null", "null", "null", "null"];
        this.O_Text = "O";
        this.X_Text = "X";

        this.$container = containerBox;
        this.$container.classList.add("d-flex-box", "grow-1");
        this.$container.style.width = "700px";
        this.$container.style.height = "700px";
        this.$container.style.border = "2px solid black";
        this.$box = document.createElement("div");
        this.$box.classList.add("box", "d-flex-box", "centering", "grow-1");
        this.$box.id = index;
    };

    initRender = () => {
        this.$container.appendChild(this.$box)
    }
}

export default GameBoard;