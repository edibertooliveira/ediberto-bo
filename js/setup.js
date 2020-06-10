$(document).ready(function(){
// OWL Carousel

  $(".thumbnails").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0 :{
        items: 3
      },
      480:{
        items: 3
      },
      768:{
        items: 3
      },
      1381:{
        items: 3
      }
    }
  });
});