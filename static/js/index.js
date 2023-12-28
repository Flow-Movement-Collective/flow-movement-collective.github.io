let hoverShown = false;

$(document).ready(function () {

    // Show portraits
    $(window).scroll(function () {
        if (!hoverShown && $('.portrait-box').isInViewport()) {
            hoverShown = true;
            const el = $('.portr');
            const el_txt = $('.portr-text');
            setTimeout(function () {
                el.addClass('img-hovered');
                el_txt.addClass('txt-hovered');
            }, 800);
            setTimeout(function () {
                el.removeClass('img-hovered');
                el_txt.removeClass('txt-hovered');
            }, 2000);
        }
    });

    // Apply hover effect to both
    $('.portr-text').hover(
        function () { $(this).parent().prev().addClass('img-hovered'); },
        function () { $(this).parent().prev().removeClass('img-hovered'); }
    );
    $('.portr').hover(
        function () { $(this).next().addClass('txt-hovered'); },
        function () { $(this).next().removeClass('txt-hovered'); }
    );

    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").removeClass("navbar-hide");
        } else {
            $("#mainNav").addClass("navbar-hide");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
});