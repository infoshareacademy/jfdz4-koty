


$("#cosTam").dialog({autoOpen: false});
$("#buttonPremiera").click(function () {
    $("#cosTam").dialog("open");
    $("div[role='dialog']").css('left', "25%");
});


$('#cosTam').prepend("<table id='game_table'></table>");

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

createBoard(5);