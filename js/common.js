head.ready(function() {
	
	function indexbg(){
		var windowheight = $(window).height();
		var indexbg = (windowheight - 60);
		$(".js-page-bg-height").css('min-height', indexbg);
	}
	if ($(".js-page-bg-height").length > 0){
	  indexbg();
	}

	$(window).resize(function(){
	  if ($(".js-page-bg-height").length > 0){
	    indexbg();
	  }
	});

	$('.js-nav').on('click', function() {
	 $(".nav-wrap").toggleClass("is-active");
	 $(".nav").slideToggle( "fast" );
	});
});