
class Rule {
    $btnRule;

    constructor() {
        this.$btnRule = document.createElement("button");
        this.$btnRule.classList.add("btn", "btn-primary", "m-b-md");
        this.$btnRule.innerHTML = "Rule";
    }

    initRender = (container) => {
        const flexContainer = document.createElement("div");

        flexContainer.appendChild(this.$btnRule);

        container.appendChild(flexContainer);
    }
}

export default Rule;