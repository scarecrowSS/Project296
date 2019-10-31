$(document).ready(function () {
	$(window).scroll(function(){
	  	let sticky = $('.nav'),
	      	scroll = $(window).scrollTop();

	  	if (scroll >= 100) sticky.addClass('fixed');
	  	else sticky.removeClass('fixed');
	});
});