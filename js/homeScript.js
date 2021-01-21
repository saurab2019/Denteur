// intro
$(document).ready(function () {
    $("header").mouseleave(function () {
        $(".visit").css({
            opacity: "0",
            display: "flex"
        }).show().animate({ opacity: "1" }, 500);
    });
  
    $("header").on('touchmove', function() {
        $(".visit").css({
            opacity: "0",
            display: "flex"
        }).show().animate({ opacity: "1" }, 500);
    });
    
});
$(document).ready(function () {
    $(".intro").mouseenter(function (){
        $(".intro video").animate({ opacity: "1" }, 1000);
        $(".intro video").get(0).play();
    });
    $(".intro").on('touchmove', function() {
        $(".intro video").animate({ opacity: "1" }, 1000);
        $(".intro video").get(0).play();
    });
});
// why us
$(document).ready(function () {
    $(".whyus").mouseenter(function () {
        $(".whyus #part").animate({ opacity: "1" }, 1000);
    });
    $(".whyus").mouseleave(function () {
        $(".whyus #part").animate({ opacity: "0" }, 1000);
    });
    $(".whyus").on('touchmove', function() {
        $(".whyus #part").animate({ opacity: "1" }, 1000);
    });

});
// past_record
$(document).ready(function () {
    $(".whyus").mouseleave(function () {
        $(".past_record").css({
            opacity: "0",
            display: "flex"
        }).show().animate({ opacity: "1" }, 1000);
    });
    $(".past_record").mouseleave(function () {
        $(".past_record").animate({ opacity: "0" }, 1000).hide(1000);
    });
});
// care smile
$(document).ready(function () {
    if ($(this).width() >= 630) {
        console.log($(this).width());
        console.log("hi");
        $(".care_smile").hover(function () {
            $(".care_smile #content4").animate({
                opacity: "1",
                left: "50%"
            }, 1500, "easeOutBounce");
        });
        $(".care_smile").on('touchmove', function() {
            $(".care_smile #content4").animate({
                opacity: "1",
                left: "50%"
            }, 1500, "easeOutBounce");
        });
    }
    else {
        $(".care_smile").hover(function () {
            $(".care_smile #content4").animate({
                opacity: "1",
            }, 1500, "easeOutBounce");
        });
        $(".care_smile").on('touchmove', function() {
            $(".care_smile #content4").animate({
                opacity: "1",
            }, 1500, "easeOutBounce");
        });
    }
});



