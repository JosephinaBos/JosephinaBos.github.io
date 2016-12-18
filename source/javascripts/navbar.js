// $(document).ready(function() {

//   $(window).scroll(function () {
//       console.log($(window).scrollTop())
//     if ($(window).scrollTop() < 685) {
//       $('.navbar').addClass('navbar-fixed-top');
//     }
//     if ($(window).scrollTop() > 685) {
//       $('.navbar').removeClass('navbar-fixed-top');
//       $('.navbar').addClass('navbar-fixed-about');
//     }
//     if ($(window).scrollTop() > 1380) {
//       $('.navbar').removeClass('navbar-fixed-about');
//       $('.navbar').addClass('navbar-fixed-resume');
//     }
//     if ($(window).scrollTop() > 1800) {
//       $('.navbar').removeClass('navbar-fixed-resume');
//       $('.navbar').addClass('navbar-fixed-contact');
//     }
//   });
// });

// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//       if ($(window).scrollTop() < 685) {
//       $('.navbar').addClass('navbar-fixed-top-down');
//       }
//       if ($(window).scrollTop() > 685) {
//         $('.navbar').removeClass('navbar-fixed-top-down');
//         $('.navbar').addClass('navbar-fixed-about-down');
//       }
//       if ($(window).scrollTop() > 1380) {
//         $('.navbar').removeClass('navbar-fixed-about-down');
//         $('.navbar').addClass('navbar-fixed-resume-down');
//       }
//       if ($(window).scrollTop() > 1800) {
//         $('.navbar').removeClass('navbar-fixed-resume-down');
//         $('.navbar').addClass('navbar-fixed-contact-down');
//       }
//     } else {
//         if ($(window).scrollTop() > 685) {
//           $('.navbar').removeClass('navbar-fixed-about-up');
//           $('.navbar').addClass('navbar-fixed-top-up');
//         }
//         if ($(window).scrollTop() > 850) {
//           $('.navbar').removeClass('navbar-fixed-resume-up');
//           $('.navbar').addClass('navbar-fixed-about-up');
//         }
//         if ($(window).scrollTop() < 1000) {
//           $('.navbar').removeClass('navbar-fixed-contact-down');
//           $('.navbar').addClass('navbar-fixed-resume-up');
//         }
//   }
//   lastScrollTop = st;
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
