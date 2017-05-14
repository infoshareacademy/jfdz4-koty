$("#gameFrame").dialog({autoOpen: false});

countSec = 10;


$("#buttonPremiera").click(function () {
    $('#gameStatistic').css('display', 'none');
    $("#gameFrame").dialog("open").css('width', '840').css('background-color', '#21324f').css('border', '2px solid black');
    $("div[role='dialog']").css('left', "20%");
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


let zakupy = 0;
let ilosckupionych = 0;
let iloscporownywarka = 0;

function creatingGame() {
    let wyniki = [];
for (i = getRandomInt(1, 4); i < 25; i += getRandomInt(1,8)) {
    wyniki.push(i)
}
    for (i = 0; i < wyniki.length; i += 1) {
        let rand = wyniki[i + 1];
        let cellForHome = $('td').eq(rand);
        let randomcenaOdkurzacz = Odkurzacz.price + getRandomInt(0,200);
        cellForHome.attr('price', randomcenaOdkurzacz);
        cellForHome
            .prepend('<img style="max-width: 20%; height: auto;" class="house" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Map-icon-shop.svg/200px-Map-icon-shop.svg.png"/>')
            .prepend('<p style="background-color: white; border: 1px black solid; color: black; font-size: 16px">' + '<img src="images/1.jpg">' + " " + randomcenaOdkurzacz + "zł" + '</p>');

    }
    $('td[price]').off('click').click(function() {
        var randomcenaOdkurzacz = $(this).attr('price');
        zakupy += parseInt(randomcenaOdkurzacz);
        ilosckupionych++;
        iloscporownywarka += Odkurzacz.price;
        $('#zakupyzrobione').html(zakupy + " zł");
        $('#ilosckupionych').html(ilosckupionych + " przedmiot!");
        $('#ilosczporownywarka').html(iloscporownywarka + " zł");
        $('img', 'td').remove();
        $('p', 'td').remove();
        creatingGame2()
    })};

function creatingGame2() {
    let wyniki = [];
    for (i = getRandomInt(1, 4); i < 25; i += getRandomInt(1,8)) {
        wyniki.push(i)
    }
    for (i = 0; i < wyniki.length; i += 1) {
        let rand = wyniki[i + 1];
        let cellForHome = $('td').eq(rand);
        let randomcenaPralka = Pralka.price + getRandomInt(0,200);
        cellForHome.attr('price', randomcenaPralka);
        cellForHome
            .prepend('<img style="max-width: 20%; height: auto;" class= "house" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Map-icon-shop.svg/200px-Map-icon-shop.svg.png"/>')
            .prepend('<p style="background-color: white; border: 1px black solid; color: black; font-size: 16px">' + '<img src="images/2.jpg">' + " " + randomcenaPralka + "zł" + '</p>');



    }
    $('td[price]').off('click').click(function() {
        var randomcenaPralka = $(this).attr('price');
        zakupy += parseInt(randomcenaPralka);
        ilosckupionych++;
        iloscporownywarka += Pralka.price;
        $('#zakupyzrobione').html(zakupy + " zł");
        $('#ilosckupionych').html(ilosckupionych + " przedmioty!");
        $('#ilosczporownywarka').html(iloscporownywarka + " zł");
        $('img', 'td').remove();
        $('p', 'td').remove();
        creatingGame3();
    })};

    function creatingGame3() {
    let wyniki = [];
    for (i = getRandomInt(1, 4); i < 25; i += getRandomInt(1,8)) {
        wyniki.push(i)
    }
    for (i = 0; i < wyniki.length; i += 1) {
        let rand = wyniki[i + 1];
        let cellForHome = $('td').eq(rand);
        let randomcenaDron = Dron.price + getRandomInt(0,200);
        cellForHome.attr('price', randomcenaDron);
        cellForHome
            .prepend('<img style="max-width: 20%; height: auto;" class= "house" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Map-icon-shop.svg/200px-Map-icon-shop.svg.png"/>')
            .prepend('<p style="background-color: white; border: 1px black solid; color: black; font-size: 16px">' + '<img src="images/3.jpg">' + " " + randomcenaDron + "zł" + '</p>');



    }
    $('td[price]').off('click').click(function() {
        var randomcenaDron = $(this).attr('price');
        zakupy += parseInt(randomcenaDron);
        ilosckupionych++;
        iloscporownywarka += Dron.price;
        $('#zakupyzrobione').html(zakupy + " zł");
        $('#ilosckupionych').html(ilosckupionych + " przedmioty!");
        $('#ilosczporownywarka').html(iloscporownywarka + " zł");
        $('img', 'td').remove();
        $('p', 'td').remove();
        creatingGame4();
    });
};

function creatingGame4() {
    let wyniki = [];
    for (i = getRandomInt(1, 4); i < 25; i += getRandomInt(1,8)) {
        wyniki.push(i)
    }
    for (i = 0; i < wyniki.length; i += 1) {
        let rand = wyniki[i + 1];
        let cellForHome = $('td').eq(rand);
        let randomcenaMikrofala = Mikrofala.price + getRandomInt(0,200);
        cellForHome.attr('price', randomcenaMikrofala);
        cellForHome
            .prepend('<img style="max-width: 20%; height: auto;" class= "house" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Map-icon-shop.svg/200px-Map-icon-shop.svg.png"/>')
            .prepend('<p style="background-color: white; border: 1px black solid; color: black; font-size: 16px">' + '<img src="images/4.jpg">' + " " + randomcenaMikrofala + "zł" + '</p>');



    }
    $('td[price]').off('click').click(function() {
        var randomcenaMikrofala = $(this).attr('price');
        zakupy += parseInt(randomcenaMikrofala);
        ilosckupionych++;
        iloscporownywarka += Mikrofala.price;
        $('#zakupyzrobione').html(zakupy + " zł");
        $('#ilosckupionych').html(ilosckupionych + " przedmioty!");
        $('#ilosczporownywarka').html(iloscporownywarka + " zł");
        $('img', 'td').remove();
        $('p', 'td').remove();
        creatingGame5();
    });
};

function creatingGame5() {
    let wyniki = [];
    for (i = getRandomInt(1, 4); i < 25; i += getRandomInt(1,8)) {
        wyniki.push(i)
    }
    for (i = 0; i < wyniki.length; i += 1) {
        let rand = wyniki[i + 1];
        let cellForHome = $('td').eq(rand);
        let randomcenaSuszarka = Suszarka.price + getRandomInt(0,200);
        cellForHome.attr('price', randomcenaSuszarka);
        cellForHome
            .prepend('<img style="max-width: 20%; height: auto;" class= "house" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Map-icon-shop.svg/200px-Map-icon-shop.svg.png"/>')
            .prepend('<p style="background-color: white; border: 1px black solid; color: black; font-size: 16px">' + '<img src="images/5.jpg">' + " " + randomcenaSuszarka + "zł" + '</p>');



    }
    $('td[price]').off('click').click(function() {
        var randomcenaSuszarka = $(this).attr('price');
        zakupy += parseInt(randomcenaSuszarka);
        ilosckupionych++;
        iloscporownywarka += Suszarka.price;
        $('#zakupyzrobione').html(zakupy + " zł");
        $('#ilosckupionych').html(ilosckupionych + " przedmioty!");
        $('#ilosczporownywarka').html(iloscporownywarka + " zł");
        $('img', 'td').remove();
        $('p', 'td').remove();
        creatingGame6();
    });
};

function creatingGame6() {
    let wyniki = [];
    for (i = getRandomInt(1, 4); i < 25; i += getRandomInt(1,8)) {
        wyniki.push(i)
    }
    for (i = 0; i < wyniki.length; i += 1) {
        let rand = wyniki[i + 1];
        let cellForHome = $('td').eq(rand);
        let randomcenaSmartfon = Smartfon.price + getRandomInt(0,200);
        cellForHome.attr('price', randomcenaSmartfon);
        cellForHome
            .prepend('<img style="max-width: 20%; height: auto;" class= "house" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Map-icon-shop.svg/200px-Map-icon-shop.svg.png"/>')
            .prepend('<p style="background-color: white; border: 1px black solid; color: black; font-size: 16px">' + '<img src="images/6.jpg">' + " " + randomcenaSmartfon + "zł" + '</p>');



    }
    $('td[price]').off('click').click(function() {
        var randomcenaSmartfon = $(this).attr('price');
        zakupy += parseInt(randomcenaSmartfon);
        ilosckupionych++;
        iloscporownywarka += Smartfon.price;
        $('#zakupyzrobione').html(zakupy + " zł");
        $('#ilosckupionych').html(ilosckupionych + " przedmioty!");
        $('#ilosczporownywarka').html(iloscporownywarka + " zł");
        $('img', 'td').remove();
        $('p', 'td').remove();
        countSec = 0;
    });
};



function timer() {
    let intervalForTimer = setInterval(function () {
        startTime()
    }, 1000);
    countSec = 10;
    let divTimer = document.getElementById('timer');
    let pTimerEnd = document.getElementById('timerEnd');

    function startTime() {
        pTimerEnd.textContent = "0:" + countSec;
        if (countSec === 0) {
            clearInterval(intervalForTimer);
            $('img', 'td').remove();
            $('p', 'td').remove();
            divTimer.style.display = 'none';
            pTimerEnd.textContent = 'Czas się skończył!'
            $('#gameAgainButton').css('display', 'block')


        } else {
            countSec--;
        }

    }

};

$('#gameAgainButton').click(function () {
    zakupy = 0;
    ilosckupionych = 0;
    iloscporownywarka = 0;
    $('#zakupyzrobione').html(zakupy + " zł");
    $('#ilosckupionych').html(ilosckupionych + " przedmiot!");
    $('#ilosczporownywarka').html(iloscporownywarka + " zł");
    creatingGame();
    timer();
    $('#gameAgainButton').css('display', 'none');
});