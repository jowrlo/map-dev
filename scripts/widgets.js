const logo = document.querySelector('#logo');
const widgets = document.querySelector('#widget-box');
const title = document.querySelector('#title');
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')

function openWidgets() {
    widgets.style.display = "block";
    title.innerText = "Updated";
}

function closeWidgets() {
    widgets.style.display = "none";
    title.innerText = "GIS Test";
}

button1.onclick = openWidgets();
button2.onclick = closeWidgets();