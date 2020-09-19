$(function() {
   
    // CAROUSEL PLAY/PAUSE BUTTON
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    // RESERVE BUTTON 
    $("#reserveButton").click(function(){
        $('#reserveModal').modal("show");
    });
    
    // ID BUTTON
    $("#loginButton").click(function(){
        $('#loginModal').modal("show");
    });



});