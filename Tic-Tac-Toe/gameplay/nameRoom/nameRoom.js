
import CreateMatchModal from "../../Main/createMatch/createMatchModal.js";
import RoomList from "./room.js";


class NameRoom {
    
    $roomContainer;

    createMatchModal;

    nameRoom;
    

    constructor() {
        
        this.$roomContainer = document.createElement("div");

        this.createMatchModal = new CreateMatchModal();

        this.setUpRoomListener();

        this.nameRoom = [];

    };

    setUpRoomListener = () => {
        db.collection("rooms").onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const room = new RoomList(change.doc.id, change.doc.data().name, change.doc.data().users.length,
                    (room) => {
                        this.setActiveConversationRoom(room);
                    }    
                );
                console.log(room);
                this.nameRoom.push(room);
                room.initRender(this.$roomContainer);
            });
        });
    };

    initRender = (container) => {
        const div = document.createElement("div");
        div.classList.add("item", "d-flex", "centering");
        div.style.height = "100px";

        div.appendChild(this.$roomContainer);
        this.createMatchModal.initRender(div);

        container.appendChild(div);
    };
}

export default NameRoom;