// navigation style
var windowH = $(window).height();
$(".nav").height(windowH);

// burger menu
var open = false;

$(".burger").click(function(){
    var $lines = $(this).children("div");
    var check = $lines.hasClass("normal");

    if(check){
        $lines.removeClass("normal");
        $lines.first().addClass("topline");
        $lines.eq(1).css("display","none");
        $lines.last().addClass("bottomline");
    }
    else{
        $lines.removeClass().addClass("normal");
        $lines.eq(1).stop().fadeIn();
    }

    if(!open){
        $(".nav").stop().fadeIn();
        open = true;
    }
    else{
        $(".nav").stop().fadeOut();
        open = false;
    }
});