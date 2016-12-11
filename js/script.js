//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function() {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function() {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});
//blog_btn
var fixedd = false;
$(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
        if (!fixedd) {
            fixedd = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#blog_btn').fadeIn("slow", function() {
                $('#blog_btn').css({
                    position: 'fixed',
                    display: 'block',
                  });
            });
        }
    } else {
        if (fixedd) {
            fixedd = false;
            $('#blog_btn').fadeOut("slow", function() {
                $('#blog_btn').css({
                    display: 'none'
                });
            });
        }
    }
});
