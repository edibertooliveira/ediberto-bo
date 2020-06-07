$(document).ready(function(){
// OWL Carousel

  $(".thumbnails").owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
    navText: ["Anterio","Próximo"],
    responsive: {
      0 :{
        items: 2
      },
      480:{
        items: 3
      },
      768:{
        items: 5
      },
      1381:{
        items: 8
      }
    }
  });
});