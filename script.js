$( document ).ready(function() {
   var lastScrollTop = 0;
   $(window).scroll(function(event){
      var st = $(this).scrollTop();
      //constantly capture scroll position from the top
      //when you scroll, add scroll class
      if (st > lastScrollTop){
          $('.fixed-top').addClass('scroll');
          $('.navbar').addClass('navbar-light');
          $('.navbar').removeClass('navbar-dark');
      } else {
         //when you scroll back to top, remove scroll class
         $('.fixed-top').removeClass('scroll');
         $('.navbar').removeClass('navbar-light');
          $('.navbar').addClass('navbar-dark');
         lastScrollTop = st;
      }
      
   });
});