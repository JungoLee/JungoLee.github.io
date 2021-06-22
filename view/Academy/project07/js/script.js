	jQuery(document).ready(function(){
		var th=$(window).height();
		$('body>div').height(th);		
			
		$(window).on('resize',function(){
			var ht=$(window).height();
			$('body>div').height(ht);
		});
			

			
		$(window).scroll(function(){
				var sct=$(window).scrollTop();
			
			if(sct>0 && sct<th*2) {
				$('.front_section li').removeClass('on');
				$('.front_section li:eq(0)').addClass('on');
				setTimeout(function(){
					$('#section1_1').css({backgroundImage:'url(images/jeju_bg7_off.png)'});
				},800);
			} else if(sct>=th*2 && sct<th*4){
				$('.front_section li').removeClass('on');
				$('.front_section li:eq(1)').addClass('on');
				setTimeout(function(){
					$('#section1_1').css({backgroundImage:'url(images/jeju_bg5_off.png)'});
					$('#section2_1').css({backgroundImage:'url(images/jeju_bg6_off.png)'});
				},800);
			} else if(sct>=th*4 && sct<th*6){
				$('.front_section li').removeClass('on');
				$('.front_section li:eq(2)').addClass('on');
				setTimeout(function(){
					$('#section2_1').css({backgroundImage:'url(images/jeju_bg7_off.png)'});
					$('#section3_1').css({backgroundImage:'url(images/jeju_bg8_off.png)'});
				},800);
				
			} else if(sct>=th*6 && sct<th*8){
				$('.front_section li').removeClass('on');
				$('.front_section li:eq(3)').addClass('on');
				setTimeout(function(){
					$('#section3_1').css('background-image','url(images/jeju_bg6_off.png)');
				},800);
			}
			

		});
		
		$('.offTop').on('mousewheel',function(event,delta){

			if (delta>0) {
				var prev=$(this).prev().prev().offset().top;
				$('html,body').stop().animate({scrollTop:prev},1400);
				
			} else if(delta<0){
				var next=$(this).next().next().offset().top;
				$('html,body').stop().animate({scrollTop:next},1400)
				
			};

		});

	$('.fixed').on('mousemove',function(e){
		var posX=e.pageX;
		var posY=e.pageY;
		
		$('.p11').css({right:-50-(posX/60),top:0-(posY/30)});
		$('.p12').css({right:30-(posX/20),bottom:-40-(posY/20)});
		$('.p13').css({right:60+(posX/20),top:-40-(posY/20)});
		
		$('.p21').css({right:-180+(posX/30),bottom:-480-(posY/20)});
		$('.p22').css({right:130+(posX/50),bottom:-40-(posY/50)});


		$('.p32').css({left:110+(posX/20),top:-270-(posY/20)});
		$('.p33').css({right:-70+(posX/20),top:810-(posY/20)});
		
		$('.p41').css({right:20+(posX/30),bottom:-120-(posY/20)});
		$('.p42').css({right:0+(posX/20),top:-180-(posY/50)});		
	});
	
		$('.spring').on('click',function(e){
			e.preventDefault();
			
			var springTop=$('.offTop').eq(0).offset().top;
			$('html,body').stop().animate({scrollTop:springTop},1000);
		});

		$('.summer').on('click',function(e){
			e.preventDefault();
			
			var summerTop=$('.offTop').eq(1).offset().top;
			$('html,body').stop().animate({scrollTop:summerTop},1000);
		});
		$('.fall').on('click',function(e){
			e.preventDefault();
			
			var fallTop=$('.offTop').eq(2).offset().top;
			$('html,body').stop().animate({scrollTop:fallTop},1000);
		});
		$('.winter').on('click',function(e){
			e.preventDefault();
			
			var winterTop=$('.offTop').eq(3).offset().top;
			$('html,body').stop().animate({scrollTop:winterTop},1000);
		});	


	




		
	});