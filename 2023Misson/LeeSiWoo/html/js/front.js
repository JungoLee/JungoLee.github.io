var ballSrc = {
  ball1: {
    show: './images/show_01ball.png',
    result: './images/show_01ball_result.png'
  },
  ball2: {
    show: './images/show_02ball.png',
    result: './images/show_02ball_result.png'
  },
  ball3: {
    show: './images/show_03ball.png',
    result: './images/show_03ball_result.png'
  },
  ball4: {
    show: './images/show_04ball.png',
    result: './images/show_04ball_result.png'
  },
}

var popupText = {
  popup1: {
    src: "./images/launching_popup1.png",
    alt: "이벤트에 참여해주셔서 감사합니다! 경품 추첨일은 8월 3일이며 당첨자에게 개별 공지 예정입니다.",
    btnText: "확인",
    width: "32%",
  },
  popup2: {
    src: "./images/launching_popup2.png",
    alt: "Life On이 아닌 것을 다시 선택해보세요 ~",
    btnText: "다시 참여하기",
    width: 0,
  },
  popup3: {
    src: "./images/launching_popup3.png",
    alt: "해피콜은 라이프온 서비스가 아닙니다. 정답을 맞추셨습니다.",
    btnText: "확인",
    width: 0,
  },
}

$(window).on('load', function () {

  ballInterval();


  $('.ui-ball').on("click", function ($this) {
    var _index = $(this).index()
    var anwser = false

    if ($(this).hasClass('correct')) anwser = true;
    $('.show-ball').prev().attr('src', ballSrc['ball' + (_index + 1)].result)
    $('.show-ball').attr('src', ballSrc['ball' + (_index + 1)].show)
    $('.ball-pickup-motion-box .hide-txt').text("뽑는중")

    $('.ui-ball, .quiz-text').fadeOut(150, function () {
      $('.ui-ball').removeClass('on')
    });

    var delay = Number($('.pickup-ball-box ').css('transition-delay').split('s')[0])
    var duration = Number($('.pickup-ball-box ').css('transition-duration').split('s')[0])
    var resultDelay = (delay + duration) * 1000

    // 뽑기 보여지게 하기
    $('.ball-pickup-motion-box').fadeIn(150, function () {
      var motionDuration = 1200;
      // 뽑기 공 올라오기
      $('.pickup-ball-box').css({
        "-webkit-transform": "translate(-50%,-50%)"
      });

      // 뽑기 기계 내려가기
      setTimeout(function () {
        $('.get_obj').stop().animate({
          top: "65%"
        }, motionDuration, function () {})


        setTimeout(function () {
          // 뽑기 공 꽝 정답 보여주기
          $('.get_obj1').fadeOut(250, function () {

            // 뽑기 공&기계 올라오기
            $('.get_obj').stop().animate({
              top: "20%"
            }, motionDuration, function () {})
            $('.pickup-ball-box').stop().animate({
              "top": "55%"
            }, motionDuration);
            setTimeout(function () {

              // 뽑기 공 정답 보여주기
              if (anwser) {
                $('.ball-pickup-motion-box .hide-txt').text("정답")
              }else{
                $('.ball-pickup-motion-box .hide-txt').text("꽝")
              }

              $('.pickup-ball-box .show-ball').stop().animate({
                'opacity': 0
              }, 250, function () {
                if (anwser) {
                  // 정답 팝업 보여주기
                  $('.wrong2').fadeIn(500, function () {
                    $('.pickup-ball-box').stop().animate({
                      "top": "100%"
                    }, 500)
                  });
                  $('.wrong2 .layer-popup-content').addClass('on')
                  $('.wrong2 button').focus()
                } else {
                  // 오답 팝업 보여주기
                  $('.wrong1').fadeIn(500, function () {
                    $('.pickup-ball-box').stop().animate({
                      "top": "100%"
                    }, 500)
                  });
                  $('.wrong1 .layer-popup-content').addClass('on')
                  $('.wrong1 button').focus()
                }
              })
            }, motionDuration - 350)
          })
        }, motionDuration - 220)
      }, resultDelay)

    });

  })
  $('.ui-close-btn').on("click", function () {

    if ($(this).hasClass('ui-correct')) {
      $('.wrong2').fadeOut(500, function () {
        $('.correct').fadeIn(500);
        $('.correct .layer-popup-content').addClass('on')
        $('.correct button').focus()
      });
      $('.wrong2 .layer-popup-content').removeClass('on')

    } else {
      $('.ball-pickup-motion-box,.pickup-ball-box,.get_obj,.get_obj1,.pickup-ball-box .show-ball,.ui-ball').attr('style', "")
      $('.ui-ball').show();
      $('.quiz-text').delay(250).fadeIn(750);

      $('.layer-popup-container').fadeOut(500);
      $('.layer-popup-container .layer-popup-content').removeClass('on')
      ballInterval();
      $('.ball-pickup-motion-box .hide-txt').text("뽑기전")
    }
    $('.ui-ball').eq(0).focus();

  })
})


function ballInterval() {

  var ballLength = $('.ui-ball').length
  let i = 0;
  $('.ui-ball').show();
  var idInterval = setInterval(function () {
    if (i == ballLength - 1) clearInterval(idInterval)
    $('.ui-ball').eq(i).stop().addClass('on')
    i++
  }, 200)

}