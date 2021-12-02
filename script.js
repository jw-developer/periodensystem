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

//PSE Icon im Footer bei Hover grau machen
function change_icon_color(element) {
    element.classList.remove("pse_icon-logo_simple_white");
    element.classList.add("pse_icon-logo_simple_black");
}

// Funktion für den Darkmode ein-/ausschalten
function set_mode() {
    if (document.getElementById("check").checked == true) {
        window.localStorage.clear();
        window.localStorage.setItem("mode", "dark_mode"); // Neuer Modus im LocalStorage speichern

        // CSS-Datei für Modus ändern
        var mode_css = document.getElementById("mode_css");
            mode_css.href = "css/dark_mode.css";

        // Logo im Titel ändern und Darkmode Checkbox anclicken
        document.getElementById("img-logo").src = "grafiken/logo_darkmode.svg";
        document.getElementById("check").checked = true;
        
    } else if (document.getElementById("check").checked == false) {
        window.localStorage.clear();
        window.localStorage.setItem("mode", "light_mode"); // Neuer Modus im LocalStorage speichern

        // CSS-Datei für Modus ändern
        var mode_css = document.getElementById("mode_css");
        mode_css.href = "css/light_mode.css";

        // Logo im Titel ändern
        document.getElementById("img-logo").src = "grafiken/logo.svg";
    }
}

function update_download() {
    var input = document.getElementById("atom-icon_dropdown").value;
    if (input !== "") { // check if input isn't empty (for default element, value="")
        var filename = "atom-icons/" + input + ".png";
        document.getElementById("download_img_link").setAttribute("target", "_blank");
        document.getElementById("download_img_link").href = filename;
    } else { // set href="#" and delete target="blank" attribute
        document.getElementById("download_img_link").removeAttribute("target");
        document.getElementById("download_img_link").href = "#";
    }
    
}

// function mobile_grid() {
//     var media = window.matchMedia("(max-width: 600px)");
//     if (media.matches) {
//         document.getElementsByClassName("container")[0].style.gridTemplateColumns = "repeat(18, 1fr)";
//         i = 0;
//         while (i <= 39) {
//             document.getElementsByClassName("leer")[i].style.display = "block";
//             i++;
//         }
//         i = 0;
//         while (i <= 151) {
//             document.getElementsByClassName("ordnung")[i].style.display = "none";
//             document.getElementsByClassName("name")[i].style.display = "none";
//             document.getElementsByClassName("mass")[i].style.display = "none";
//             document.getElementsByClassName("box")[i].style.padding = "0px 0";
//             document.getElementsByClassName("box")[i].style.width = "100%";
//             document.getElementsByClassName("short")[i].style.fontSize = "6px";
//             i++;
//         }
//         i = 0;
//         while (i <= 14) {
//             document.getElementsByClassName("Lanthanoid_mobile")[i].style.display = "none";
//             document.getElementsByClassName("Lanthanoid_desktop")[i].style.display = "block";
//             document.getElementsByClassName("Actinoid_mobile")[i].style.display = "none";
//             document.getElementsByClassName("Actinoid_desktop")[i].style.display = "block";
//             i++;
//         }
//     }
// }