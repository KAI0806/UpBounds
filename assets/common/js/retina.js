$(function(){
	var wid = $(window).width();
	if( wid < 480 ){
		$('.imgChange').each(function(){
			$(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
		});
	}
});