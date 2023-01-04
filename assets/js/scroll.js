$(".process-scroll").scroll(function(){
    $(".scroll-nav").removeClass("active");
    $(".active").parent().addClass("active");
  })