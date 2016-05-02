// height width
var wHeight = $(window).height();
var wWidth = $(window).width();


// video background

$(document).ready(function() {
    $('.player').mb_YTPlayer();
    $('.form-cont').load('form.html');
});


// nav

function section1(){$('html,body').animate( { scrollTop: $('.section-01').offset().top}, 400)};
function section2(){$('html,body').animate( { scrollTop: $('.section-02').offset().top}, 400)};
function section3(){$('html,body').animate( { scrollTop: $('.section-03').offset().top}, 400)};
function gotop(){$('html,body').animate( { scrollTop: $('html,body').offset().top}, 100)};


// scroll

$(document).ready(function(){
	var wh = $(window).height();
	$(window).scroll(function(){
		var y = $(window).scrollTop();
		if( y >= wh ){
			$('nav').addClass('solid');
		} else {
			$('nav').removeClass('solid');
		}
	});
})

$( window ).resize(function() {
	mainBG();
});


$('.works li').click(function(){
	var name = $(this).attr('project');	
	$('.detail').addClass('show');
	$('.detail iframe').attr('src','projects/' + name + '.html');
	$('body').addClass('blur');

	var nth = $(this).index();
	var num = $('.works li').length;
	var prevlink = $('.works li:nth-of-type('+ nth + ')').attr('project');
	var nextlink = $('.works li:nth-of-type('+ ( nth + 2 ) + ')').attr('project');
	$('.detail .prev').click(function(){
		$('.detail iframe').attr('src','projects/' + prevlink + '.html');
	});
	$('.detail .next').click(function(){
		$('.detail iframe').attr('src','projects/' + nextlink + '.html');
	});

	if( nth == 0 ) {
		$('.detail .prev').click(function(){
			$('.detail iframe').attr('src','projects/' +  $('.works li:last-of-type').attr('project') + '.html');
		});
	};
	if( nth == ( num - 1 ) ) {
		$('.detail .next').click(function(){
			$('.detail iframe').attr('src','projects/' +  $('.works li:first-of-type').attr('project') + '.html');
		});
	}
});

$('.detail .close').click(function(){
	$('.detail').removeClass('show');
	$('.detail iframe').attr('src','');
  	$('body').removeClass('blur');
})


// mobile

var device = navigator.userAgent.toLowerCase();
var mobile = device.match(/(iphone|ipod|ipad|android)/);
if (mobile) {
	$('header').addClass('mobile-gif')
}