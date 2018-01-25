
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

$(document).bind('keydown', function(e) {
    $('#' + (e.keyCode)).css('background-color', 'yellow');
});
$(document).bind('keyup', function(e) {
    $('#' + (e.keyCode)).css('background-color', '');
});
$(document).bind('keydown', function(e) {
    $('#' + (e.keyCode + 32)).css('background-color', 'yellow');
});
$(document).bind('keyup', function(e) {
    $('#' + (e.keyCode + 32)).css('background-color', '');
});
$(document).bind('keydown', function(e) {
    $('#32' + (e.keyCode)).css('background-color', 'yellow');
});
$(document).bind('keyup', function(e) {
    $('#32' + (e.keyCode)).css('background-color', 'yellow');
});
