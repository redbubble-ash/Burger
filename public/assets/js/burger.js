$(document).ready(function(){

$(".btn btn-success").on("click",function(event){

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      
        buger_name: $("#newBurger").val().trim(),

    }
    
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );
      


})



















})