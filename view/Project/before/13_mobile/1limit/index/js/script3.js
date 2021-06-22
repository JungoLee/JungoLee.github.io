$(function(){
	$('.typeMoney').click(function(){
		$('.typing').stop().animate({bottom:0},500);
	});
	$('.typing').click(function(){
		$('.typing').stop().animate({bottom:'-100%'},500);
	});	
});