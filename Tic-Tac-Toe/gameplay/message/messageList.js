class MessageList {
    activeConversation;

    $messagesContainer;
    messageListener;
    
    constructor() {
        this.$messagesContainer = document.createElement("div");
        this.$messagesContainer.classList.add("d-flex", "item", "grow-1", "flex-column");
    };

    setActiveConversation = (conversation) => {
        this.activeConversation = conversation;
        this.$messagesContainer.innerHTML = "";
        this.setupMessageListener();

    }

    setupMessageListener = () => {
        if (this.messageListener) {
            this.messageListener();
        }
        
        this.messageListener = db.collection("messages")
        .where("conversationId", "==", this.activeConversation.id)
        .onSnapshot((snapshot) => {    
            snapshot.docChanges().forEach((change) => {
                console.log(change.doc.data());
                const p = document.createElement("p");
                const sender = document.createElement("div");
                sender.innerHTML = change.doc.data().sender + ':';

                const content = document.createElement("div");
                content.innerHTML = change.doc.data().content;

                p.appendChild(sender);
                p.appendChild(content);

                this.$messagesContainer.appendChild(p);
            })
        });
    };

    initRender = (container) => {
        container.appendChild(this.$messagesContainer);
    }
}

export default MessageList;