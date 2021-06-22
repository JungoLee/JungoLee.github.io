	jQuery(document).ready(function(){
		
		
		////////////////////////////////////////////
		
		///////////// 	  Header	
		
		////////////////////////////////////////////
		
		
		
		$('.full_box2>ul').hover(function(){
			var tg=$(this);
			var oneLi=$('.full_box2>ul>li>a');
			var fullBox=$('.full_box2')
			fullBox.css({background:'#ffffff','border-bottom':'1px solid #cccccc'})
			oneLi.css({color:'#000000'});
			tg.find('.height').css({height:'410px'});
			tg.find('.bg').css({height:'350px'});
		},function(){
			var sct=$(window).scrollTop();
			var tg=$(this);
			var oneLi=$('.full_box2>ul>li>a');
			var fullBox=$('.full_box2');
			
			if (sct>80){
			fullBox.css({background:'#ffffff','border-bottom':'1px solid #cccccc'})
			oneLi.css({color:'#000000'});
			} else{
			fullBox.css({background:'none','border-bottom':'0'})
			oneLi.css({color:'#ffffff'});			
			};
			

		$(window).scroll(function(){
			var sct=$(this).scrollTop();
			var divTop=$('div').offset().top;
			if (sct>divTop){
			
			};
				
		});
			tg.find('.height').css({'height':'60px'});
			tg.find('.bg').css({'height':'0px'});		
		});
		$('.full_box2 li').hover(function(){
			var tg=$(this);
			tg.find('a.title').css({color:'#ff0000'});
			tg.find('ul').css({background:'#ffffff'});
			tg.find('dl').css({background:'#ffffff'});
		},function(){
			var tg=$(this)
			tg.find('a.title').css({color:'#000000'});
			tg.find('ul').css({background:'#f3f3f3'});
			tg.find('dl').css({background:'#f3f3f3'});
		});
		$('.full_box2 li>ul>li').hover(function(){
			var tg=$(this);
		
			tg.find('a').css({color:'#ff0000'});

		},function(){
			var tg=$(this)
			tg.find('a').css({color:'#000000'});
		
		});
		$('.full_box2 li>dl>dt').hover(function(){
			var tg=$(this);
		
			tg.find('a').css({color:'#ff0000'});

		},function(){
			var tg=$(this)
			tg.find('a').css({color:'#000000'});
		
		});
		$('.full_box2 li>dl>dd').hover(function(){
			var tg=$(this);
		
			tg.find('a').css({color:'#ff0000'});

		},function(){
			var tg=$(this)
			tg.find('a').css({color:'#000000'});
		
		});
		
		
		
		////////////////////////////////////////////
		
		///////////// IMG SLIDE  	
		
		////////////////////////////////////////////		
		
	
		var slideImg=$('.slide>img');
		var textImg=$('.text>img');
		var btnSlide=$('.img_slide>.btn>p');

		
		slideImg.eq(0).stop().animate({width:'100%',left:0},4000)
		textImg.eq(0).stop().animate({left:'10%'},2000)
		btnSlide.eq(0).css({width:'20px',height:'20px',opacity:1, top:'-2.5px',left:'1.5px'});
		
		
		
	
		var btnP=$('.btn p').index();
		
		$('.btn p').on('click',function(){
			var tg=$(this);
			btnP=$(this).index();
			
			btnSlide.css({width:'15px',height:'15px',opacity:0.5,top:'0px',left:'0px'});
			slideImg.stop().fadeOut(500,function(){
					$(this).css({width:'120%',left:'-10%'})
			});
			textImg.stop().fadeOut(250,function(){
				$(this).css({left:'5%'})
			});
			
			tg.css({width:'20px',height:'20px',opacity:1,top:'-2.5px',left:'1.5px'});
			slideImg.eq(btnP).stop().fadeIn(500,function(){
				$(this).stop().animate({width:'100%',left:0},4000);
			});
			textImg.eq(btnP).stop().fadeIn(250,function(){
				$(this).stop().animate({left:'10%'},2000)
			});
		});
		
		function timer(){
			setIntervalId=setInterval(function(){
			
			slideImg.eq(btnP).stop().fadeOut(500,function(){
					$(this).css({width:'120%',left:'-10%'})
			});
			textImg.eq(btnP).stop().fadeOut(500,function(){
				$(this).css({left:'5%'})
			});
			btnSlide.eq(btnP).css({width:'15px',height:'15px',opacity:0.5,top:'0px',left:'0px'});

			
			
			btnP++;
			
			if(btnP==slideImg.size()) {btnP=0};
			
			
			slideImg.eq(btnP).stop().fadeIn(500,function(){
				$(this).stop().animate({width:'100%',left:0},4000);
			});
			textImg.eq(btnP).stop().fadeIn(500,function(){
				$(this).stop().animate({left:'10%'},2000)
			});
			btnSlide.eq(btnP).css({width:'20px',height:'20px',opacity:1,top:'-2.5px',left:'1.5px'});
	
			
		
		},5000);
		};	
		
		timer();
		
		
		$('.img_slide').hover(function(){
			clearInterval(setIntervalId);
		},function(){
			timer();
		});
			
		
				
	
		
		////////////////////////////////////////////
		
		///////////// SCROLL SECTION	
		
		////////////////////////////////////////////	

		$(window).scroll(function(){
			var sct=$(this).scrollTop();
			
			if (sct>80) {	
			var oneLi=$('.full_box2>ul>li>a');
			var fullBox=$('.full_box2')
			fullBox.css({background:'#ffffff','border-bottom':'1px solid #cccccc'})
			oneLi.css({color:'#000000'});

			}
				else {
				var oneLi=$('.full_box2>ul>li>a');
				var fullBox=$('.full_box2')
				fullBox.css({background:'none','border-bottom':'0'})
				oneLi.css({color:'#ffffff'});
				
				}
			
			var textBox=$('#section .content2>.story>.text_box').offset().top;
			var topVal=$('.story>img').css('top');
			$('.story>img').stop().animate({top:sct*0.05-80});
			
			if (sct>textBox-900) {$('#section .content2>.story>.text_box').stop().animate({bottom:0})}
				else {$('#section .content2>.story>.text_box').stop().animate({bottom:'-180px'});};
				
			var section2Top=$('#section2').offset().top;
			if (sct>section2Top-500) {$('#section2 .text1,#section2 .text2').stop().animate({opacity:1},500)} 
				else {$('#section2 .text1,#section2 .text2').stop().animate({opacity:0},500)}
			if (sct>section2Top-300) {$('#section2 .text3').stop().animate({opacity:1},500)} 
				else {$('#section2 .text3').stop().animate({opacity:0},500)}
			
			
			var headerW=$('#header').offset();
			if (headerW.left>1040){$('#header .mobile_box').hide();}
		});

	
		////////////////////////////////////////////
		
		///////////// SECTION 	
		
		////////////////////////////////////////////
		
		$('#section a').hover(function(){
			$(this).find('.underLine').stop().animate({width:'210px'},500)
		},function(){
			$(this).find('.underLine').stop().animate({width:'0px'},500)
		});
		
		
		$('#section2 .tab1').mouseover(function(){			
			$('.arrow1').stop().animate({left:'33%'},300,function(){
				$(this).animate({left:'38%'},300,function(){
					$(this).animate({left:'35%'},300)
				});
			});
		});
		
		$('#section2 .tab2').mouseover(function(){			
			$('.arrow2').stop().animate({left:'98%'},300,function(){
				$(this).animate({left:'103%'},300,function(){
					$(this).animate({left:'100%'},300)
				});
			});
		});
		$('#section2 .tab3').mouseover(function(){			
			$('.arrow3').stop().animate({left:'68%'},300,function(){
				$(this).animate({left:'73%'},300,function(){
					$(this).animate({left:'70%'},300)
				});
			});
		});
		$('#section2 .tab4').mouseover(function(){			
			$('.arrow4').stop().animate({left:'56%'},300,function(){
				$(this).animate({left:'58%'},300,function(){
					$(this).animate({left:'57%'},300)
				});
			});
		});
		
		
		////////////////////////////////////////////
		
		///////////// SECTION 2
		
		////////////////////////////////////////////		
		
		$('#section2 .content4 .top, #section2 .content4 .bottom, #section2 .content4 .icon_box').hover(function(){
			$(this).css({background:'rgba(0,0,0,0.1)'})
		},function(){
			$(this).css({background:'rgba(0,0,0,0)'})
		});
		
		
		
		
		////////////////////////////////////////////
		
		///////////// Mobile Section
		
		////////////////////////////////////////////				
		
		
		$('.mobile_box>ul>.height').toggle(function(){
			var tg=$(this);
		
			var ul=tg.find('ul');
			
			$('.mobile_box>ul>.height>ul').stop().slideUp();

			ul.stop().slideDown();
		},function(){
			var tg=$(this);
			var ul=tg.find('ul');
			ul.stop().slideUp();
		});
		
		
		$('.full_box1>.center>.button').toggle(function(){
			
			var tg=$(this);
			
			var headerW=$('#header').offset()
			tg.find('.top, .bottom').fadeOut();
			tg.find('.middle1').css({transform:'rotate(45deg)'});
			tg.find('.middle2').css({transform:'rotate(-45deg)'});
			if (headerW.left<1040){$('#header .mobile_box').fadeIn();}
				
		},function(){

			var tg=$(this);
			tg.find('.top, .bottom').fadeIn();
			tg.find('.middle1').css({transform:'rotate(0deg)'});
			tg.find('.middle2').css({transform:'rotate(0deg)'});	
			$('#header .mobile_box').fadeOut();		
			$('.mobile_box>ul>.height>ul').stop().slideUp();
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	});