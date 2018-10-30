// Select color input
// Select size input
var height, width, color

// When size is submitted by the user, call makeGrid()
const gridSize = document.getElementById("sizePicker");
gridSize.addEventListener('submit', function (event)  {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    // check if function reads user input in console
    // console.log('height: ' + height + 'width: ' + width)
})


function makeGrid(a, b) {
    // remove old table
    $('tr').remove();
    // TODO: creates a table of n x m
    for (var n = 1; n <= a; n++) {
        $('#pixelCanvas').append('<tr id=table' + n + '></tr>');
        for (var m =1; m <= b; m++) {
            $('#table' + n).append('<td></td>');
        }
    }



    // TODO: EventListener assigns a color if grid block is un-colored and removes color if grid block is colored
    $('td').click(function PickColor() {
        var color = $('#colorPicker').val(); 
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}