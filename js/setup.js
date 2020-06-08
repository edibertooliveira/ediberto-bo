$(document).ready(function(){
// OWL Carousel

  $(".thumbnails").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0 :{
        items: 2
      },
      480:{
        items: 4
      },
      768:{
        items: 5
      },
      1381:{
        items: 7
      }
    }
  });
});