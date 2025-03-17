$(document).ready(function () {
    const lang = localStorage.getItem('lang');
    if (lang === null) {
        changeLanguage(navigator.language.substr(0, 2));
    } else {
        changeLanguage(lang);
    }
});

const supportedLanguages = ['de', 'en'];

function setLangDE() {
    changeLanguage('de');
    localStorage.setItem('lang', 'de');
    $('#lang-switch').html('en');
}

function setLangEN() {
    changeLanguage('en');
    localStorage.setItem('lang', 'en');
    $('#lang-switch').html('de');
}

function changeLanguage(l) {
    l = supportedLanguages.includes(l) ? l : 'en';
    const file = $('#lexic-file')[0].value;
    getLangJSON(l, file);
    getLangJSON(l, 'general');
}

function getLangJSON(l, name) {
    $.getJSON('/static/i18n/' + l + '/' + name + '.json', function (data) {
        $.each(data, function (key, el) {
            $('[data-text-key=' + key + ']').html(el);
        });
    });
}
