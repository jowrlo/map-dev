const apps = document.querySelector('.material-icons');
const widgets = document.querySelector('#widget-box');
const title = document.querySelector('#title');

function openWidgets() {
    widgets.style.display = "block";
    title.innerText = "Updated";
}

apps.onclick = openWidgets();