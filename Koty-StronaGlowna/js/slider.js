/**
 * Created by MKwestorowski on 04.05.2017.
 */


let imagesArray = {
    first: 'images/bags.jpg',
    second: 'images/cds.jpg',
    third: 'images/openshop-pano.jpg',
    fourth: 'images/smartphone.jpg'
}


// function intervalForSlider() {
//
//     let slider = setInterval(function () {
//         $('.imageZajawka').attr('src', imagesArray.first);
//     }, 10000)
// }
//
// intervalForSlider();

timerForSlider();

function timerForSlider() {
    let countSecTimer = 20;
    let intervalForSlider = setInterval(function () {
            if (countSecTimer === 15) {
                $('.imageZajawka').attr('src', imagesArray.first);
                countSecTimer--
            }
            else if (countSecTimer === 10) {
                $('.imageZajawka').attr('src', imagesArray.second);
                countSecTimer--;
            }
            else if (countSecTimer === 5) {
                $('.imageZajawka').attr('src', imagesArray.third);
                countSecTimer--
            }
            else if (countSecTimer === 0
            ) {
                $('.imageZajawka').attr('src', imagesArray.fourth);
                clearInterval(intervalForSlider);
                timerForSlider();
            }
            else {
                countSecTimer--
            }

        }
        , 1000);
}
