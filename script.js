
$(document).ready(function() {
    $('#keyboard-upper-container').hide();
});

$(document).keydown(function(e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
}});

$(document).keyup(function(e) {
    if (e.keyCode == 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
}});

$(document).keypress(function (e) {
    if (e.keyCode >=8) {
        $('span').css("background-color", "yellow");
}});