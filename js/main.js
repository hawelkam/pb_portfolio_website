$(document).ready(function () {
    $('#cycler img').on('click', function () {
        var $active = $('#cycler .active');
        var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
        $next.css('z-index', 2);
        $active.fadeOut(500, function () {
            $active.css('z-index', 1).show().removeClass('active');
            $next.css('z-index', 3).addClass('active');
        });
    });

    function alignTestimonials() {
        var max = 0;

        $('#testimonials .item').each(function (index) {
            var height = $(this).outerHeight();

            if (max < height) {
                max = height;
            }

            if (index + 1 === $('#testimonials .item').length) {
                $('#testimonials .carousel-inner').css('height', max + 'px');
            }
        });
    }

    alignTestimonials();

    $(window).resize(alignTestimonials);
});