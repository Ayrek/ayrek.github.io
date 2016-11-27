<script>
    $(function(){
    // jQuery Code goes here
    /***************VIDEO 1********************/
    var toggleStyle = function() {
        var inputFields = $('input[type="text"]');
        if (inputFields.css('background-color')=== 'rgb(255, 0, 0)'){
            inputFields.css('background-color', 'rgb(255, 255, 255)');
        }else{
            inputFields.css('background-color', 'rgb(255, 0, 0)');

        }
    }
    $('#ReqAQuoteBtn').click(toggleStyle);

    /************VIDEO 2*************/
    $('.coreValues').append("<li><strong>This is brand new !!</strong></li>"); //method one after list
    $("<li><strong>This is brand new !!</strong></li>").appendTo(".coreValues"); //method two after list

    $('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>"); //method one before list
    $("<li><strong>This is brand new !!</strong></li>").prependTo(".coreValues"); //method two before list

    var nameVal = $('input[name="nameVal"]');

    function FillEmpty(){
        if(nameVal.val() == ''){
            nameVal.val('John Doe');
        }
    }
    $('#ReqAQuoteBtn').click(FillEmpty);
})
    </script>
