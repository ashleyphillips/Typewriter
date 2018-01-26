let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 
'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];

let sentenceCounter = 0;
let sentenceContainer = $('#sentence');
sentenceContainer.append(sentences);

// const splitSentence = sentence.split('');

//     const configuredSentence = splitSentence.map((character, index) => {
//         return `<span id="target-${index}">${character}</span>`;
//     }).join('');

//     sentenceContainer.append(configuredSentence);
    

$(document).ready(function() {
    $('#keyboard-upper-container').hide();
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
});

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