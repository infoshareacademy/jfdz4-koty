$(document).on('click', 'a', function(){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -80
    }, 500);
});