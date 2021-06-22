$(function(){
	$('#page3 .addPay').click(function(){
		$('.popup').fadeIn();
		$('.popup p>.left').css({transform:'rotate(45deg)'});
		$('.popup p>.right').css({transform:'rotate(-45deg)'});
	});
	$('#page3 .popup>.white_bg>p').click(function(){
		$('.popup').fadeOut();
		$('.popup p>.left').css({transform:'rotate(180deg)'});
		$('.popup p>.right').css({transform:'rotate(90deg)'});
	});
	$('#page3 .popup>.white_bg a').click(function(){
		$('.popup').fadeOut();
	});

	$('#page3 .popup2 .accept').click(function(){
		$('.popup2').fadeOut();
	});
	$('#page3 .popup2 .no').click(function(){
		$('.popup').fadeOut();
	});
		
	
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
	

	
	///////////////////////////////////////////////
	
	///////////// 그래프 만들기
	
	////////////////////////////////////////////////

	
	
	function setTimeoutId1(){
	setTimeout(function(){
		var perText=$('#page4 .content3>.persent>li');
		countS1++
		perText.eq(0).text(countS1+'%'); 
		
		if (countS1>51) return ;

		setTimeoutId1()
	},20)
	}; 
	function setTimeoutId2(){
	setTimeout(function(){
		var perText=$('#page4 .content3>.persent>li');
		countS2++
		perText.eq(1).text(countS2+'%'); 
		
		if (countS2>15) return ;

		setTimeoutId2()
	},120)
	}; 
	function setTimeoutId3(){
	setTimeout(function(){
		var perText=$('#page4 .content3>.persent>li');
		countS3++
		perText.eq(2).text(countS3+'%'); 
		
		if (countS3>14) return ;

		setTimeoutId3()
	},150)
	}; 
	function setTimeoutId4(){
	setTimeout(function(){
		var perText=$('#page4 .content3>.persent>li');
		countS4++
		perText.eq(3).text(countS4+'%'); 
		
		if (countS4>10) return ;

		setTimeoutId4()
	},200)
	}; 
	function setTimeoutId5(){
	setTimeout(function(){
		var perText=$('#page4 .content3>.persent>li');
		countS5++
		perText.eq(4).text(countS5+'%'); 
		
		if (countS5>7) return ;

		setTimeoutId5()
	},200)
	}; 
	function setTimeoutId6(){
	setTimeout(function(){
		var perText=$('#page4 .content3>.persent>li');
		countS6++
		perText.eq(5).text(countS6+'%'); 
		
		if (countS6>1) return ;

		setTimeoutId6()
	},200)
	}; 	

});