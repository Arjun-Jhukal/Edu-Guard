// back to top btn
// var btn = document.getElementById("btn-top");
$(document).ready(function() {
    $("#btn-top").click(function() {
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 500);
    });
});