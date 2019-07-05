$(document).ready(function () {

    var submitNewBurger = function (event) {

        var newBurger = {

            burger_name: $("#newBurger").val().trim(),
            devoured: 0

        }

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );

    }

    $("#create-newBurger").on("click", submitNewBurger)

    $("#newBurger").on("keypress", function (event) {
        if (event.key === "Enter") {
            submitNewBurger();
            console.log("test keypress")
        }

    })

    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newDevour");

        var newDevourState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devoured to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



})