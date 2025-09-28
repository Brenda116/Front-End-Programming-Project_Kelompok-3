var signUpBtn = document.getElementById("signUpBtn");
if (signUpBtn) {
    signUpBtn.onclick = function () {
        var email = document.getElementById("signUpEmail").value;
        var pass = document.getElementById("signUpPass").value;
        var pass2 = document.getElementById("signUpDoublePass").value;
        var nama = document.getElementById("signUpName").value;
        var hp = document.getElementById("signUpPhone").value;
        var msg = document.getElementById("signUpMsg");

        if (email === "" || pass === "" || pass2 === "" || nama === "" || hp === "") {
            msg.innerHTML = "<div class='notice error'>All fields must be filled in!</div>";
            return;
        }

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            msg.innerHTML = "<div class='notice error'>Invalid email!</div>";
            return;
        }

        if (pass.length < 8) {
            msg.innerHTML = "<div class='notice error'>Password must be at least 8 characters!</div>";
            return;
        }

        if (pass !== pass2) {
            msg.innerHTML = "<div class='notice error'>Password confirmation is not the same!</div>";
            return;
        }

        if (nama.length < 3 || nama.length > 32) {
            msg.innerHTML = "<div class='notice error'>Name must be at least 3 and a maximum of 32 characters!</div>";
            return;
        }

        if (/\d/.test(nama)) {
            msg.innerHTML = "<div class='notice error'>Name cannot contain numbers!</div>";
            return;
        }

        if (hp.length < 10 || hp.length > 16 || hp[0] != "0" || hp[1] != "8" || isNaN(hp)) {
            msg.innerHTML = "<div class='notice error'>Phone number invalid (must 08xx, number, 10-16 digits)!</div>";
            return;
        }

        var users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(u => u.email === email)) {
            msg.innerHTML = "<div class='notice error'>Email already registered!</div>";
            return;
        }

        var newUser = { email: email, password: pass, nama: nama, hp: hp };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        msg.innerHTML = "<div class='notice ok'>Sign Up successful, please login.</div>";
        setTimeout(function () {
            window.location = "login.html";
        }, 1500);
    }
}