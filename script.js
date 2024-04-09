document.getElementById('change-css').addEventListener('click', function() {
    var cssLink = document.getElementById('css-link');
    if (cssLink.getAttribute('href') === 'css.css') {
        cssLink.setAttribute('href', 'alternative.css');
    } else {
        cssLink.setAttribute('href', 'css.css');
    }
});
