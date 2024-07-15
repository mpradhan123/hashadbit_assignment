function createDivs() {
    let container = document.getElementById('container');
    let colors = ['#FF5733', '#FFC300', '#DAF7A6', '#C70039', '#00ADB5'];
    for (let i = 1; i <= 5; i++) {
        let div = document.createElement('div');
        div.className = 'box';
        div.style.backgroundColor = colors[i - 1];
        div.textContent = `Box ${i}`;
        container.appendChild(div);
    }
}
createDivs();
