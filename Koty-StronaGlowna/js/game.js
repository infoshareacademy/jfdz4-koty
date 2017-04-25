$("#gameFrame").dialog({autoOpen: false, appendTo: "#footer"});


$("#buttonPremiera").click(function () {
    $('#gameStatistic').css('display', 'none');
    $("#gameFrame").dialog("open").css('width', '840').css('background-color', '#21324f').css('border', '2px solid black');
    $("div[role='dialog']").css('left', "20%");
    $('#overlayExplosion').fadeIn(() => {
        setTimeout(function () {
            $('#overlayExplosion').fadeOut()
        }, 1200)
    });
});

$('#gameStartButton').click(() => {
creatingGame();
    timer();
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
}


createBoard(5);


function creatingGame(){
let wyniki = [];
for (i = getRandomInt(1, 4); i < 25; i += getRandomInt(1,8)) {
    wyniki.push(i)
}
    for (j = 0; j < wyniki.length; j += 1) {
        let rand = wyniki[j + 1];
    $('td').eq(rand).prepend('<img class= "house" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Map-icon-shop.svg/200px-Map-icon-shop.svg.png"/>');
}
};


function timer() {
    let intervalForTimer = setInterval(function () {
        startTime()
    }, 1000);
    let countSec = 10;
    let divTimer = document.getElementById('timer');
    let pTimerEnd = document.getElementById('timerEnd');

    function startTime() {
        if (countSec === 0) {
        clearInterval(intervalForTimer)
            divTimer.style.display = 'none';
            pTimerEnd.textContent = 'Czas się skończył spróbuj ponownie'

        } else {
            countSec--;
        }

        divTimer.innerHTML = "0:" + countSec;
    }

};
