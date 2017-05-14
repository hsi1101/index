/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-07 20:44:46
 * @version $Id$
 */

$(function() {
    $('.js-nav a, .js-connect').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 750);
    });
});
