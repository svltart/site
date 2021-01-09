$(window).scroll($.debounce(50, function(){
  if ($('#shop').offset().top - $(window).scrollTop() < 100) {
    $("#moon").slideUp("slow");
  } else {
    $("#moon").slideDown();
  }
  if ($('#art').offset().top - $(window).scrollTop() < 200) {
    $("#ultra-moon").slideUp("slow");
  } else {
    $("#ultra-moon").slideDown();
  }
  if ($('#commissions').offset().top - $(window).scrollTop() < 300) {
    $("#ultra-sun").slideUp("slow");
  } else {
    $("#ultra-sun").slideDown();
  }
}));
