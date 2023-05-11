$(document).ready(function() {
    // Smooth scroll for the navigation menu and links with .scrollto classes
    $('.nav-link, .scrollto').click(function(e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000, 'easeInOutExpo');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#navbar',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#navbar").offset().top > 100) {
        $("#navbar").addClass("navbar-shrink");
      } else {
        $("#navbar").removeClass("navbar-shrink");
      }
    };
  
    // Collapse now if page is not at top
    navbarCollapse();
    
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  });