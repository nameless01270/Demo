import CreateMatchModal from "./createMatchModal.js";


class CreateMatch {
    $btnCreateMatch;
    CreateMatchModal;
    roomList;

    constructor() {
        this.$btnCreateMatch = document.createElement("button");
        this.$btnCreateMatch.innerHTML = "Tao tran dau";
        this.$btnCreateMatch.classList.add("btn", "btn-primary", "m-b-md");
        this.$btnCreateMatch.addEventListener("click", this.openCreateMatchModal);

        this.CreateMatchModal = new CreateMatchModal();
    }

    openCreateMatchModal = () => {
        this.CreateMatchModal.setVisible(true);
    };

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.appendChild(this.$btnCreateMatch);
        this.CreateMatchModal.initRender(flexContainer);

        container.appendChild(flexContainer);
    }
}

export default CreateMatch;