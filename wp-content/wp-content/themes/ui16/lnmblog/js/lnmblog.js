$(function(){
  if($(".archive-post").length > 0){
    if(!$('.archive-post').hasClass('default') && $(window).width() > '767'){
      $(".archive-post").css({
        "width" : "calc("+Math.round(columns)+"% - "+gutter+"px)",
        "margin-bottom": gutter+"px"
      });
     // Initialize Masonry
        var $postsWrapper = $('.posts-wrapper');
        $postsWrapper.masonry({
          itemSelector: '.archive-post',
          columnWidth: '.archive-post',
          horizontalOrder: true,
          percentPosition: true,
          gutter: gutter
        });
    }
  }
  if($(".sidebar.mobile").length > 0){
    $(".sidebar-icon").click(function(){
      $(".sidebar.mobile").toggleClass("open"); 
    });
  }
});