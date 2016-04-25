// height width
var wHeight = $(window).height();
var wWidth = $(window).width();

// $('header').css('height', wHeight);
// if ( (wHeight / wWidth) < (9/16) ) {
//     $('header video').css('width','100%');
// } else {
//     $('header video').css('height','100%')
// };

// $( window ).resize(function() {
//     $('header video').attr('style','')
//     $('header').css('height', $(window).height());
//     if ( ($(window).height() / $(window).width()) < (9/16) ) {
//       $('header video').css('width','100%')
//     } else {
//       $('header video').css('height','100%')
//     };
// });

$(document).ready(function() {
    $('.player').mb_YTPlayer();
    $('.form-cont').load('form.html');
});

$('.works li').click(function(){
	var name = $(this).attr('project');
	$('.detail').addClass('show');
	$('.detail iframe').attr('src','projects/' + name + '.html');
	$('body').addClass('blur');
});

$('.detail .close').click(function(){
	$('.detail').removeClass('show');
	$('.detail iframe').attr('src','');
  $('body').removeClass('blur');
})