	jQuery(document).ready(function(){


		$('#scrollImg .btn a').on('click',function(){
			var idx=$('#scrollImg .btn a').index(this);
			$('.bg_color div:visible').fadeOut(400);
			$('.bg_color div').eq(idx).fadeIn(400);

			return false;
		});
	
	var n=0;
	

		
	//메인페이지 스크롤 이미지********************************************

	function moveSlider(index){
	
		var willMoveLeft = -(index * 1247);
	
		
		$('.slider_panel').animate({left:willMoveLeft},'slow');
		$('.btn a[data-index=' + index + ']').addClass('active');
		$('.btn a[data-index!=' + index + ']').removeClass('active');
	}

	$('#scrollImg .btn a').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
	});




	var visual = $('.slider_panel li img');
	var button = $('#scrollImg .btn a');
	var current = 0;
	var setIntervalId;
	var setIntervalBg;


	button.on({click:function(){
	
		var tg = $(this);
		var i = tg.index();

		button.removeClass('active');
		tg.addClass('active');

		move(i);
	
	}});

	$('#scrollImg').on({mouseover:function(){
	
		clearInterval(setIntervalId);

	},mouseout:function(){
	
		timer();
	
	}});

	function move(i){
	
		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'},1000);
		nextEl.css({left:'100%'}).stop().animate({left:0},1000);
		current = i;
	
	}

	function timer(){
		
		setIntervalId = setInterval(function(){
			var n = current + 1;
			if(n==visual.size()){	
				n = 0;
			}
			button.eq(n).trigger('click');	
		},3000);	
	};
	

	timer();



	//인풋 글씨 변경********************************************
		$('ul>li').each(function(){
			var li=$(this);
			
			var classremove=$('li');
			
	
			li.click(function(){
				classremove.removeClass('point');
				li.addClass('point')
				
			});
		});	
		
	//타이틀  효과주기********************************************
		
		var balloon=$('<div class="balloon"></div>').appendTo('body');
		function updateBalloonPosition(x,y){
			balloon.css({left:x+15,top:y});
		}
		function showBalloon(){
			balloon.stop();
			balloon.css('opacity',0).show();
			balloon.animate({opacity:1},200);
		}
		function hideBalloon(){
			balloon.stop();
			balloon.animate({opacity:0},200,function(){balloon.hide();});
		}
		$('.tipTitle').each(function(){
			var element=$(this);
			var text=element.attr('title');
			element.attr('title','');
			element.hover(function(event){
					balloon.text(text);
					updateBalloonPosition(event.pageX,event.pageY);
					showBalloon();
			},function(){
				hideBalloon();
			});
			element.mousemove(function(event){
			updateBalloonPosition(event.pageX,event.pageY);
			})
		});	
	// 메뉴바 효과주기********************************************
		jQuery(document).ready(function(){
		var menu=$('#gnb1');
		var menuHeight=menu.height();
		var pageURL=location.href;
		var activeMenu;
		
		menu.on({mouseover:function(){
			var tg=$(this);
			
			var th=menuHeight+tg.find('.bg_menu>li').height();
			menu.stop().animate({height:th},{duration:800,queue:false,easing:'easeOutBounce'});
		},mouseout:function(){
			var tg=$(this);
			
			menu.stop().animate({height:menuHeight},{duration:800,queue:false,easing:'easeOutQuart'});
		}
		});
	});
	// 신메뉴 탭기능및 효과주기

	

	$('#infoMenu ul li a').on('click',function(){
		var idx=$('#infoMenu ul li a').index(this);
		$('.menuImg img').fadeOut();
		$('.menuImg img').eq(idx).fadeIn();
		

		
		$('#infoMenu ul li a').removeClass('point')
		$(this).addClass('point')

		
		return false;
	});
	
	var n=0;
	
	function autoBnn(){
		n++;
		if(n>=5)n=0;
		$('#infoMenu ul li a').eq(n).click(); //0-3 증가 되므로 클릭이라는 강제 버튼을 적용하여 자동으로 클릭 함수로 인해 자동으로 클릭됨
		auto=setTimeout(autoBnn,2000);
	};
	
	var auto=setTimeout(autoBnn,2000);
		
		$('#newMenu').hover(function(){
		clearTimeout(auto)
	},function(){
		auto=setTimeout(autoBnn,2000);
	});

	//  신규 오픈 매장 탭기능

	

	$('#openShop ul li ').on('click',function(){
		var ios=$('#openShop ul li').index(this);
		$('#openShop .imgBox').fadeOut();
		$('#openShop .imgBox').eq(ios).fadeIn();
		

		
		$('#infoMenu ul li').removeClass('point')
		$(this).addClass('point')

		
		return false;
	});

	var o=0
	function autoNewShop(){
		o++
		if(o>=4)o=0;
		$('#openShop ul li').eq(o).click(); //0-3 증가 되므로 클릭이라는 강제 버튼을 적용하여 자동으로 클릭 함수로 인해 자동으로 클릭됨
		autoBg=setTimeout(autoNewShop,3500);
	};
	
	var autoBg=setTimeout(autoNewShop,3500);

	$('#openShop').hover(function(){
		clearTimeout(autoBg)
	},function(){
		autoBg=setTimeout(autoNewShop,2000);
	});

		
	// 날씨 움직이기 
	
	$('#weather').animate({right:140},1500);
	
	
	// introSns 부분 움직이기


	
	$('#introSns li a').hover(function() {
			  $(this).stop().animate({ fontSize : '24px' });
		},
		function() {
			  $(this).stop().animate({ fontSize : '20px' });
		});
		
		
	// 쇼핑몰 부분	탭 기능 
	

	
		var visualMall=$('#mall_overflow>.mall_slider>div');
		var buttonMall=$('#mallHead ul li a');
		var currentMall=0;
		var setIntervalIdMall;
		
		buttonMall.on('click',function(){
			
			var tg=$(this);
			var b=tg.parent().index();
			
			buttonMall.removeClass('point');
			tg.addClass('point');
			
			move1(b);
			return false;
		});
		
		timerMall();
		
		function timerMall(){
			setIntervalIdMall=setInterval(function(){
				var prev=visualMall.eq(currentMall);
				var pn=buttonMall.eq(currentMall);
				moveMall(prev,0,'-100%');
				pn.removeClass('point');
				
				currentMall++
				
				if(currentMall==visualMall.size()) currentMall=0;
				
				var next=visualMall.eq(currentMall);
				var pnn=buttonMall.eq(currentMall);
				moveMall(next,'100%',0);
				pnn.addClass('point')
			},3000)
		}	
		function moveMall(tgMall, startMall, endMall){
			tgMall.css('left',startMall).stop().animate({left:endMall},{duration:500,ease:'easeInCubic'});
		}
		
		$('#mall_overflow').hover(function(){
			clearInterval(setIntervalIdMall);
		},function(){
			timerMall();
		});
		
		function move1(b)	{
			if(currentMall==b) return;
			
			var currentEl=visualMall.eq(currentMall);
			var nextEl=visualMall.eq(b);
			
			currentEl.css({left:0}).stop().animate({left:'-100%'});
			nextEl.css({left:'100%'}).stop().animate({left:0});
			currentMall=b
			
		}	

	
	
	
});