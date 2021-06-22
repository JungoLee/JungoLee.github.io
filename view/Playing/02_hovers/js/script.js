$(document).ready(function(){
	var windowH=$(window).height();

	$('body').height(windowH);
	$('body').height(windowH);


		$('html,body').on('mousemove',function(event){
			posX=event.pageX;
			posY=event.pageY;

			$('.hover_box').each(function(){
				var thisT=$(this).offset().top;
				var thisL=$(this).offset().left;
				var thisW=$(this).width();
				var thisH=$(this).height();
				var cover=$(this).find('.hover_cover');

				cover.css({top:0,left:posX-thisL-thisW/2});

				if (posY>thisT && posY<thisT+thisH && posX>thisL && posX<thisL+thisW) {
					cover.css({top:0,left:0});
				}



				$(this).click(function(){
					cover.animate({top:0,left:0},1000000000);
				});
			});

		});








});