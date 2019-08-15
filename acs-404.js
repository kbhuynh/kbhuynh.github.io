var targetOffset = $(".info").offset().top;

var $w = $(window).scroll(function(){
    if ($w.scrollTop() > targetOffset) {
        $("#logo").css({"fill":"#222"});
    } else{
        $("#logo").css({"fill":"#fff"});
    }
});