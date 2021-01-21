$(document).ready(function(){
  $("#nav1 .option .services").click(function(){
    $("#nav1 .service-content").toggle(1000);
  });
  $("#nav1 .option .services").mouseleave(function(){
    $("#nav1 .service-content").hide(1000);
  });
  // $("#nav1 .option .services").tap(function(){
  //   $("#nav1 .service-content").toggle(1000);
  // });
});
$(document).ready(function(){
  $("#nav2 .slider").click(function(){
    $("#nav2 .option").slideToggle(1000);
    
  });
  $("#nav2 .slider").tap(function(){
    $("#nav2 .option").slideToggle(1000);
    
  });
  $("#nav2 ul li a").click(function(){
    $("#nav2 .option").slideUp(1000);
  });
  $("#nav2 ul li a").tap(function(){
    $("#nav2 .option").slideUp(1000);
  });
});