// koniec zapisywania randomowych indexow
//WYBOR LOSOWEJ LICZBY
//Koniec wyboru losowej liczby

$("#cosTam").dialog({autoOpen: false});
$("#buttonPremiera").click(function () {
    $("#cosTam").dialog("open");
    $("div[role='dialog']").css('left', "40%");
});
$('#cosTam').prepend("<table></table>");
for (i = 0; i <= 17; i += 1) {
    $('table').append('<tr></tr>');
}
;

for (j = 0; j < 24; j++) {
    var count = j;

    $('tr').append('<td></td>');

    $('table td').each(function (index) {
        $(this).attr('id', index)
    })
}
;

//KONIEC ZAZNACZANIA KOMOREK

//ZAPISYWANIE RANDOMOWYCH INDEXOW
var wyniki = [];
for (i = getRandomInt(1, 7); i < 431; i += 61) {
    wyniki.push(i)
}
function getRandomInt(min, max) {
    var randomNumberForCells = Math.floor(Math.random() * (max - min)) + min;
    return randomNumberForCells;
};
for (i = 0; i < wyniki.length; i += 1) {
    var rand = wyniki[i + 1];
    $('td').eq(rand).prepend('<img id = "house" class="img-responsive" src="https://thumbs.dreamstime.com/x/ikona-liczny-sklep-16435924.jpg"/>');
}



var countDownTime = new Date(10000).getTime();




