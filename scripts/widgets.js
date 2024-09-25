const apps = document.querySelector('.material-icons');
const widgets = document.querySelector('#widget-box')

function openWidgets() {
    widgets.show()
}

apps.onclick = openWidgets;