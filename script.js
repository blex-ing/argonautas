// Abre y cierra el menú desplegable al hacer clic en el botón
document.querySelector(".dropbtn").addEventListener("click", function() {
    var dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});

// Cierra el menú desplegable cuando se hace clic fuera de él
window.addEventListener("click", function(event) {
    var dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
        var dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.style.display = "none";
    }
});
