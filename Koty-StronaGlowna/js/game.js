/**
 * Created by wojtekkas on 19.03.17.
 */


$("#cosTam").dialog({autoOpen: false});
$("#buttonPremiera").click(function () {
    $("#cosTam").dialog("open");
    $("div[role='dialog']").css('left', "25%");
});


$('#cosTam').prepend("<table id='gameTable'></table>");

function getBoard() {
    return $('#game-board');
}

function createBoard(size) {
    let $row, $cell;
    let $board = getBoard();
    for (let row = 1; row <= size; row++) {
        $row = $('<tr>');
        $board.append($row);
        for (let col = 1; col <= size; col++) {
            $cell = $('<td>');
            $row.attr(row);
            $cell.attr(col);
            $row.append($cell);
        }
    }
}