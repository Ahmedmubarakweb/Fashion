$(document).ready(function() { 
$('.cards').slick({
  dots: true,
  infinite: true,
  speed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,

});

$('.carousel').carousel({
  interval: 5000
});

$('footer img').hover(
  function() {
    $(this).attr("src","images/logo3.png");
  },
  function() {
    $(this).attr("src","images/logo2.png");
  }
);

}); 
