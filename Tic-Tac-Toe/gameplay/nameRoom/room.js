class RoomList {
    id;
    name;
    users;
    $txtName;
    $txtNoOfUsers;
    $container;


    constructor(id, name, users) {
        this.id = id;
        this.name = name;
        this.users = users;

        this.$txtName = document.createElement("p");
        this.$txtName.innerHTML = name;

        this.$txtNoOfUsers = document.createElement("small");
        this.$txtNoOfUsers.innerHTML = this.users.length + " user(s)";

        this.$container = document.createElement("div");
        this.$container.classList.add("conversation-item");

        
    };


    initRender = (container) => {
        
        this.$container.appendChild(this.$txtName);
        this.$container.appendChild(this.$txtNoOfUsers);

        container.appendChild(this.$container);
    };

}

export default RoomList;