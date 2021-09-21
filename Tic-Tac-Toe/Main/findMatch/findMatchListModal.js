import ListRoom from "./ListRoom.js";

class FindMatchListModal {
    $backdrop;
    $txtSearch;
    $btnSearch;
    $btnClose;
    $btnJoin;

    $formListRoom;
    roomList;
    $conversationListContainer;

    constructor () {
        this.$backdrop = document.createElement("div");
        this.$backdrop.classList.add("vh100", "vw100", "d-flex", "centering");
        this.$backdrop.style.position = "fixed";
        this.$backdrop.style.top = "0";
        this.$backdrop.style.left = "0";
        this.$backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.35)";
        this.$backdrop.style.display = "none";

        this.$txtSearch = document.createElement("input");
        this.$txtSearch.type = "text";
        this.$txtSearch.placeholder = "Search your match";
        this.$txtSearch.classList.add("form-input", "m-t-sm", "m-r");

        this.$btnSearch = document.createElement("button");
        this.$btnSearch.innerHTML = "Search";
        this.$btnSearch.classList.add("btn", "btn-secondary", "m-r-bt");

        this.$btnClose = document.createElement("button");
        this.$btnClose.innerHTML = "Close";
        this.$btnClose.classList.add("btn", "btn-third", "m-r-bt");
        this.$btnClose.addEventListener("click", () => {
            this.setFind(false);
        });

        this.setUpConversationListener();

        this.roomList = [];
        this.$conversationListContainer = document.createElement("div");
        this.$conversationListContainer.classList.add("item");
        this.$conversationListContainer.style.backgroundColor = "green"
    };
    


    setUpConversationListener = () => {
        db.collection("rooms").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                // console.log(change.doc.data());
                const conversation = new ListRoom(
                    change.doc.id,
                    change.doc.data().name,
                    change.doc.data().users.length
                );
                // console.log(conversation)
                this.roomList.push(conversation);
                // console.log(this.roomList);
                conversation.initRender(this.$conversationListContainer);
              
            })
        })
    }

    setFind = (value) => {
        if (value) {
            this.$backdrop.style.display = "flex";
        } else {
            this.$backdrop.style.display = "none";
        }
    };

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("item","d-flex", "flex-column");
        flexContainer.style.width = "680px";
        flexContainer.style.backgroundColor = "white";
        const title = document.createElement("h1");
        title.innerHTML = "Find match with new friends";
        title.classList.add("d-flex", "centering")

        flexContainer.appendChild(title);
        const div = document.createElement("div");
        div.classList.add("d-flex");
        div.appendChild(this.$txtSearch);
        div.appendChild(this.$btnSearch);
        div.appendChild(this.$btnClose);
        flexContainer.appendChild(div);
        flexContainer.appendChild(this.$conversationListContainer);
        this.$conversationListContainer.style.height = "500px"
        this.$backdrop.appendChild(flexContainer);
        container.appendChild(this.$backdrop);
    }

}

export default FindMatchListModal;