import FindMatchListModal from "./findMatchListModal.js"

class FindMatch {
    $btnFindMatch;

    constructor() {
        this.$btnFindMatch = document.createElement("button");
        this.$btnFindMatch.innerHTML = "Find match";
        this.$btnFindMatch.classList.add("btn", "btn-primary", "m-b-md");
        this.$btnFindMatch.addEventListener("click", this.openFindMatchModal);

        this.FindMatchListModal = new FindMatchListModal();

    }

    openFindMatchModal = () => {
        this.FindMatchListModal.setFind(true)
    }
    initRender = (container) => {
        const flexContainer = document.createElement("div");

        flexContainer.appendChild(this.$btnFindMatch);
        this.FindMatchListModal.initRender(flexContainer);
        container.appendChild(flexContainer);
    }
}

export default FindMatch;