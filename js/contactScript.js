$(document).ready(function(){
    $("textarea").focus(function(){
      $(this).attr("rows", "10");
    });
  });
$(document).ready(function(){
    if($(document).height() > $("body").height())
    {
        $("html").css("height","90vh");
    }
    else
    {
        $(".contact-main").css("height","auto");
    }
  });
