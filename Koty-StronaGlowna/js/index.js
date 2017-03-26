$("#cosTam").dialog({autoOpen: false});
$("#buttonPremiera").click(function () {
    $("#cosTam").dialog("open");
});
$('#cosTam').prepend("<table></table>");
for (i = 0; i <= 17; i += 1) {
    $('table').append('<tr></tr>');

}
;
for (j = 0; j < 24; j++) {
    $('tr').append('<td></td>')
}
;


// $('td').click(function(){
//     $(this).css('background-color', 'red')
// });


$('#tbl td').each(function( getRandomInt, element ){for (i = 0; i < 462; i += getRandomInt(50,100)){
    $()
}})

var wyniki = [];

for (i = getRandomInt(1,7); i < 462; i += getRandomInt(50,100)) {
 wyniki.push(i)
}

var index = function() {for (i= 0; i < wyniki.length; i++) {
return
}};

wyniki.forEach()



//Wybor losowej liczby

getRandomInt(5, 10);

function getRandomInt(min, max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    var randomNumberForCells = Math.floor(Math.random() * (max - min)) + min;
    return randomNumberForCells;
};
//Koniec wyboru losowej liczby

