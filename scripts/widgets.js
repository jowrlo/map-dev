const logo = document.querySelector('#logo');
const widgets = document.querySelector('#widget-box');
const title = document.querySelector('#title');

function openWidgets() {
    widgets.style.display = "block";
    title.innerText = "Updated";
}

logo.onclick = openWidgets();