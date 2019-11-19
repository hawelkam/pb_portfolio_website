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
});