
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#themeToggle");

    if (!button) {
        console.error("Tombol theme toggle tidak ditemukan.");
        return;
    }

    function setTheme(theme) {
        document.body.setAttribute("data-theme", theme);

        try {
            localStorage.setItem("portfolio-theme", theme);
        } catch (error) {
            // Tema tetap berfungsi meskipun penyimpanan tidak tersedia.
        }
    }

    let savedTheme = "navy";

    try {
        savedTheme = localStorage.getItem("portfolio-theme") || "navy";
    } catch (error) {
        // Gunakan Navy Mode sebagai default.
    }

    setTheme(savedTheme === "light" ? "light" : "navy");

    button.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");
        const nextTheme = currentTheme === "light" ? "navy" : "light";

        setTheme(nextTheme);
    });
});
