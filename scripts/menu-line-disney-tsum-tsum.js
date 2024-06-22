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

/* Game */
game.addEventListener("click", () => {
    if (game_seta.style.transform == "rotate(90deg)") {
        game_seta.style.transform = "rotate(0deg)"
    } 
    else {
        game_seta.style.transform = "rotate(90deg)"
    }

    if (game_ulist.style.display == "block") {
        game_ulist.style.display = "none"
    } 
    else {
        game_ulist.style.display = "block"
    }
});

/* Game */
card.addEventListener("click", () => {
    if (card_seta.style.transform == "rotate(90deg)") {
        card_seta.style.transform = "rotate(0deg)"
    } 
    else {
        card_seta.style.transform = "rotate(90deg)"
    }

    if (card_ulist.style.display == "block") {
        card_ulist.style.display = "none"
    } 
    else {
        card_ulist.style.display = "block"
    }
});

/* Coloring Missions */
coloring_missions.addEventListener("click", () => {
    if (coloring_missions_seta.style.transform == "rotate(90deg)") {
        coloring_missions_seta.style.transform = "rotate(0deg)"
    } 
    else {
        coloring_missions_seta.style.transform = "rotate(90deg)"
    }

    if (coloring_missions_ulist.style.display == "block") {
        coloring_missions_ulist.style.display = "none"
    } 
    else {
        coloring_missions_ulist.style.display = "block"
    }
});

/* Mission Bingo */
mission_bingo.addEventListener("click", () => {
    if (mission_bingo_seta.style.transform == "rotate(90deg)") {
        mission_bingo_seta.style.transform = "rotate(0deg)"
    } 
    else {
        mission_bingo_seta.style.transform = "rotate(90deg)"
    }

    if (mission_bingo_ulist.style.display == "block") {
        mission_bingo_ulist.style.display = "none"
    } 
    else {
        mission_bingo_ulist.style.display = "block"
    }
});

/* Tsum Tsum */
tsum_tsum.addEventListener("click", () => {
    if (tsum_tsum_seta.style.transform == "rotate(90deg)") {
        tsum_tsum_seta.style.transform = "rotate(0deg)"
    } 
    else {
        tsum_tsum_seta.style.transform = "rotate(90deg)"
    }

    if (tsum_tsum_ulist.style.display == "block") {
        tsum_tsum_ulist.style.display = "none"
    } 
    else {
        tsum_tsum_ulist.style.display = "block"
    }
});

/* Store */
store.addEventListener("click", () => {
    if (store_seta.style.transform == "rotate(90deg)") {
        store_seta.style.transform = "rotate(0deg)"
    } 
    else {
        store_seta.style.transform = "rotate(90deg)"
    }

    if (store_ulist.style.display == "block") {
        store_ulist.style.display = "none"
    } 
    else {
        store_ulist.style.display = "block"
    }
});