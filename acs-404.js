var targetOffset = $(".info").offset().top;

var $w = $(window).scroll(function(){
    if ($w.scrollTop() > targetOffset) {
        $("#lines path").css({"fill":"#222"});
    } else{
        $("#lines path").css({"fill":"#fff"});
    }
});
