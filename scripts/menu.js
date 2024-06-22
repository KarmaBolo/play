/* Button Menu */
button_menu.addEventListener("click", () => {
    if (navigation_menu.style.display == "block") {
        navigation_menu.style.display = "none"
    }
    else {
        navigation_menu.style.display = "block"
    }

    if (main.style.display == "none") {
        main.style.display = "flex"
    }
    else {
        main.style.display = "none"
    }
    
    if (footer.style.display == "none") {
        footer.style.display = "flex"
    }
    else {
        footer.style.display = "none"
    }
});