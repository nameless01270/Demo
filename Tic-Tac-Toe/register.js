import app from "./index.js";
import Login from "./login.js";


class Register {
    $txtEmail;
    $txtPassword;
    $txtDisplayName;
    $txtConfirmPassword;
    $btnRegister;
    $formRegister;
    $errorMessage;

    constructor() {
        this.$txtEmail = document.createElement("input");
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = "Enter your email...";
        
        this.$txtDisplayName = document.createElement("input");
        this.$txtDisplayName.type = "text";
        this.$txtDisplayName.placeholder = "Enter your name";

        this.$txtPassword = document.createElement("input");
        this.$txtPassword.type = "password";
        this.$txtPassword.placeholder = "Enter your password";
        
        this.$txtConfirmPassword = document.createElement("input");
        this.$txtConfirmPassword.type = "password";
        this.$txtConfirmPassword.placeholder = "Enter your confirm password";

        this.$btnRegister = document.createElement("button");
        this.$btnRegister.type = "submit";
        this.$btnRegister.innerHTML = "Register";

        this.$errorMessage = document.createElement("p");
        this.$errorMessage.classList.add("error")
        
        this.$formRegister = document.createElement("form");
        this.$formRegister.addEventListener("submit", this.handleSubmit);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const email = this.$txtEmail.value;
        const displayName = this.$txtDisplayName.value;
        const password = this.$txtPassword.value;
        const confirmPassword = this.$txtConfirmPassword.value;

        if (email === "") {
            this.setErrorMessage("Email cannot be empty");
            return;
        }
        if (displayName === "") {
            this.setErrorMessage("Display name cannot be empty");
            return;
        }
        if (password === "") {
            this.setErrorMessage("Password cannot be empty");
            return;
        }
        if (confirmPassword === "") {
            this.setErrorMessage("Confirm password cannot be empty");
            return;
        } 
        if (password !== confirmPassword) {
            this.setErrorMessage("");
            return;
        }
        this.setErrorMessage("");

        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            firebase.auth().currentUser.updateProfile({
                displayName: displayName,
            })
            firebase.auth().currentUser.sendEmailVerification();
        });
        this.gotoLogin();
    };

    gotoLogin = () => {
        const login = new Login();
        app.changeActiveScreen(login);
    };

    setErrorMessage = (content) => {
        this.$errorMessage.innerHTML = content;
        if (content === "") {
            this.$errorMessage.style.display = "none";
        } else {
            this.$errorMessage.style.display = "block";
        }
    };



    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("d-flex", "item", "centering", "flex-column");

        const title = document.createElement("h1");
        title.innerHTML = "Register";
        flexContainer.appendChild(title);
        flexContainer.appendChild(this.$errorMessage);
        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtDisplayName);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$txtConfirmPassword);
        flexContainer.appendChild(this.$btnRegister);

        const div = document.createElement("div");
        const span = document.createElement("span");
        span.innerHTML = "I have an account";
        const linkToLogin = document.createElement("a");
        linkToLogin.href = "#";
        linkToLogin.innerHTML = "Login";
        linkToLogin.addEventListener("click", this.gotoLogin);
        div.appendChild(span);
        div.appendChild(linkToLogin);
        flexContainer.appendChild(div);
        
        this.$formRegister.appendChild(flexContainer);
        container.appendChild(this.$formRegister)
    }
};

export default Register;