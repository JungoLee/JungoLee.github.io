$(function(){
	var i=$('.slide img').index();

	var j=$('.button button').index();

	var current=0;
	
	$('.next').click(function(){
		var prev=$('.slide img').eq(current);
		prev.css({left:0}).stop().animate({left:'-100%'},300);
		var pn=$('.button button').eq(current);
		
		pn.removeClass('on');
			
		current++
		if(current>5) {
			$(this).attr('href','#loading');
			$('.popup').fadeIn(500);
			
		};
		var next=$('.slide img').eq(current);
		next.css({left:'100%'}).stop().animate({left:0},300)
		var pnn=$('.button button').eq(current);
		
		pnn.addClass('on');
	});
	
	$('.btn').click(function(){
		$('.fadeIn').animate({opacity:1},500,function(){
			$('.login1').animate({opacity:1},300,function(){
				$('.login2').animate({opacity:1},300)
			})
		});
		$('.popup').fadeOut(500)
	})
	
	$('input').focus(function(){
		var tg=$(this);
		var span=tg.next();
		var spanText=span.text();
		
		var email="Email"
		var password="Password"
		
		if (spanText==email || spanText==password ) {
		span.text('');
		tg.css({background:'#e6e6e6'});
		}
		
	});
	
	$('label:eq(0) input ').blur(function(){
		var tg=$(this);
		var span=tg.next();
		var spanText=span.text();		

		if (spanText=='') {
		tg.css({background:'url(images/e_mail.gif) 10px 11px no-repeat #e6e6e6',backgroundSize:'15px'});
		tg.next().text('Email');
		}
		if (spanText==spanText) {		
			span.text('');
			tg.css({background:'#e6e6e6'});
		}		


	});
	$('label:eq(1) input ').blur(function(){
		var tg=$(this);
		var span=tg.next();
		var spanText=span.text();		

		if (spanText=='') {
		tg.css({background:'url(images/password.gif) 10px 11px no-repeat #e6e6e6',backgroundSize:'15px'});
		tg.next().text('Email');
		}
		if (spanText==spanText) {		
			span.text('');
			tg.css({background:'#e6e6e6'});
		}
		});	

});