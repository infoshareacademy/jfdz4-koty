/**
 * Created by MKwestorowski on 04.05.2017.
 */


let imagesArray = {
    first: 'images/bags.jpg',
    second: 'images/cds.jpg',
    third: 'images/cookie.jpg',
    fourth: 'images/smartphone.jpg'
}



function intervalForSlider() {

    let slider = setInterval(function () {
        $('.imageZajawka').attr('src', imagesArray.first);
    }, 10000)
}

intervalForSlider();