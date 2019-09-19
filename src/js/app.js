$(document).ready(function(){
    // Add smooth scrolling to all links
    $('a').on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

function url(path) {
    var baseURL = $('meta[name="site-url"]').attr('content');

    if (path == '/' || ! path) {
        return baseURL;
    } else if (path.substr(0,1) != '/') {
        return baseURL + '/' + path;
    } else {
        return baseURL + path;
    }
}

$('.navigation-toggle').on('click', function() {
    $('body').toggleClass('navigation-open');
});

// $('[data-tooltip]').each(function() {
//     if ($(this).data('tooltip').length > 0) {
//         $(this).tooltipster({
//             maxWidth: 400,
//             theme: 'tooltipster-light',
//             side: 'bottom',
//             delay: 100,
//             animationDuration: 200,
//             functionInit: function(instance, helper) {
//                 var content = $(helper.origin).data('tooltip');
//                 instance.content(content);
//             }
//         });
//     } else {
//         $(this).removeAttr('data-tooltip');
//     }
// });
