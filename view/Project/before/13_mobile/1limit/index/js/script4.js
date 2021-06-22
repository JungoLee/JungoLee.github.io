$(function(){
	$('#page4>.header>.center>a').click(function(){
			var tg=$(this);
			var i=tg.index();
			var content=$('#page4>.content>.content_hidden>div');
		
			var index=tg.attr('data-index');
			

			
			$('#page4>.header>.center>a').removeClass('on');
			tg.addClass('on');
			if (i==i) {
				content.eq(i).css({left:'100%'}).stop().animate({left:0,opacity:1},500);
				content.eq(i+1).stop().animate({opacity:0},500)
				content.eq(i-1).stop().animate({opacity:0},500)
				} ;
			if(i==2){
				countS1=0
				countS2=0
				countS3=0
				countS4=0
				countS5=0
				countS6=0
				setTimeoutId1();
				setTimeoutId2();
				setTimeoutId3();
				setTimeoutId4();
				setTimeoutId5();
				setTimeoutId6();
				$('#page4 .content3>.line>.w52').css({width:0}).stop().animate({width:'52%'},1200);
				$('#page4 .content3>.line>.w16').css({width:0}).stop().animate({width:'16%'},1200);
				$('#page4 .content3>.line>.w15').css({width:0}).stop().animate({width:'15%'},1200);
				$('#page4 .content3>.line>.w11').css({width:0}).stop().animate({width:'11%'},1200);
				$('#page4 .content3>.line>.w8').css({width:0}).stop().animate({width:'8%'},1200);
				$('#page4 .content3>.line>.w2').css({width:0}).stop().animate({width:'2%'},1200);			
			};
			return false;
		});
});