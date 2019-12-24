$("nav div").click(function() {
    $("ul").slideToggle();
    $("ul ul").removeAttr('style');
    $("ul ul ul").removeAttr('style');
 });

$(".tabs").click(function() {
   
   var $items = $(".tabs");
   for (var i = 0; i < $items.length; i++) {
      $items.removeClass("clicked");
   }
   $(this).toggleClass('clicked');
   var targetEle = this.hash;
   var $targetEle = $(targetEle);



   $('html, body').stop().animate({
      'scrollTop': $targetEle.offset().top - 80
   }, 800, 'swing', function () {
      window.location.hash = targetEle;
   });
   

   if (this.hash == "#home") {
      $('html, body').stop().animate({
         'scrollTop': 0
      }, 800, 'swing', function () {
         window.location.hash = targetEle;
      });
   }
});


$(window).resize(function(){
  if($(window).width() > 768){
     $("ul").removeAttr('style');
  }
});
