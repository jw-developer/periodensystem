// Funktion um .more Boxen zu öffnen / schliessen
function get_more(short) {
    var more = document.getElementsByClassName(short + "-more");
    more[0].style.opacity = "0";
    more[1].style.opacity = "0";
    more[0].style.display = "block";
    more[1].style.display = "block";
    var add = 0
    var add_opacity = setInterval(function() {
        if (add >= 1) {
            clearInterval(add_opacity);
        } else {
            more[0].style.opacity = add;
            more[1].style.opacity = add;
            add += 0.01;
        }
    }, 0.5)
}
function close_more(short) {
    var more = document.getElementsByClassName(short + "-more");
    var lose = 1;
    var lose_opacity = setInterval(function() {
        if (lose <= 0) {
            more[0].style.display = "none";
            more[1].style.display = "none";
            clearInterval(lose_opacity);
        } else {
            more[0].style.opacity = lose;
            more[1].style.opacity = lose;
            lose = lose - 0.01;
        }
    }, 0.5)
}

// Funktion für den Darkmode ein-/ausschalten
function set_mode() {
    if (document.getElementById("check").checked) {
        window.localStorage.clear();
        var checkbox = "dark_mode";
        window.localStorage.setItem("mode", checkbox);
    } else {
        window.localStorage.clear();
        var checkbox = "light_mode";
        window.localStorage.setItem("mode", checkbox);
    }
    location.reload(); // Seite neu laden
}