$(document).ready(function() {
    'use strict';

    $('#more').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $("#about").offset().top}, 'slow');
    });
});