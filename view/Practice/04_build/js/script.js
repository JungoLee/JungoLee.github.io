jQuery(document).ready(function(){
	var windowH=$(window).height();
	var windowW=$(window).width();

	/////////////////////////////////////////
	
	////////// CONTENT SIZE & RESIZE
	
	/////////////////////////////////////////
	
	$('#header').width(windowW);
	$('#header').height(windowH/10);
	
	$('.sizeW').width(windowW);
	$('.sizeW').height(windowH);
	
	$('#header>.td_bg').width(windowW);

	$(window).resize(function(){
		var windowH=$(window).height();
		var windowW=$(window).width();	
		var nav_maxH=$('#header>.nav>li:eq(1)>ul').height();
		$('#header').width(windowW);
		$('#header').height(windowH/10);
		
		$('.sizeW').width(windowW);
		$('.sizeW').height(windowH);
		
		$('#header>.td_bg').width(windowW);
		
	});
	
	$('#header').hover(function(){
		var tg=$(this);
		tg.find('.td_bg').stop().animate({height:windowH/4},200);
		tg.find('.tD').stop().animate({height:windowH/4},200);
	},function(){
		var tg=$(this);
		tg.find('.td_bg').stop().animate({height:0},200);
		tg.find('.tD').stop().animate({height:0},200);	
	});
	
	
	$(window).scroll(function(){
		var sct=$(this).scrollTop();
		
		if (sct>=5) {
			$('#header').stop().animate({top:'-2%',height:windowH/12},200);
			$('#header').addClass('on');
			$('#header>.nav>li>a').addClass('on');
			$('#header>.nav>li>a>i').addClass('on');
		} else {
			$('#header').stop().animate({top:0,height:windowH/10},200);
			$('#header').removeClass('on');
			$('#header>.nav>li>a').removeClass('on');
			$('#header>.nav>li>a>i').removeClass('on');
		}
	});
	
	

		
	
	$('#content01>.slide_img>li').each(function(){
		var tgIndex=$(this).index();
		
		var img=$('#content01>.slide_img>li');
		var lineBar=$('#content01>.text_box>.bar');
		var text=$('#content01>.text_box>.text>ul>li');
		var textTitle=$('#content01>.text_box>.text>ul .title');
		var textSub=$('#content01>.text_box>.text>ul .sub');
		var i=lineBar.index();
		var btn=$('#content01>.text_box>.bar>.startC');			
	
		
		lineBar.eq(0).find('.line_bg').stop().animate({width:'100%'},3800);
		
		text.eq(0).css({transform:'scale(1.1)'});
		textTitle.eq(0).animate({marginLeft:0},500,function(){
			$(this).next().animate({marginLeft:0},500);
		});
		lineBar.eq(0).find('.C_bg').stop().animate({width:0,height:0,margin:'10px'},3500);	
		
		
		
		
		setId=setInterval(function(){

	
			img.eq(i).fadeOut(200,function(){
				$(this).css({transform:'scale(1)'});
			});
			lineBar.eq(i).find('.line_bg').stop().animate({width:'0%',left:'100%'},3800);
			text.eq(i).fadeOut(800);
			textTitle.eq(i).animate({marginLeft:'-15%'},250,function(){
				$(this).next().animate({marginLeft:'-15%'},250);
			});	
			setTimeout(function(){
				lineBar.eq(i).find('.C_bg').stop().animate({width:0,height:0,margin:'10px'},300);
			},3500);
			
			i++
			if (i==4) {i=0}
			
			img.eq(i).fadeIn(200,function(){
				$(this).css({transform:'scale(1.1)'});
			});
			lineBar.eq(i).find('.line_bg').css({left:0}).stop().animate({width:'100%'},4000);
			text.eq(i).fadeIn(1000);
			textTitle.eq(i).animate({marginLeft:0},500,function(){
				$(this).next().animate({marginLeft:0},500);
			});
			lineBar.eq(i).find('.C_bg').stop().animate({width:'100%',height:'100%',margin:0},200);
			
		},4000);
		
	
	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});