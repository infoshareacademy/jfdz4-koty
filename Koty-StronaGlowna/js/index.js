$("#cosTam").dialog({autoOpen: false});
$("#buttonPremiera").click(function () {
    $("#cosTam").dialog("open");
});
$('#cosTam').prepend("<table></table>");
for (i = 0; i <= 17; i += 1) {
    $('table').append('<tr></tr>')
}
;
for (j = 0; j < 24; j++) {
    $('tr').append('<td></td>')
}
;

$('td').click(function(){
    $(this).css('background-color', 'red')
});