// Select color input
// Select size input
var height, width, color 

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event)  {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    // check if function reads user input
    // console.log('height: ' + height + 'width: ' + width)
})


function makeGrid(a, b) {
    $('tr').remove();
    // Your code goes here!
    // to make a table:
    // creates a table of n x m
    for (var n = 1; n <= a; n++) {
        $('#pixelCanvas').append('<tr id=table' + n + '></tr>');
        for (var m =1; m <= b; m++) {
            $('#table' + n).append('<td></td>');
        }
    }

    // to add color:
    // code assigns a color from user choice then applies to the grid
    // adds color if grid block is un-colored and removes color if grid block is colored.
    $('td').click(function PickColor() {
        color = $('#colorPicker').val(); 
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
