$(window).load(function(){
	$('.typo g,.s_menu,section,article,.head_app').css('opacity','0');
	$('.typo g').delay(250).each(function(i){
		$(this).delay(50 * i).animate({opacity: '1'},{duration: 250, easing: 'easeInCubic'});
	});
	$('.s_menu,.head_app').delay(300).each(function(i){
		$(this).delay(40 * i).animate({opacity: '1'},{duration: 250, easing: 'easeInCubic'});
	});
	$('.head_line').delay(500).each(function(i){
		$(this).delay(75).animate({opacity: '1'},{duration: 250, easing: 'easeInCubic'});
	});
	$('section,article').delay(500).each(function(i){
		$(this).delay(75 * i).animate({opacity: '1'},{duration: 250, easing: 'easeInCubic'});
	});
});

$(window).load(function(){
    $("#loading").css('display', 'block');
    $("#loading").fadeOut(2000);
    setTimeout(function() {
        $("#main_header").css('display', 'block');
        $("#main_footer").css('display', 'block');
        $("#containar").css('display', 'block');
    }, 100)
});
$(function(){
    $(".s_menu").click(function(){
        $("#mainnavi").fadeToggle();
		$(this).toggleClass("select");
    });
});

$(function() {
  var $win = $(window),
      $header = $('header'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});

$(function(){
  $(".q").click(function(){
    $($(this).next(".a")).animate(
      {height: "toggle", opacity: "toggle"},
      "nomal"
    );
  });
});


// $(function(){
// 	var retinaCheck = window.devicePixelRatio;
// 	if(retinaCheck >= 2) { // Retinaディスプレイのときを分岐させている
// 		$('img.retina').each( function() {
// 			var retinaimg = $(this).attr('src').replace(/\.(?=(?:png|jpg|jpeg)$)/i, '@2x.');
// 			$(this).attr('srcset', retinaimg + " 2x");
// 		});
// 	}
// });