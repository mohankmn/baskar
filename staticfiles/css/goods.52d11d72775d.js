$(document).ready(function() {
    var max_fields_limit      = length; //set limit for maximum input fields
    var x = 0; //initialize counter for text box
    $('.add_more_button').click(function(e){ //click event on add more fields button having class add_more_button
        e.preventDefault();
        if(x < max_fields_limit){ //check conditions
            x++; //counter increment
            $('.input_fields_container').append('<div><input type="text" name="raw_material'+x+'"/><a href="#" class="remove_field" style="margin-left:10px;">Remove</a></div>'); //add input field
        }
    });  
    $('.input_fields_container').on("click",".remove_field", function(e){ //user click on remove text links
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});