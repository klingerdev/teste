$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".menu").addClass("menu-scroll");
        } else {
            $(".menu").removeClass("menu-scroll");
        }
    });
});