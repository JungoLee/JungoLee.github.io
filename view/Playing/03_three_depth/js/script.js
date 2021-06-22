jQuery(document).ready(function(){
	var windowH=$(window).height();
	var windowW=$(window).width();
	var sct=$(window).scrollTop();
	
	///////////////////////////////////
	
	//////// 컨테츠 크기값
	
	///////////////////////////////////
	
	$('#side_nav').height(windowH);
	$('#side_nav').width(windowW/20);
	
	$('#section').height(windowH);
	$('#section').width(windowW);

	///////////////////////////////////
	
	//////// 컨텐츠 리사이즈값
	
	///////////////////////////////////	
	
	$(window).resize(function(){
		var windowH=$(window).height();
		var windowW=$(window).width();	
		
		$('#side_nav').height(windowH);
		$('#side_nav').width(windowW/20);
	
		$('#section').height(windowH);
		$('#section').width(windowW);	

		
	});
	
	///////////////////////////////////
	
	//////// 쓰리뎁스 메뉴 제정의
	
	///////////////////////////////////		
	
	
	
	$('.menu>ul>li').each(function(){
		var tg=$(this);
		var menutop=tg.offset().top;
		var windowH=$(window).height();
		var windowW=$(window).width();	
		$('.menu .th_dep').css({height:windowH,top:-menutop});
		tg.find('.th_bg').css({height:windowH,top:-menutop});
		
		$(window).resize(function(){
			var menutop=tg.offset().top;
			var windowH=$(window).height();
			var windowW=$(window).width();
			$('.menu .th_dep').css({height:windowH,top:-menutop});
			tg.find('.th_bg').css({height:windowH,top:-menutop});
		});
	});
	
	
	///////////////////////////////////
	
	//////// 메뉴 이벤트
	
	///////////////////////////////////	

	var menu_on=true;
	
	function close_menu(){
		$('.menu li .th_dep').stop().animate({opacity:0,left:'100%'},200);
		$('.menu li .th_bg').stop().animate({opacity:0,left:'100%'},200);
		$('#side_nav .menu>ul').stop().animate({opacity:0,left:'0%'},200,function(){menu_on=true;});
		$('.menu li .text_bg').stop().animate({width:0},200);
		$('.menu li.list>a').css({color:'#000000'});
	}

	
	$('#side_nav .menu>a').click(function(e){
		e.preventDefault();
		if (menu_on){
			$('#side_nav .menu>ul').stop().animate({opacity:1,left:'100%'},200,function(){menu_on=false;});
		} else if (!menu_on){
			 close_menu();
		};
	});
	
	$('#side_nav .menu>ul>li>a').each(function(){
		var tg=$(this);
		var threeD=tg.parent('li').find('.th_dep');
		var threeB=tg.parent('li').find('.th_bg');
		var textB=tg.parent('li').find('.text_bg');
		var textA=tg.parent('li.list').find('a');
		tg.click(function(e){
			e.preventDefault();
			$('.menu li .th_dep').stop().animate({opacity:0,left:'100%'},200);
			$('.menu li .th_bg').stop().animate({opacity:0,left:'100%',width:0},200);
			$('.menu li .text_bg').stop().animate({width:0},200);
			$('.menu>ul>li>a').css({color:'#000000'});
			textA.css({color:'#ffffff'});
			textB.stop().animate({width:'100%'},200,function(){
				threeD.stop().animate({opacity:1,left:'100%'},200);
				threeB.stop().animate({opacity:1,left:'100%',width:'120%'},200);				
			});

		});
	});
	
	$('#section').click(function(e){
		e.preventDefault();
		close_menu();
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});