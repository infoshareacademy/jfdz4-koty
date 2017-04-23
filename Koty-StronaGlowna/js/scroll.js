$(document).on('click', 'a', function(){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -80
    }, 500);
});

$(function() {
    $('.nav a').on('click', function(){
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});