import CreateMatch from "./Main/createMatch/createMatch.js.js.js";
import FindMatch from "./Main/findMatch/findMatch.js";
import Rule from "./Main/rules/rule.js";

class Main {

    constructor() {
        
    }
    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("vh100", "vw100", "d-flex", "flex-column", )
        const div1 = document.createElement("div");
        div1.classList.add("item", "d-flex");
        const p = document.createElement("p");
        p.innerHTML = "hello";
        const btnLogOut = document.createElement("button");
        btnLogOut.innerHTML = "Log out";
        btnLogOut.addEventListener("click", () => {
            firebase.auth().signOut();
        })

        div1.appendChild(p);
        div1.appendChild(btnLogOut);

        const title = document.createElement("h1");
        title.innerHTML = "tic tac toe";
        title.classList.add("item", "d-flex", "centering");

        const div2 = document.createElement("div");
        div2.classList.add("item", "d-flex", "centering", "grow-1", "flex-column");

        const createMatch = new CreateMatch();
        createMatch.initRender(div2);

        const findMatch = new FindMatch();
        findMatch.initRender(div2);

        const rule = new Rule();
        rule.initRender(div2);

        flexContainer.appendChild(div1);
        flexContainer.appendChild(title);
        flexContainer.appendChild(div2);
        container.appendChild(flexContainer);
    }
}

export default Main;