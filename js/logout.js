var logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.onclick = function () {
        sessionStorage.removeItem("loggedInUser");
        window.location = "login.html";
    }
}