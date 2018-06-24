// Select color input
var Color;
// Select size input
var height, width;
function makeGrid(x,y) {
    //Remove existing table before creating a new one
    //"tr" is used as target since it contains "td", it will therefore remove the whole table
    $("tr").remove();
    
    //Nested loop to create grid
    for (var i = 1; i <= x; i++){
        $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
        for (var j = 1; j <= y; j++) {
            $("#table" + i).append("<td></td>")
        }
    }

    //add color to the cell
    $("td").click(function addColor() {
        Color = $("#colorPicker").val();
        //Check to clear cell for new attribute(style)
        if($(this).attr("style")) {
            $(this).removeAttr("style");
        } else {
            $(this).attr("style", "background-color:" + Color);
        }
    })
}

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    //Retrieve size input data within the function to prevent it from using the default value of "1"
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
    //Prevent page from refreshing due to the "event" default functionality
    event.preventDefault();
});