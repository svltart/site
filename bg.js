$(window).scroll(function() {
  if ($('#blue').offset().top - $(window).scrollTop() < 300) {
    $("#moon").slideUp("slow");
  } else {
    $("#moon").slideDown();
  }
  if ($('#green').offset().top - $(window).scrollTop() < 300) {
    $("#ultra-moon").slideUp("slow");
  } else {
    $("#ultra-moon").slideDown();
  }
  if ($('#yellow').offset().top - $(window).scrollTop() < 300) {
    $("#ultra-sun").slideUp("slow");
  } else {
    $("#ultra-sun").slideDown();
  }
});
