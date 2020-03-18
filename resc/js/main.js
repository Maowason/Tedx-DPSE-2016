/* global $ */ 
$(function() {

    $.get("navbar.html", function(data) {
        $(".navbar-fixed").replaceWith(data);
        $(".navbar-overflow-btn").sideNav();
        
        $(".dropdown-button").dropdown();
    });

});
