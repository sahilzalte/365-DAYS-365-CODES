const body = document.body;
const themeKey = "theme";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    body.classList.remove("dark", "light");
    body.classList.add(theme);
}

function setSystemTheme() {
    applyTheme(prefersDark.matches ? "dark" : "light");
}

// Load saved theme OR system theme
const savedTheme = localStorage.getItem(themeKey);
savedTheme ? applyTheme(savedTheme) : setSystemTheme();

// Listen for system changes only if user has not chosen a theme manually
prefersDark.addEventListener("change", () => {
    if (!localStorage.getItem(themeKey)) setSystemTheme();
});

// Manual toggle
document.querySelector("button")?.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem(themeKey, newTheme);
});
