var auto_refresh = setInterval(function () {
    $('.ref').fadeOut('slow', function() {
        $(this).load('/echo/json/', function() {
            $(this).fadeIn('slow');
        });
    });
}, 5000); 