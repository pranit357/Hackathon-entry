
var side_tab = document.getElementById("side_tab");
var side_cross = document.getElementById("side_cross_logo")
var side_logo = document.querySelector("#side_logo");


function see_tab(){
    side_logo.style.visibility = "hidden";
    side_cross.style.visibility = "visible";
    side_tab.style.visibility = "visible"

    side_tab.classList.add("side_tab_animate_class");
    going_down_animation();
}
function hide_tab(){
    side_logo.style.visibility = "visible";
    
    side_tab.style.visibility = "hidden";
    side_cross.style.visibility = "hidden";
    side_tab.style.height = "0%";
    side_tab.classList.remove("side_tab_animate_class")
}

function going_down_animation(){
    setTimeout(() => {
        side_tab.style.height = "300px"
    }, 1000);
}