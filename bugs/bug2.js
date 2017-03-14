//auto indent, and remove the doc function from the scope of the win function
function win() {
    if (youWin) {
        $('input[type=text]').val('You win!');
        $('input[type=radio]:first-of-type').prop('checked', true);
    }

}
    var youWin = false;

$(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        youWin = true;
        win();
    });
});
