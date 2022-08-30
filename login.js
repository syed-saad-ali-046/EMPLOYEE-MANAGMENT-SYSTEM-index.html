const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin12" && password === "admin@12345") {
        alert("You have successfully logged in as Admin.");
        window.location.replace("https://syed-saad-ali-046.github.io/EMPLOYEE-MANAGMENT-SYSTEM-index.html/login.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
