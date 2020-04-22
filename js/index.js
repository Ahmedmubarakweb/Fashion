

$('.carousel').carousel({
  interval: 5000
});

$('footer img').hover(
  function() {
    $(this).attr("src","images/logo3.PNG");
  },
  function() {
    $(this).attr("src","images/logo2.PNG");
  }
);

