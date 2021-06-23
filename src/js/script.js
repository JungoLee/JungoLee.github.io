

function start(target){
    let tg = $(target)
    tg.addClass('on');
}

function scrollClass(target,offset){

    let tg = $(target)


    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        sct > offset ? tg.addClass('on') : tg.removeClass('on')  ;
    })

}

jQuery(document).ready(function () {

    /////////////////////////////////////////////////////////

    /////////////////// MOUSEMOVE EVENT

    /////////////////////////////////////////////////////////

    $(window).on('mousemove', function (event) {

        var posX = event.pageX;
        var posY = event.pageY;



        $('.contents_wrap>.content').each(function () {
            var tg = $(this);
            var tgTop = tg.offset().top;
            var tgLeft = tg.offset().left;
            var screen = tg.find('.screen');

            var divW = $('.content').width();
            var divH = $('.content').height();

            screen.css({
                top: posY - divH / 2 - tgTop,
                left: posX - divW / 2 - tgLeft
            });

            if (tgTop < posY && tgLeft < posX && posY < tgTop + divH && posX < tgLeft + divW) {
                screen.css({
                    top: 0,
                    left: 0,
                    background:"rgba(0,0,0,0.5)"
                });
                screen.find('h3').addClass('on');
                screen.find('a').addClass('on');

            } else {
                screen.css({
                    background:"rgba(0,0,0,0)"
                });
                screen.find('h3').removeClass('on');
                screen.find('a').removeClass('on');
            }




        });

    });


    /////////////////////////////////////////////////////////

    ///////////////////DOT DOT DOT

    /////////////////////////////////////////////////////////


    setInterval(function () {
        $('.dot2').stop().animate({
            opacity: 1
        }, 200);
        $('.dot1').stop().animate({
            opacity: 0
        }, 200, function () {
            $('.dot3').stop().animate({
                opacity: 1
            }, 200);
            $('.dot2').stop().animate({
                opacity: 0
            }, 200, function () {
                $('.dot3').stop().animate({
                    opacity: 0
                }, 200);
                $('.dot1').stop().animate({
                    opacity: 1
                }, 200);
            });
        });

    }, 750);

    var career = $('.career_wrap>ul>li');

    career.hover(function () {
        let tg = $(this);

        tg.addClass('on');
        career.not(tg).addClass('off');

    }, function () {
        let tg = $(this);
        tg.removeClass('on');
        career.not(tg).removeClass('off');
    });


    /////////////////////////////////////////////////////////

    /////////////////// Screen percent

    /////////////////////////////////////////////////////////
    var moveTag = $('.content>.screen');

    moveTag.click(function(){
        var tg = $(this);
        var moveChild  = tg.find('h3>a');
        var hrefs = moveChild.attr('href');
        moveChild.attr("href", hrefs);
        window.open.href = moveChild.attr("href");

      });


    scrollClass('.header',10);
    scrollClass('.header ul>li>a'),10;

    let mobileScroll = $('.screen');
    if ($(window).width() < 767){
        mobileScroll.each(function(){
            let tg = $(this);
            let tgOffTop = tg.offset().top;

            $(window).scroll(function(){
                let sct = $(window).scrollTop();

                if (sct + 300 > tgOffTop ){
                    tg.addClass('on');
                    tg.find('a').addClass('on');
                    tg.find('h3').addClass('on');

                } else if (sct < tgOffTop ){
                    tg.removeClass('on');
                    tg.find('a').removeClass('on');
                    tg.find('h3').removeClass('on');
                }

            })
        });
    }

    start('.text_area>span');
    start('.text_area');
    start('.text_area>ul>li');
    $('.screen').click(function(){
        window.open($(this).find('a').attr("href"));
    })

    $('.header .mobile_btn>li>a').click(function(){

        var selectVal = $(this).text();
        var cntClass = $('.content.'+selectVal+'');
        if(selectVal == "Show all"){
            $('.content').show();
            return false;
        }else if(selectVal == "Kakao" || selectVal == "google_re" || selectVal == "3d Test"){

        }else{
            $('.content').hide();
            cntClass.show();
            $('.content.ing').show();
            return false;
        }

    });
});


function bookmark(e){
    var bookmarkURL = window.location.href;
    var bookmarkTitle = document.title;
    var triggerDefault = false;

    if (window.sidebar && window.sidebar.addPanel) {
        // Firefox version < 23
        window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
        // Firefox version >= 23 and Opera Hotlist
        var $this = $(this);
        $this.attr('href', bookmarkURL);
        $this.attr('title', bookmarkTitle);
        $this.attr('rel', 'sidebar');
        $this.off(e);
        triggerDefault = true;
    } else if (window.external && ('AddFavorite' in window.external)) {
        // IE Favorite
        window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
        // WebKit - Safari/Chrome
        alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
    }

    return triggerDefault;
}

function toggle__class(t,target){
    var tg = $(t);
    var object = $(target);
    tg.hasClass('on') ? tg.removeClass('on') : tg.addClass('on');
    object.hasClass('on') ? object.removeClass('on') : object.addClass('on');
}



