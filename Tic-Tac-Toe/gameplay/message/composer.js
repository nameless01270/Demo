

class Composer {

    activeConversation;
    $form;
    $txtMessage;
    $btnSend;

    constructor() {
        this.$form = document.createElement('form');
        this.$form.addEventListener("submit", this.onSendMessage);

        this.$txtMessage =document.createElement("input");
        this.$txtMessage.type = "text";
        this.$txtMessage.placeholder = "Please be nice in the chat...";
        this.$txtMessage.classList.add("grow-1");

        this.$btnSend = document.createElement("button");
        this.$btnSend.type = "submit";
        this.$btnSend.innerHTML ="Send";

    };

    onSendMessage = (event) => {
        event.preventDefault();
        
        if (!this.activeConversation) {
            alert("Please choose a conversation ... ");
            return;
        }
        db.collection("messages").add({
            content: this.$txtMessage.value,
            sender: firebase.auth().currentUser.email,
            conversationId: this.activeConversation.id,
            
        });
    };

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
    };

    initRender = (container) => {
        const div = document.createElement("div");

        div.classList.add("d-flex", "item");
        div.appendChild(this.$txtMessage);
        div.appendChild(this.$btnSend);

        this.$form.appendChild(div);

        container.appendChild(this.$form);
    };
}

export default Composer;