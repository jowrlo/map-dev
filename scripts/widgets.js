const logo = document.querySelector('#logo');
const widgets = document.querySelector('#widget-box');
const title = document.querySelector('#title');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const appIcon = document.querySelector('#app-icon');

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

button1.onmousedown = openWidgets;
button2.onmousedown = closeWidgets;
appIcon.onmousedown = openWidgets;
console.log(widgets.style.display);
console.log(title);