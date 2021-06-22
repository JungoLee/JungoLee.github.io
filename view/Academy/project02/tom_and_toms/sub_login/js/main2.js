	jQuery(document).ready(function(){
		$('.inputValue').each(function(){
			var guideText=this.defaultValue;
			var element=$(this);
			
			element.focus(function(){
				if(element.val()===guideText){
					element.val('');
					element.removeClass('text_gray');
				}
			});
			element.blur(function(){
				if(element.val()===''){
					element.val(guideText);
					element.addClass('text_gray')
				}
			});
			if(element.val()===guideText){
				element.addClass('text_gray')
			}
		});
	});
	