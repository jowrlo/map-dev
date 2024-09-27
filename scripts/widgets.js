const logo = document.querySelector('#logo');
const widgets = document.querySelector('#widget-box');
var title = document.querySelector('#title');
const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')

function openWidgets() {
    widgets.style.display = "block";
    title.innerText = "Updated";
    console.log(title.innerText);
}

function closeWidgets() {
    widgets.style.display = "none";
    title.innerText = "GIS Test";
    console.log(title.innerText);
}

button1.onclick = openWidgets();
button2.onclick = closeWidgets();
