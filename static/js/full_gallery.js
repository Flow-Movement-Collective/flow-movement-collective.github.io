$(document).ready(function () {
        $("[class^=gallery]").each(function(index,value){
            $(value).magnificPopup({
                delegate: 'a.img',
                type: 'image',
//                 disableOn: 700,
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1]
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                },
                callbacks: {
                    elementParse: function (item) {
                        if (item.el[0].classList.contains('portfolio-video')) {
                            item.type = 'iframe';
                        } else {
                            item.type = 'image';
                        }
                    }
                }
            });
        })
});
