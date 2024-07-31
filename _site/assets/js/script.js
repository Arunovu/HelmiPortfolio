$(document).ready(function(){
    var toggle = document.getElementById("themeToggle");
    var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefes-color-scheme: black)").matches ? "black" : "light");

    if (storedTheme == "black") {
        toggle.checked = true;
        document.querySelector("html").classList.add("black");
    }
    if (storedTheme) {
        document.documentElement.setAttribute('data-theme', storedTheme);
    }

    toggle.onclick = function() {darkLight(); };

    function darkLight() {
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = currentTheme == "black" ? "light" : "black";

        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
        document.querySelector("html").classList.toggle("black", targetTheme === "black");
    }
})