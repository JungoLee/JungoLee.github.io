jQuery(document).ready(function(){

	if(!Modernizr.csstransitions) {
		interval = 1500;
		
 		setInterval(function(){
			$('.btnContents i.nth3').animate({
				right:'300', opacity:'0.2'
			},'slow').animate({
				right:'200', opacity:'0.9'
			},'slow');
		},interval); 
		
 		setInterval(function(){
			$('.btnContents i.nth2').animate({
				right:'260', opacity:'0.4'
			},'slow').animate({
				right:'200', opacity:'0.9'
			},'slow');
		},interval); 
	
 		setInterval(function(){
			$('.btnContents i.nth1').animate({
				right:'220', opacity:'0.6'
			},'slow').animate({
				right:'200', opacity:'0.9'
			},'slow');
		},interval); 
		
		$('#side').css({opacity:'0'});
		$('#side .con').css({opacity:'0'});
		$('#side .btnContents li').css({opacity:'0'});
		$('#sns > li > a > i').css({opacity:'0.6'});

 		$(function(){
			var sns = $('#sns > li > a > i');
			sns.hover(function(){
				$(this).css('font-size','30px').css('opacity','1');
			}, function(){
				$(this).css('font-size','25px').css('opacity','0.6');			
			});	
			//sns.css('font-size','25px');
		}); 
		
	};
	
	$(window).scroll(function(){
		var sct=$(this).scrollTop();
		
		if(sct>5) {$('#header').stop().animate({height:'80px'},500);}
			else {$('#header').stop().animate({height:'100px'},500);};
			
		$('.content1 .box1').stop().animate({top:sct/10-80});
		$('.content1 .box2 .box2_2 img').stop().animate({top:(sct/20)-320});
		if(sct>300){$('.center').fadeOut();}
			else{$('.center').fadeIn();}
	});
	
	$('.content1').mousemove(function(e){
		var posX=e.pageX;
		var posY=e.pageY;
		
		$('.move1').css({right:200-(posX/40),top:100-(posY/40)});
		$('.move2').css({right:200-(posX/10),top:250-(posY/30)});
	});
	
	setInterval(function(){
		$('.center').stop().animate({top:'90%'},250,function(){
			$(this).stop().animate({top:'92%'},250)
		});
	},500)
});






























