const apps = document.querySelector('app-icon');

function openWidgets() {
    $('#widget-box').show()
}

apps.onclick = openWidgets;