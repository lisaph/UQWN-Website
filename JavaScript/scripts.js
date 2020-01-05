var faded = false;

$("nav div").click(function() {
   if (faded) {
      $("ul").fadeOut("slow", function() {
         faded = false;
      });
   } else {
      $("ul").fadeIn("slow", function() {
         faded = true;
      });
   }

 });

$(".tabs").click(function() {
   
   var $items = $(".tabs");
   for (var i = 0; i < $items.length; i++) {
      $items.removeClass("clicked");
   }
   $(this).toggleClass('clicked');

});


$(window).resize(function(){
  if($(window).width() > 768){
     $("ul").removeAttr('style');
  }
});
