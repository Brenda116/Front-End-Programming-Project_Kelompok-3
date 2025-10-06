if (window.location.pathname.indexOf("about.html") !== -1 ||
    window.location.pathname.indexOf("contactloc.html") !== -1 ||
    window.location.pathname.indexOf("event.html") !== -1 ||
    window.location.pathname.indexOf("faq.html") !== -1 ||
    window.location.pathname.indexOf("home.html") !== -1 ||
    window.location.pathname.indexOf("menu.html") !== -1 ||
    window.location.pathname.indexOf("team.html") !== -1) {
    var cekUser = sessionStorage.getItem("loggedInUser");
    if (!cekUser) {
        alert("You have to log in first!");
        window.location = "login.html";
    }
}