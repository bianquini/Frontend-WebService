


function img01() {
        var classes = document.getElementById("sideNav").classList;
        if (!classes.contains("bg-parking")) {
                classes.add("bg-parking");
                classes.remove("bg-projects");
                classes.remove("bg-routes");
                classes.remove("bg-developers");
        }
        document.getElementById("trocarimg").src = "assets/img/Icons/parking.png"
}
function img02() {
        var classes = document.getElementById("sideNav").classList;
        if (!classes.contains("bg-projects")) {
                classes.add("bg-projects");
                classes.remove("bg-parking");
                classes.remove("bg-routes");
                classes.remove("bg-developers");
        }
        document.getElementById("trocarimg").src = "assets/img/Icons/projects.png"
}
function img03() {
        var classes = document.getElementById("sideNav").classList;
        if (!classes.contains("bg-routes")) {
                classes.add("bg-routes");
                classes.remove("bg-parking");
                classes.remove("bg-projects");
                classes.remove("bg-developers");
        }
        document.getElementById("trocarimg").src = "assets/img/Icons/routes.png"
}
function img04() {
        var classes = document.getElementById("sideNav").classList;
        if (!classes.contains("bg-developers")) {
                classes.add("bg-developers");
                classes.remove("bg-parking");
                classes.remove("bg-projects");
                classes.remove("bg-routes");
        }
        document.getElementById("trocarimg").src = "assets/img/Icons/developers.png"
}


function changeButton(id) {
        var classes = document.getElementById(id).classList;
        if(classes.contains("button_available")){
                classes.remove("button_available");
                classes.add("button_occupied");
        }else{
           classes.remove("button_occupied");
           classes.add("button_available");
        }
    }
