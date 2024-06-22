button_cookies.addEventListener("click", () => {
    sessionStorage.play_lgpd = "sim"

    if (cookies.style.display == "flex") {
        cookies.style.display = "none"
    }
});

if (sessionStorage.play_lgpd == "sim") {
    cookies.style.display = "none"
} 
else {
    cookies.style.display = "flex"
};