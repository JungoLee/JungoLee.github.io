	jQuery(document).ready(function(){

		setInterval(function(){	
			var scrollImg=$('#scrollImg');

			scrollImg.addClass('bg_color4');

		},3000);
		
	//메인페이지 스크롤 이미지********************************************
		function move(indexNum,start,end){
			indexNum.css({left:start}).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
		};		
		var x=0;
		var nowAList=$('#scrollImg #overhidden li');
		setInterval (function(){
			var prev=nowAList.eq(x);
			move(prev,0,'-100%');
			
			x++
			if(x==nowAList.size()) x=0;
			
			var next=nowAList.eq(x);
			move(next,'100%',0);
		},3000)

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
	
	$('#newMenu').each(function(){
		var topDiv=$(this);
		var anchors=topDiv.find('ul a');
		var panelDivs=topDiv.find('.menuImg > img');
		var lastAnchor;//마지막으로 클릭한 요소를 저장하기 위한 변수
		var lastPanel;
		
		anchors.show();
		lastAnchor=anchors.filter('.point');
		lastPanel=$(lastAnchor.attr('href'));
		panelDivs.hide();
		lastPanel.show();
		
		anchors.click(function(e){
			e.preventDefault();
			
			var currentAnchor=$(this);
			var currentPanel=$(currentAnchor.attr('href'));
			
			if(currentAnchor.get(0)===lastAnchor.get(0)){
				return;
			}
			
			lastPanel.fadeOut(200, function(){
				lastAnchor.removeClass('point');
				currentAnchor.addClass('point');
				currentPanel.fadeIn(200);
				
				lastAnchor=currentAnchor;
				lastPanel=currentPanel;
			});
		});
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
	
});