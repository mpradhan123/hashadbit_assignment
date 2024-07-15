
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.querySelectorAll('.container, header, button').forEach(element => {
        element.classList.toggle('dark-theme');
    });
}

document.getElementById('themeButton').addEventListener('click', toggleTheme);
