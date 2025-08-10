jQuery(document).ready(function($) {
	function onBefore() { 
	    $('.book-kindle').animate({
		    bottom:'500px'
		  }, 100, function() {
		    // Animation complete.
		  });
	} 
	function onAfter() { 
	    $('.book-kindle').animate({
		    bottom:'-32px'
		  }, 100, function() {
		    // Animation complete.
		  });
	} 

	$('#hp-banners').append('<a href="#" id="prev"></a><a href="#" id="next"></a>');
	
	$('#hp-slides').cycle({ 
	    fx:      'fade', 
	    speed:    900, 
	    timeout:  9000,
	    next:   '#next', 
    	prev:   '#prev'
  
	});

	$('.book_hp').append('<div class="rotated"></div>').each(function() {
		$(this).find('.rotated').height($(this).height());
	});

	$('#show-preview').click(function(e) {
		if ($('.kindle-preview').hasClass("kindle-open")){

			$('.kindle-preview').removeClass("kindle-open").slideUp('fast',function(){

			});	

		} else {

			$('.kindle-preview').addClass("kindle-open").hide().css("height","auto").css("visibility","visible").slideDown('fast');	

		}
		
		e.preventDefault();
	});

});




