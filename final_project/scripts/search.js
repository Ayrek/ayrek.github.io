$(".row_1").hide();
$("#indicator").hide();

$.getJSON("directory.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ){
        $("#name").append(val + "Test");
    });
});
