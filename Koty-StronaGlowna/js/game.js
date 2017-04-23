


$("#oknoGry").dialog({autoOpen: false, appendTo: "#footer"});


$("#buttonPremiera").click(function () {
    $('#gameStatistic').css('display', 'none');
    $("#oknoGry").dialog("open").css('width', '840').css('background-color', '#21324f').css('border', '2px solid black');
    $("div[role='dialog']").css('left', "20%");
    $('#overlayWybuch').fadeIn(function(){ setTimeout(function(){$('#overlayWybuch').fadeOut() }, 1000) } );
});

$('#gameStartButton').click(function () {
creatingGame();
    $('#gameStartButton').css('display', 'none');
    $('#gameStatistic').css('display', 'block')
});


$('#gameTableDiv').prepend("<table id='game_table'></table>");

function getBoard() {
    return $('#game_table');
}


function createBoard(size) {
    let $row, $cell;
    let $board = getBoard();
    for (let row = 1; row <= size; row++) {
        $row = $('<tr>');
        $board.append($row);
        for (let col = 1; col <= size; col++) {
            $cell = $('<td>');
            $row.append($cell);
            $('table td').each(function (index) {
                $(this).attr('id', index)
            })
        }
    }
}



function getRandomInt(min, max) {
    let randomNumberForCells = Math.floor(Math.random() * (max - min)) + min;
    return randomNumberForCells;
};


createBoard(5);


function creatingGame(){
let wyniki = [];
for (i = getRandomInt(1, 4); i < 25; i += getRandomInt(1,8)) {
    wyniki.push(i)
}
for (i = 0; i < wyniki.length; i += 1) {
    let rand = wyniki[i + 1];
    $('td').eq(rand).prepend('<img id = "house" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Map-icon-shop.svg/200px-Map-icon-shop.svg.png"/>');
}
};
