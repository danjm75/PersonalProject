$(document).ready(function(){

   $ ('#nav-btn').hover(function(){
        $(this).stop().animate({"opacity": "1"}, "slow");
    },
function(){
    $(this).stop().animate({"opacity": "0.1"}, "slow");
});
});
