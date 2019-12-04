


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


function getId() {
        var classes = document.getElementById("1").classList;
        console.log("oi");
        if (classes.contains("button_busy")) {
                classes.remove("button_busy");
                classes.add("button_available");    
        }else{
                classes.remove("button_available");
                classes.add("button_busy");   
        }

}

