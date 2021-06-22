
 
function toggle__class(t,target){
    var tg = $(t);
    var object = $(target);

    tg.hasClass('on') ? tg.removeClass('on') : tg.addClass('on');
    object.hasClass('on') ? object.removeClass('on') : object.addClass('on');
}

window.current = {};

$(document).ready(function(){
    let MainslideImg = $('.slide_box>ul');
    let btns = $('.btns_box>button');
    let npBtn = $('.slide_box .np_btn');

    // 메인 이미지 슬라이더

    commonSlide('mainSlide', npBtn, btns, MainslideImg,4000);

    $('.slide_box button').hover(function(){
        clearInterval(slideIntervalId)
    },function(){
        slideAnimate(MainslideImg,'mainSlide',btns, 4000);    
    });    

    
});



function commonSlide(cntName, btns, dots, slideImg, timer = 4000){
    window.current[cntName] = window.current[cntName] ? window.current[cntName] : 0;
    nextPrevBtn(btns,slideImg,dots, cntName);
    slideAnimate(slideImg,cntName,dots, timer);
    choiceBtn(dots,cntName,slideImg);
    slideStart(dots,cntName,timer);
}

////////////////////////////////////////////////////////////// 
/////////////// NEXT PREV 버튼
////////////////////////////////////////////////////////////// 

function nextPrevBtn(target,mainImg,moveBtn,cntName){
    target.click(function(){
        let tg = $(this);
        

        if (tg.hasClass('next')){
            
            current[cntName] = current[cntName] + 1;
            
            console.log( current[cntName]);
            if (current[cntName] >= mainImg.find('li').length){
                current[cntName] = 0
            }
            mainImg.stop().animate({left:-current[cntName]*100+"%"});
            
        } else if(tg.hasClass('prev')) {
            
            
            current[cntName] = current[cntName] - 1;
            if (current[cntName] <= -1){
                current[cntName] = mainImg.find('li').length-1
                console.log( current[cntName]);
            }
            mainImg.stop().animate({left:-current[cntName]*100+"%"});
            
        }

        mainImg.eq(current[cntName]).fadeIn(200);
        moveBtn.eq(current[cntName]).find('span').css({opacity:1, width:0}).stop().animate({width:'100%'},3000); 
        
    });
}


////////////////////////////////////////////////////////////// 
///////////////슬라이드 에니메이션 () 
////////////////////////////////////////////////////////////// 

function slideStart(buttons,cntName,time){
    buttons.eq(current[cntName]).find('span').css({opacity:1, width:0}).stop().animate({width:'100%'},time);
}

function slideAnimate(target,cntName,buttons,time){
    slideIntervalId = setInterval(function(){        

        current[cntName] = current[cntName]+1;

        if (current[cntName] >= target.find('li').length){current[cntName] = 0}

        target.stop().animate({left:-current[cntName]*100+"%"});
        
        
    },time);
} 


////////////////////////////////////////////////////////////// 
/////////////// Dot Buttons
////////////////////////////////////////////////////////////// 

function choiceBtn(dot,cntName,target){
    dot.each(function(i){
        let btnsTg = $(this);
        let btnsIndex = btnsTg.index();
        let btnsTgBg = btnsTg.find('span');

        btnsTg.click(function(){

            dot.find('span').stop().animate({opacity:0,width:'100%'},200);

            btnsTgBg.css({opacity:1, width:0}).stop().animate({width:'100%'},4000);
            
            target.fadeOut(500);
            target.eq(btnsIndex).fadeIn(500);
            current[cntName] = btnsIndex;
        });
    });
}


