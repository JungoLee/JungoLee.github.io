jQuery(document).ready(function(){

	////////////////////////////////////////////////////
	
	///////////////////// HEADER 부분
	
	////////////////////////////////////////////////////

	var on=false;
	var on5=false;
	var on6=false;
	
	$('.media_button').click(function(){
		
		if(!on6){

			$('.media_box').stop().animate({left:0},500,function(){
				$('.top').addClass('on');
				$('.bottom').addClass('on');
				$('.middle').addClass('on');
				$('.middle2').addClass('on');			
			
			});	
			on6=true;
		} else if(on6){
			$('.bg_black').fadeOut();
			$('.media_box').stop().animate({left:'-320px'},300,function(){
				$('.top').removeClass('on');
				$('.bottom').removeClass('on');
				$('.middle').removeClass('on');
				$('.middle2').removeClass('on');			
				$('.fl .first').css({height:'45px'});
			});	
			on6=false;
			on=false;
			on2=false;
			on3=false;
			on5=false;
		} 
	});
	
	$('.bg_black').click(function(){
		$('.bg, .bg2, .bg3, .bg4, .fr li>ul').hide();
		$(this).hide();
			on=false;
			on2=false;
			on3=false;
	});
	
	$('#header .first>a').click(function(e){
		e.preventDefault();
		if (!on) {
		
			$('.bg3, .bg4, .fr li>ul').hide();
			$('.bg_black').fadeIn(250,function(){
				var img=$('.bg>div>a')
				img.eq(0).stop().animate({marginTop:0,opacity:1},60,function(){
					img.eq(1).stop().animate({marginTop:0,opacity:1},60,function(){
						img.eq(2).stop().animate({marginTop:0,opacity:1},60,function(){
							img.eq(3).stop().animate({marginTop:0,opacity:1},60,function(){
								img.eq(4).stop().animate({marginTop:0,opacity:1},60,function(){
									img.eq(5).stop().animate({marginTop:0,opacity:1},60,function(){
										img.eq(6).stop().animate({marginTop:0,opacity:1},60,function(){
											$('.bg2_box').stop().animate({opacity:1},60);
										
										});
									});
								});
							});	
						});		
					});			
				});
				img.eq(7).stop().animate({marginTop:'50px',opacity:1},60,function(){
					img.eq(8).stop().animate({marginTop:'50px',opacity:1},60,function(){
						img.eq(9).stop().animate({marginTop:'50px',opacity:1},60,function(){
							img.eq(10).stop().animate({marginTop:'50px',opacity:1},60,function(){
								img.eq(11).stop().animate({marginTop:'50px',opacity:1},60,function(){
									img.eq(12).stop().animate({marginTop:'50px',opacity:1},60,function(){
										img.eq(13).stop().animate({marginTop:'50px',opacity:1},60)
									});
								});
							});	
						});		
					});			
				});				
			});		
			$('.bg, .bg2').fadeIn(250);	
			
			$('#header .header_box>ul>li>a').addClass('on');
			$(this).removeClass('on');
			on=true;	
			

		}
		 else if (on){
				
				var img=$('.bg_box>a')
				var img2=$('.bg_box_mobile>a');
				$('.bg_black').stop().fadeOut(100);
				$('.bg2_box').stop().animate({marginTop:'8px',opacity:0},50,function(){
					img.css({marginTop:'-20px',opacity:0},60);
					img2.css({marginTop:'20px',opacity:0},60);
				$('.bg, .bg2').fadeOut(20);	
			});
			on=false;
			on2=false;
			on3=false;
	
			$('#header .header_box>ul>li>a').removeClass('on');
		};
		
		if (!on5){	$('.fl .first').stop().animate({height:'445px'},300); on5=true;}
			else if(on5){$('.fl .first').stop().animate({height:'45px'},300); on5=false;}		
	});
	
	$('.bg_box3>a').hover(function(){
		$(this).find('span').css({color:'#ffffff'});
	},function(){
		$(this).find('span').css({color:'#b7b7ba'});
	});
	
	var on2=false;
	
	$('#header .forth>a').click(function(e){
		e.preventDefault();
		if (!on2) {
			$('.bg, .bg2, .fr li>ul').hide();
			$('.bg_black').fadeIn(250,function(){
				var img=$('.bg_box3>a')
				img.eq(0).stop().animate({marginTop:0,opacity:1},60,function(){
					img.eq(1).stop().animate({marginTop:0,opacity:1},60,function(){
						img.eq(2).stop().animate({marginTop:0,opacity:1},60,function(){
							img.eq(3).stop().animate({marginTop:0,opacity:1},60,function(){
								img.eq(4).stop().animate({marginTop:0,opacity:1},60,function(){
									img.eq(5).stop().animate({marginTop:0,opacity:1},60,function(){
											$('.bg2_box4').stop().animate({marginTop:'8px',opacity:1},200);
									});
								});
							});	
						});		
					});			
				});
			});		
			$('.bg3, .bg4').fadeIn(250);	
			
			$('#header .header_box>ul>li>a').addClass('on');
			$(this).removeClass('on');
			on2=true;	
		}
		 else if (on2){
				var img=$('.bg_box3>a');
				$('.bg_black').stop().fadeOut(100);
				$('.bg2_box4').stop().animate({marginTop:'-20px',opacity:0},50,function(){
					img.css({marginTop:'-20px',opacity:0},60);
				$('.bg3, .bg4').fadeOut(100);	
			});
			on=false;
			on2=false;
			on3=false;
			$('#header .header_box>ul>li>a').removeClass('on');
		};
		
		
	});	
	
	var on3=false;
	
	$('.fr li>a').click(function(e){
		e.preventDefault();
		if (!on3) {
			
			$('.bg, .bg2, .bg3, .bg4').hide();
			$('.fr li>ul').fadeIn(250);
			$('.bg_black').fadeIn(250);
			$('#header .header_box>ul>li>a').addClass('on');
			$(this).removeClass('on');
			on3=true;
		} else if(on3) {
			$('.fr li>ul').fadeOut(100);
			$('.bg_black').fadeOut(100);
			$('#header .header_box>ul>li>a').removeClass('on');
			on=false;
			on2=false;
			on3=false;
		}
	});

	////////////////////////////////////////////////////
	
	///////////////////// SLIDE IMAGE 부분
	
	////////////////////////////////////////////////////	
	
	
	
	var slideBig=$('.center>.slide01');
	var textBox=$('.center>.text_box>.box');
	var timeLine=$('.center>.button>a');
	
	
	
	slideBig.eq(0).show(function(){
		$(this).stop().animate({left:'-220px'},500,function(){
			$(this).stop().animate({left:'-280px'},4000);
		});
	});
	
	textBox.eq(0).find('img').animate({left:'-20px',opacity:1},500,function(){
		textBox.eq(0).find('h2').animate({left:0,opacity:1},500,function(){
			textBox.eq(0).find('a').animate({left:0,opacity:1},500)
		});
	});
	
	timeLine.eq(0).find('span').animate({width:'100%'},5000);
	
	
	timeLine.click(function(e){
		e.preventDefault();
		slideNum=$(this).index();
		
		slideBig.stop().fadeOut(500,function(){
			$(this).css({left:'-150px',opacity:0});
		});
		
		textBox.find('img').stop().animate({left:'80px',opacity:0},200);
		textBox.find('h2').stop().animate({left:'100px',opacity:0},200);
		textBox.find('a').stop().animate({left:'100px',opacity:0},200);

		timeLine.find('span').stop().animate({width:'0%'},300);
		timeLine.removeClass('on');		
		
		slideBig.eq(slideNum).fadeIn(20,function(){
			$(this).stop().animate({left:'-220px',opacity:1},800,function(){
				$(this).stop().animate({left:'-280px'},4000);
			});
		});
		
		textBox.eq(slideNum).find('img').stop().animate({left:'-20px',opacity:1},500,function(){
			textBox.eq(slideNum).find('h2').stop().animate({left:0,opacity:1},500,function(){
				textBox.eq(slideNum).find('a').stop().animate({left:0,opacity:1},500)
			});
		});	
		
		timeLine.eq(slideNum).find('span').stop().animate({width:'100%'},5000);
		timeLine.eq(slideNum).addClass('on');
		
		clearInterval(setSlide);
	});	
	
	function timer(){
	var slideNum=0
	setSlide=setInterval(function(){
	
	slideBig.eq(slideNum).fadeOut(500,function(){
		$(this).css({left:'-150px',opacity:0});
	});
	textBox.eq(slideNum).css({zIndex:21})
	textBox.eq(slideNum).find('img').animate({left:'80px',opacity:0},200);
	textBox.eq(slideNum).find('h2').animate({left:'100px',opacity:0},200);
	textBox.eq(slideNum).find('a').animate({left:'100px',opacity:0},200);

	timeLine.eq(slideNum).find('span').animate({width:'0%'},300);
	timeLine.eq(slideNum).removeClass('on');
	
	slideNum++;
	
	if (slideNum>4) {slideNum=0};
	
	slideBig.eq(slideNum).fadeIn(20,function(){
		$(this).stop().animate({left:'-220px',opacity:1},800,function(){
			$(this).stop().animate({left:'-280px'},4000);
		});
	});
	textBox.eq(slideNum).css({zIndex:22})
	textBox.eq(slideNum).find('img').animate({left:'-20px',opacity:1},500,function(){
		textBox.eq(slideNum).find('h2').animate({left:0,opacity:1},500,function(){
			textBox.eq(slideNum).find('a').animate({left:0,opacity:1},500)
		});
	});	
	
	timeLine.eq(slideNum).find('span').animate({width:'100%'},5000);
	timeLine.eq(slideNum).addClass('on');
	
	
	
	},5000);
	
	};
	
	timer();
	

	////////////////////////////////////////////////////
	
	///////////////////// NEW MEM 부분
	
	////////////////////////////////////////////////////	
	
	var memNum=0
	setInterval(function(){
		var img=$('#new_mem>div');
		
		img.eq(memNum).fadeOut(2500);
		memNum++;
		if (memNum==img.size()) (memNum=0);
		img.eq(memNum).fadeIn(2500);
	},4500);
	
	
	////////////////////////////////////////////////////
	
	///////////////////// FOOTER 부분
	
	////////////////////////////////////////////////////		
	
	var on4=false;
	
	$('#footer .copyRight>ul>li').click(function(e){
		e.preventDefault();

		if (!on4) {
			$(this).find('ul').fadeIn();
			$('.bg_black').fadeIn();
			
			$(this).removeClass('on');
			on4=true;
		} else if(on4) {
			$(this).find('ul').fadeOut();
			$('.bg_black').fadeOut();		
			
			on=false;
			on2=false;
			on3=false;
			on4=false;
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	});