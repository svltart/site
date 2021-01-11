$(window).scroll($.debounce(50, function(){
  if ($('#shop').offset().top - $(window).scrollTop() < 250) {
    $(".go-home").slideDown();
    $("#moon").slideUp("slow");
  } else {
    $(".go-home").slideUp();
    $("#moon").slideDown();
  }
  if ($('#commissions').offset().top - $(window).scrollTop() < 200) {
    $("#ultra-moon").slideUp("slow");
  } else {
    $("#ultra-moon").slideDown();
  }
  if ($('#art').offset().top - $(window).scrollTop() < 100) {
    $("#sun").slideUp("slow");
  } else {
    $("#sun").slideDown();
  }
}));
