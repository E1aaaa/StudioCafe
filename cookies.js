const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");
const declineBtn = document.getElementById("decline-cookies");

const consent = localStorage.getItem("cookieConsent");

if (consent) {
    banner.style.display = "none";
}

acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("lang", document.documentElement.lang);
    banner.style.display = "none";
});

declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.removeItem("lang");
    banner.style.display = "none";
});
