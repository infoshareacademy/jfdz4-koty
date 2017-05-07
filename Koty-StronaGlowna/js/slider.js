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
    let countSecTimer = 30;
    let intervalForSlider = setInterval(function () {
            if (countSecTimer === 24) {
                $('.imageZajawka').fadeOut('fast', function() {$('.imageZajawka').attr('src', imagesArray.first); $('.imageZajawka').fadeIn('fast');
                countSecTimer--
            })}
            else if (countSecTimer === 16) {
                $('.imageZajawka').fadeOut('fast', function() {$('.imageZajawka').attr('src', imagesArray.second); $('.imageZajawka').fadeIn('fast');
                    countSecTimer--
                })}
            else if (countSecTimer === 5) {
                $('.imageZajawka').fadeOut('fast', function() {$('.imageZajawka').attr('src', imagesArray.third); $('.imageZajawka').fadeIn('fast');
                    countSecTimer--
                })}
            else if (countSecTimer === 0
            ) {
                $('.imageZajawka').fadeOut('fast', function() {$('.imageZajawka').attr('src', imagesArray.fourth); $('.imageZajawka').fadeIn('fast');
                clearInterval(intervalForSlider);
                timerForSlider();
            })}
            else {
                countSecTimer--
            }

        }
        , 1000);
}
