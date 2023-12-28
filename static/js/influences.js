$(document).ready(function () {
    $(window).scroll(function () {
        $('.slide-in').each(function (i, val) {
           if ($(val).isInViewport()) {
               $(val).removeClass('slide-in');
           }
        });
    });

    $(window).scroll();
});