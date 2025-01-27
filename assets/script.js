function switchMode(e) {
    const bodyClass = document.body.classList;
    const isDarkMode = bodyClass.contains("dark");

    // Toggle the dark mode class
    if (isDarkMode) {
        e.innerHTML = "☀️"; // Update icon to Sun for light mode
        bodyClass.remove("dark");
        e.setAttribute("aria-pressed", "false"); // Update accessibility attribute
    } else {
        e.innerHTML = "🌙"; // Update icon to Moon for dark mode
        bodyClass.add("dark");
        e.setAttribute("aria-pressed", "true"); // Update accessibility attribute
    }
}

// Check user's system preferences and set default theme on page load
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark"); // Add dark mode class
    const themeSwitch = document.querySelector("#theme-switch");
    if (themeSwitch) {
        themeSwitch.innerHTML = "🌙"; // Set icon for dark mode
        themeSwitch.setAttribute("aria-pressed", "true"); // Update accessibility attribute
    }
}
