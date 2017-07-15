/**
 * Created by Alexia on 7/6/2017.
 */

$( document ).ready(function(){
    /**PROGRESS BAR (https://github.com/mburakerman/prognroll)/!*
        $("body").prognroll({
            height: 5, //Progress bar height
            color: "#BFD8D2", //Progress bar background color
            custom: false //If you make it true, you can add your custom div and see it's scroll progress on the page
        });*/

    /**INITIALIZE BUTTON COLLAPSE**/
    $('.button-collapse').sideNav({
        /* menuWidth: 275, // Default is 300
         edge: 'left', // Choose the horizontal origin
         closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
         draggable: true, // Choose whether you can drag to open on touch screens,
         /!*onOpen: function(el) { /!* Do Stuff* / }, // A function to be called when sideNav is opened
         onClose: function(el) { /!* Do Stuff* / }, // A function to be called when sideNav is closed*!/*/
    });

    /**TO TOP from https://css-tricks.com/snippets/jquery/smooth-scrolling/**/
    $('.smoothScrollTarget').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    });
});