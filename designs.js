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

}
