$(document).ready(function() {
    $("#imgHover").hover(
        function() {
            $(this).attr("src", "https://media0.giphy.com/media/dLvt3DGcGxbvW/200.gif");
        },
        function() {
            $(this).attr("src", "http://media.tumblr.com/0fae6a0c0f241957a0c1a25c2d419498/tumblr_inline_mk7cmgis031qz4rgp.png");
        });
});
