/**
 * Created by MKwestorowski on 04.05.2017.
 */
function intervalForSlider() {

    let slider = setInterval(function () {
        $('#imageZajawka').attr('src', 'icons/home.svg');
    }, 10000)
}

intervalForSlider();