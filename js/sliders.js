$(document).ready(function () {
	$(".case").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	});

	if ($(window).width() < 768) {
		$(".feedback").slick({
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		})
	}

	else if ($(window).width() < 1200) {
		$(".feedback").slick({
			dots: true,
			arrows: false,
			slidesToShow: 2,
			slidesToScroll: 1
		})
	}
});