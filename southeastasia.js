$(function(){
   /* global $ */
   
    $('#top-btn').click(function(){
      $('html, body').animate({
          'scrollTop':0
      },'slow');
    });
    
    $('.menu-right a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({scrollTop:position},500);
     });
     
    
    /* ハンバーガーメニュー */ 
	$('#nav_toggle').click(function(){
		$("header").toggleClass('open');
		$("nav").slideToggle(500);
	});
});
