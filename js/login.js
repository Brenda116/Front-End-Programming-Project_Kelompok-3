var loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
    loginBtn.onclick = function () {
        var email = document.getElementById("loginEmail").value;
        var pass = document.getElementById("loginPass").value;
        var msg = document.getElementById("loginMsg");

        if (email === "" || pass === "") {
            msg.innerHTML = "<div class='notice error'>Email and password must be filled!</div>";
            return;
        }

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            msg.innerHTML = "<div class='notice error'>Email format invalid!</div>";
            return;
        }

        var users = JSON.parse(localStorage.getItem("users")) || [];
        var foundUser = users.find(u => u.email === email && u.password === pass);

        if (foundUser) {
            msg.innerHTML = "<div class='notice ok'>Login successful!</div>";
            sessionStorage.setItem("loggedInUser", email);
            setTimeout(function () {
                window.location = "home.html";
            }, 1000);
        } else {
            msg.innerHTML = "<div class='notice error'>Incorrect email or password!</div>";
        }
    }
}