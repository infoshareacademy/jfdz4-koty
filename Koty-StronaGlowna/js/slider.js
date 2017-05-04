/**
 * Created by MKwestorowski on 04.05.2017.
 */


let imagesArray = {
    first: '',
    second: '',
    third: '',
    fourth: ''
}



function intervalForSlider() {

    let slider = setInterval(function () {
        $('.imageZajawka').attr('src', imagesArray.pierwsze);
    }, 10000)
}

intervalForSlider();