// $(document).ready(function() {

//   $(window).scroll(function () {
//       console.log($(window).scrollTop())
//     if ($(window).scrollTop() < 350) {
//       $('.navbar').addClass('navbar-fixed-left');
//     }
//     if ($(window).scrollTop() > 351) {
//       $('.navbar').removeClass('navbar-fixed-left');
//       $('.navbar').addClass('navbar-fixed-right');
//     }
//   });
// });

$(document).ready(function() {
  $("#about").click(function() {
    $('html,body').animate({
      scrollTop: $(".about").offset().top},
      'slow');
  });

  $("#resume").click(function() {
    $('html,body').animate({
      scrollTop: $(".resume").offset().top},
      'slow');
  });

  $("#projects").click(function() {
    $('html,body').animate({
      scrollTop: $(".projects").offset().top},
      'slow');
  });

  $("#contact").click(function() {
    $('html,body').animate({
      scrollTop: $(".contact").offset().top},
      'slow');
  });
});
