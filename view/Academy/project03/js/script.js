jQuery(document).ready(function(){
	/////////////////////////////////////////////////////////
	
						//EMAIL and TOP Tap
	
	/////////////////////////////////////////////////////////	

	function emtop(){

		
		
		$('.emtop a').hover(function(){
			var tg=$(this);
			var tgOff=tg.find('img');
	
			tgOff.stop().animate({opacity:1},300);
			
			
		},function(){
			var tg=$(this);
			var tgOff=tg.find('img');
			
		
			tgOff.stop().animate({opacity:0},300);

			
		});
		
		$(window).scroll(function(){
			var sct=$(this).scrollTop();
			
			if(sct>5) {$('.emtop').stop().animate({right:'30px'},200)}
				else {$('.emtop').stop().animate({right:'-200px'},200)}
		})
		
		$('.emtop .top ').click(function(){
			$('html').stop().animate({scrollTop:'0px'},600)
			return false;
		})
	};
	
	
	emtop()
	/////////////////////////////////////////////////////////
	
						//TWO_DEPTH 
	
	/////////////////////////////////////////////////////////
	function two_depth(){
		$('#header ul>li').hover(function(){
			var tg=$(this);
			var twoD=tg.find('ul');
			twoD.css({height:'auto', display:'block',opacity:0, top:'-10px'}).animate({opacity:1, top:0},200)
		},function(){
			var tg=$(this);
			var twoD=tg.find('ul');
			twoD.animate({opacity:0, top:'-12px' ,height:0 ,display:'none'},200);
		})
	}
	
	two_depth()
	
	$(window).scroll(function(){
		var sct=$(this).scrollTop();
		var headerH=$('#header_box');
		var headerT=$('#header_box #header');
		var twoD=$('#header_box #header>ul>li>ul')
		
		if (sct>=2) {
			headerH.stop().animate({top:'-10px'},200);
			headerT.stop().animate({top:'5px'},200);
			twoD.css({marginTop:'70px'});
			
		} else{
			headerH.stop().animate({top:0},200);		
			headerT.stop().animate({top:0},200);
			twoD.css({marginTop:'75px'});
		}
			
	});
	
	/////////////////////////////////////////////////////////
	
						//SCREEN_IMG
	
	/////////////////////////////////////////////////////////	

		
	function slideImg(){
		var button=$('#screen_img .button li');
		var content=$('#screen_img .slide li');	
		var current=0
		
		function move(i){
			if(current==i) return false;
			
			var currentEl=content.eq(current);
			var nextEl=content.eq(i);
		
			currentEl.css({left:0, 'z-index':10}).stop().animate({left:'-200%'},1500);
			nextEl.css({left:'100%', 'z-index':9}).stop().animate({left:0},1500);
			current=i
		}
		button.click(function(){
			var tg=$(this);
			var i=tg.index();
			var select=content.eq(i);
			
			move(i);
			button.removeClass('on')
			tg.addClass('on')
			
		})		
	
		function move1(tg, start, end){
			tg.css({left:start ,'z-index':10}).stop().animate({left:end},1500);
		}
		
		function move2(tg1, start1, end1){
			tg1.css({left:start1 ,'z-index':9}).stop().animate({left:end1},1500);
		}
		function timer(){
			setInterverId=setInterval(function(){
				var prev=content.eq(current);
				var pn=button.eq(current);
				
				move1(prev, 0, '-200%');
				pn.removeClass('on');
				
				current++
				
				if (current==content.size()) current=0;
				var next=content.eq(current);
				var pnn=button.eq(current);
				move2(next,'100%',0);
				pnn.addClass('on');
			},3000)
		}
		
		timer()
		
		$('#screen_img').hover(function(){
			clearInterval(setInterverId);
			clearInterval(timeLine);
		},function(){
			timer()
			timeLine1()
		})
		
		button.hide()
		$('#screen_img').hover(function(){
			button.fadeIn(500)
		},function(){
			button.stop().fadeOut(200)
		})
	}
	
	slideImg()
	
	
	
	$('#screen_img .time_line').css({width:0}).stop().animate({width:'100%'},3000);
		
		function timeLine(){
			setIntervalTime=setInterval(timeLine1,3000)
		}
		
		function timeLine1(){
			$('#screen_img .time_line').css({width:0}).stop().animate({width:'100%'},3000);
		}
		
		timeLine()
		
		$('#screen_img').hover(function(){
			clearInterval(setIntervalTime);
		},function(){
			timeLine()
		})
		
	
	
	
	
	
	/////////////////////////////////////////////////////////
	
						//SECTION1
	
	/////////////////////////////////////////////////////////
	
	
	
	
	
	
	function  img_change_se2(){

		var imgDiv=$('#section1 .content');
		
		imgDiv.removeClass('bg_box')
		
		imgDiv.hover(function(){
			var tg=$(this);
			tg.find('div:eq(0)').addClass('bg_box')
			tg.find('div:eq(0) img').stop().animate({opacity:0.5,width:'110%',left:'-5%', top:'-5%', height:'110%'},150)
		},function(){
			var tg=$(this);
			tg.find('div:eq(0) img').stop().animate({opacity:1, width:'100%',left:'0%', top:'0%', height:'100%'},150)			
		});
	};
	
	
	img_change_se2()


	
	function admin_image_se1(){
		var img_se1=$('.content a div.icon_box')
		var img_se2=img_se1.find('img')
		
		img_se2.hover(function(){
			var tg=$(this)
			$(this).attr('src',$(this).attr('src').replace('off.png','on.png'));
		},function(){
			var tg=$(this)		
			$(this).attr('src',$(this).attr('src').replace('on.png','off.png'));
		});
	}
	
	admin_image_se1()
	
	
	
	
	/////////////////////////////////////////////////////////
	
						//SECTION2
	
	/////////////////////////////////////////////////////////
	
	function img_change(){

		var imgDiv=$('#section2 div');
		var aTag=imgDiv.find('a')
			
		aTag.hover(function(){
			var tg=$(this);
			tg.stop().animate({opacity:1,width:'110%',left:'-5%', top:'-5%', height:'120%'},100)
		},function(){
			var tg=$(this);
			tg.stop().animate({width:'100%',left:'0%', top:'0%', height:'100%'},100)			
		});
		};
		
	img_change()
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop(); 

		var bgImage1_1=$('#bg_image1 .bg_image');
		
		bgImage1_1.css('top',-800+scrollTop*0.4)
			
	})
	
	/////////////////////////////////////////////////////////
	
						//SECTION3
	
	/////////////////////////////////////////////////////////
	
	$('#section3 div>img').css({bottom:'120%'});
	
	
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop(); 
		var section3=$('#section3').offset().top-500; 
		var sectionB=$('#section3').offset().top; 
		
		if (section3<=scrollTop) {$('#section3 div>img').animate({opacity:1,bottom:0},700)}
			
	});
	
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop(); 

		var bgImage2_1=$('#bg_image2 .bg_image');
		
		bgImage2_1.css('top',-2000+scrollTop*0.5)
			
	})	
	
	
	
	/////////////////////////////////////////////////////////
	
						//SECTION4
	
	/////////////////////////////////////////////////////////
	
	
	function imageChangeSe4(){
		var img=$('#section4 .introduce .footer_bg>a');
		
		img.hover(function(){
			var tg=$(this)
			tg.css({opacity:0}).animate({opacity:0.6},500).addClass('on');
		},function(){
			img.removeClass('on');
		});
	}
	
	imageChangeSe4()
	
	
	
	/////////////////////////////////////////////////////////
	
						//SECTION5
	
	/////////////////////////////////////////////////////////
	
	
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var section5Top=$('#section5').offset().top-300;
		
		
		if (sct>=section5Top) {
		
		
		
		$('#section5 .area1 h2').animate({left:'30px', top:'25px', fontSize:'45px'},500);
		
		$('#section5 .area1 .title').animate({left:'30px'},500);	
			
		$('#section5 .area1 .subject').animate({left:'30px'},500);
		
		setInterval(function(){		
		$('#section5 .area1 .link').animate({left:'380px'},1000);
		$('#section5 .area1 .link').animate({left:'350px'},1000);
		},0);
		
		};
	});
	
		
	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var section5Top=$('#section5').offset().top+200;
		
		
		if (sct>=section5Top) {
		
		
		
		$('#section5 .area2 h2').animate({left:'30px', top:'25px', fontSize:'45px'},500);
		
		$('#section5 .area2 .title').animate({left:'30px'},500);	
			
		$('#section5 .area2 .subject').animate({left:'30px'},500);
		
		setInterval(function(){		
		$('#section5 .area2 .link1').animate({left:'-290px'},1000);
		$('#section5 .area2 .link1').animate({left:'-260px'},1000);
		},0);
		
		}
	})
	
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop(); 
	
		var bgImage5_1=$('#section5 .img_area1>div');
		
		bgImage5_1.css('right',-300+scrollTop*0.1)
			
	})	;
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		var bgImage5_2=$('#section5 .img_area2>div');
		
		bgImage5_2.css('left',-600+scrollTop*0.1)
			
	})	;	
	
	
	/////////////////////////////////////////////////////////
	
						//SECTION6
	
	/////////////////////////////////////////////////////////	
	
	
	
	function move_se6(){
		var contentBox=$('#section6 .content_box');
		var current=0
		var i=contentBox.index();
		var button=$('.info_box>a');
		
		$('.info_box>.next').click(function(b){
			b.preventDefault();
			
			var prev=contentBox.eq(current);
			move_se6(prev,0,'-100%');
			
			current++
			if(current==contentBox.size()) {current=0}
						
			var next=contentBox.eq(current);			
			move_se6(next,'100%',0);
			
			

			
		});
		
		$('.info_box>.prev').click(function(c){
			c.preventDefault();
			
			var prev=contentBox.eq(current);
			move_se6(prev,0,'100%');		

			current--
			if(current==-contentBox.size()) {current=0}
					
			var next=contentBox.eq(current);			
			move_se6(next,'-100%',0);	
			

					
		});
		
		function timer(){
			setIntervalId_se6=setInterval(function(){
				var prev=contentBox.eq(current);
				
				move_se6(prev,0,'-100%');
				
				current++
				
				if(current==contentBox.size()) {current=0}
				
				var next=contentBox.eq(current);
				
				move_se6(next,'100%',0);
			},5000)
		};
		
		timer();
		
		function move_se6(tg, start, end){
			tg.css('left',start).stop().animate({left:end},900);
		};
		
		contentBox.hover(function(){
			clearInterval(setIntervalId_se6);
		},function(){
			timer();
		});
		button.hover(function(){
			clearInterval(setIntervalId_se6);
		},function(){
			timer();
		});
	};

	move_se6()
	
	function  img_change_se6(){

		var imgDiv=$('#section6 .content');
		

		
		imgDiv.hover(function(){
			var tg=$(this);
			tg.find('div:eq(0)').addClass('bg_box');
			tg.find('div:eq(0) img').stop().animate({opacity:0.5,width:'110%',left:'-5%', top:'-5%', height:'110%'},150);
		},function(){
			var tg=$(this);		
			tg.find('div:eq(0) img').stop().animate({opacity:1, width:'100%',left:'0%', top:'0%', height:'100%'},150)	;		
		});
	};
	
	
	img_change_se6()
	
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});