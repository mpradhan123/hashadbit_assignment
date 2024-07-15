function toggleTheme() {
    let box = document.getElementById('box');
    box.classList.toggle('dark-theme');
}
document.getElementById('themeButton').addEventListener('click', toggleTheme);
