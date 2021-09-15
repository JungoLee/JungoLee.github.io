history.scrollRestoration = "manual";
var uaString = window.navigator.userAgent;

var isIE = uaString.indexOf('Trident') > 0;

if (isIE) {
    window.location = "microsoft-edge:" + window.location.href;
    setTimeout(function () {
        window.open('aboue:blank', '_self').close()
    }, 1000)
}

if (!String.prototype.repeat) {
    String.prototype.repeat = function (count) {
        'use strict';
        if (this == null)
            throw new TypeError('can\'t convert ' + this + ' to object');

        var str = '' + this;
        // To convert string to integer.
        count = +count;
        // Check NaN
        if (count != count)
            count = 0;

        if (count < 0)
            throw new RangeError('repeat count must be non-negative');

        if (count == Infinity)
            throw new RangeError('repeat count must be less than infinity');

        count = Math.floor(count);
        if (str.length == 0 || count == 0)
            return '';

        if (str.length * count >= 1 << 28)
            throw new RangeError('repeat count must not overflow maximum string size');

        var maxCount = str.length * count;
        count = Math.floor(Math.log(count) / Math.log(2));
        while (count) {
            str += str;
            count--;
        }
        str += str.substring(0, maxCount - str.length);
        return str;
    }
}

if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}


var canvas = document.getElementById("myCanvas");

var context = canvas.getContext("2d");
var $fixedSymbol = $('.fixed-video-wrp .symbol');
var $DomHtml = $('html,body');
var intervalId;

var sequenceETB = {
    set: function () {
        // 다비드 이미지 set
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // get the scale
        var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
    },
    updateImage: function (_idx) {
        // 다비드 이미지 update
        img.src = sequenceETB.currentFrame(_idx);
        sequenceETB.set()
    },

    scene01: function () {
        // 다비드 처음 비디오 시퀀스
        intervalId = setTimeout(function () {
            _publicFrame = _start;
            if (_start >= frame01) {
                clearInterval(intervalId);

                return;
            }
            sequenceETB.scene01();
            sequenceETB.updateImage(_start++)
        }, 1000 / 30);
    },
    // scene02: function () {
    //   // 다비드 처음 비디오 시퀀스
    //   intervalId2 = setInterval(function () {
    //     _publicFrame = _start;
    //     if (_start >= frame02 + frame03) {
    //       clearInterval(intervalId2);

    //     }
    //     sequenceETB.updateImage(_start++)
    //   }, 1000 / 30);
    // },
    currentFrame: function (_idx) {
        var _windowW = $(window).outerWidth();
        var _windowH = $(window).outerHeight();
        var _src = "david_splash5/david_0"
        if (_windowW < _windowH) {
            _src = "david_splash_mo/david_mo_0"
        }
        _publicFrame = _idx
        if (_idx.toString().padStart(4, '0') == "[object Event]") {
            return "";
        } else {
            return '../../images/' + _src + _idx.toString().padStart(4, '0') + '.jpg'
        }
    },
    loadImages: function (firstLoad) {
        var _src, _loadedSrc, _otherDevice;
        if (firstLoad == "moDone") {
            _src = '../../images/david_splash5/david_0';

        } else if (firstLoad == "pcDone") {
            _src = '../../images/david_splash_mo/david_mo_0';
        }

        _loadedSrc = _src;
        for (var i = 1; i < totalFrame; i++) {
            var img = document.createElement('img');
            img.src = _src + i.toString().padStart(4, '0') + '.jpg'
            $('.load-img').append(img);
            _davidImages.push(img);
            if (i == totalFrame - 1) {
                $lastestImg = img;
            }
        }
    },
    headerActive: function (_idx) {
        if (_idx >= 0) {
            $('.header-in').find('li a').removeClass('on');
            $('.header-in').find('li a').eq(_idx).addClass('on');
        } else {
            $('.header-in').find('li a').removeClass('on');
        }

        if (sequenceETB.isDevice == "mobile" && _idx !== -1) {
            gsap.to($('.header-in ul'), .3, {
                overwrite: true,
                scrollLeft: $('.header-in').find('li a').eq(_idx).offset().left / 2
            })
        }
    },
    headerToggle: function (_boolean) {
        if (_boolean) {
            $('.header-in').addClass('type1');
        } else {
            $('.header-in').removeClass('type1');
        }
    },
    filterToggle: function (_boolean) {
        var _filterW = $('.ui-filter .check').outerWidth() + 5;
        if (_boolean == true) {
            gsap.to('.ui-filter .btn', .5, {
                left: 0,
                overwrite: true,
                ease: Power4.easeInOut,
            })
            gsap.to('.ui-filter .check', .5, {
                left: -_filterW,
                overwrite: true,
                ease: Power4.easeInOut,
            })

        } else if (_boolean == false) {
            if (sequenceETB.isDevice == "web") {
                gsap.to('.ui-filter .btn', .5, {
                    left: "-64px",
                    left: "-6.4rem",
                    overwrite: true,
                    ease: Power4.easeInOut,
                })
            } else if (sequenceETB.isDevice == "mobile") {
                gsap.to('.ui-filter .btn', .5, {
                    left: "-100px",
                    left: "-10rem",
                    overwrite: true,
                    ease: Power4.easeInOut,
                })
            }

            gsap.to('.ui-filter .check', .5, {
                left: 0,
                overwrite: true,
                ease: Power4.easeInOut,
            })
        } else if (_boolean === "reset") {
            if (sequenceETB.isDevice == "web") {
                gsap.to('.ui-filter .btn', .5, {
                    left: "-64px",
                    left: "-6.4rem",
                    overwrite: true,
                    ease: Power4.easeInOut,
                })
            } else if (sequenceETB.isDevice == "mobile") {
                gsap.to('.ui-filter .btn', .5, {
                    left: "-100px",
                    left: "-10rem",
                    overwrite: true,
                    ease: Power4.easeInOut,
                })
            }
            gsap.to('.ui-filter .check', .5, {
                left: -_filterW,
                overwrite: true,
                ease: Power4.easeInOut,
            })
        } else if (_boolean === "toggle") {
            if (sequenceETB.isDevice == "web") {
                gsap.to('.ui-filter .btn', .5, {
                    left: "-64px",
                    left: "-6.4rem",
                    overwrite: true,
                    ease: Power4.easeInOut,
                })
            } else if (sequenceETB.isDevice == "mobile") {
                gsap.to('.ui-filter .btn', .5, {
                    left: "-100px",
                    left: "-10rem",
                    overwrite: true,
                    ease: Power4.easeInOut,
                })
            }
            gsap.to('.ui-filter .check', .5, {

                left: 0,
                overwrite: true,
                ease: Power4.easeInOut,
                onComplete: function () {
                    gsap.to('.ui-filter .btn', .5, {
                        delay: 2.5,
                        left: 0,
                        overwrite: true,
                        ease: Power4.easeInOut,
                    })
                    gsap.to('.ui-filter .check', .5, {
                        delay: 2.5,
                        left: -_filterW,
                        overwrite: true,
                        ease: Power4.easeInOut,
                    })
                }
            })
        }
    },
    checkboxMotion: function () {
        gsap.fromTo($('.ui-result-search p').toArray(), {
            alpha: 0,
            x: 50,
        }, {
            duration: .3,
            alpha: 1,
            x: 0,
            ease: Power1.easeInOut,
            stagger: .025,
            overwrite: true,
        });
        $('.ui-result-search').closest('.scrollbar-outer-x').scrollLeft(0);
    },
    scrollbarInit: function ($el) {
        $('.scrollbar-inner', $el).scrollbar();
    },
    closePop: function ($el) {
        gsap.to($el, .5, {
            scale: .8,
            alpha: 0,
            overwrite: true,
            onComplete: function () {
                $el.hide();
            }
        });
        $DomHtml.css({
            "overflow-y": "auto",
            "overflow-x": "hidden",
            scrollLeft: 0
        });
    },
    loading: function () {

        function loadbar() {
            var stat = document.querySelector(".loader--text"),
                img = document.images,
                c = 1;
            var once = false;

            tot = sequenceETB.isDevice == "mobile" ? parseInt(img.length / 3) : parseInt(img.length / 1.5); // 이미지 최대갯수 / 3 로드후 미리 넘어가기

            function imgLoaded() {
                c += 1;

                var perc = ((100 / tot * c) << 0);

                setTimeout(function () {
                    if (parseInt(perc) > 100) {
                        perc = "100"
                    }
                    stat.innerHTML = perc + "%";
                }, 1000 / 30)

                if (perc == "100" && once == false) {

                    init();
                    if (sequenceETB.isDevice == "web") {
                        whichImage = "pcDone"
                    } else if (sequenceETB.isDevice == "mobile") {
                        whichImage = "moDone"
                    }

                    sequenceETB.loadImages(whichImage);
                    once = true;
                }
            }

            for (var i = 0; i < tot; i++) {
                var tImg = new Image();
                tImg.onload = imgLoaded;
                tImg.onerror = imgLoaded;
                tImg.src = img[i].src;
            }

        }
        document.addEventListener('DOMContentLoaded', loadbar, false);


    },
    domLoadSet: function () {
        $('.header-content').removeClass('gradient_bg').find("li").removeClass("on")
        $('.video-area').show().addClass('on').find('.symbol').css("transform", "scale(0)");
        $('.fixed-video-wrp .bg-area').removeClass('dimmed');
        $('.loading-wrp').hide();
        this.headerActive(-1);
        this.headerToggle(false);


        $fixedSymbol.hide();
        gsap.to(".fixed-video-wrp", 1.2, {
            delay: .1,
            alpha: 1,
        });
    },
    isDevice: "",
    deviceCheck: function () {
        if ($(window).outerWidth() > 1023) {
            return sequenceETB.isDevice = "web";
        } else {
            return sequenceETB.isDevice = "mobile"
        }
    },
    iOS: function () {
        return [
                'iPad Simulator',
                'iPhone Simulator',
                'iPod Simulator',
                'iPad',
                'iPhone',
                'iPod'
            ].includes(navigator.platform)
            // iPad on iOS 13 detection
            ||
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    },
    _beforeDevice:this.isDevice,
    scrollControlFn: function (_array,_init) {
        var _thObj = this;

        if (_thObj._beforeDevice !== sequenceETB.isDevice || _init == "init") {

            if (sequenceETB.isDevice == "mobile") {
                _array.forEach(function(_fn){
                    _fn.disable();
                });
            } else if (sequenceETB.isDevice == "web") {
                _array.forEach(function(_fn){
                    _fn.enable();
                });
            }
            _thObj._beforeDevice = sequenceETB.isDevice;
        }
    }
}
sequenceETB.isDevice = sequenceETB.deviceCheck();
sequenceETB.loading();



var _start = 0,
    totalFrame = 470,
    frame01 = 60,
    frame02 = 90, // 150
    frame03 = 50, // 200
    frame04 = 50, // 250
    frame05 = 80, // 330


    frame06 = 90, // 420
    frame07 = 30, // 450
    frame08 = 20, // 470
    _publicFrame;

var _davidImages = [];
var whichImage;

if (sequenceETB.isDevice == "web") {
    whichImage = "moDone"
} else if (sequenceETB.isDevice == "mobile") {
    whichImage = "pcDone"
}

sequenceETB.loadImages(whichImage);
_davidImages[0].onload = sequenceETB.updateImage;


var img = document.createElement('img');

img.src = sequenceETB.currentFrame(1);

function init() {
    var _timelineDuration = .5;

    setTimeout(function () {

        gsap.set($DomHtml, {
            scrollTop: 0,
            onComplete: function () {

                sequenceETB.filterToggle("reset");

                $DomHtml.css({
                    "overflow-y": "auto",
                    "overflow-x": "hidden",
                    scrollLeft: 0,
                });

                gsap.to($('.loading-wrp'), .5, {
                    scale: 1.3,
                    alpha: 0,
                    overwrite: true,
                    ease: Power3.easeInOut,
                    onComplete: function () {
                        sequenceETB.filterToggle("reset");
                        sequenceETB.domLoadSet();
                        sequenceETB.scene01();
                        afterOnload();
                    }
                });

                sequenceETB.set();
                var prevIndex;

                // BindEvent
                // BindEvent
                // BindEvent

                // 헤더 포커스 스크롤
                $('.header-content').on("click", '.ui-toscroll', function (e) {
                    e.preventDefault();
                    var $this = $(this);
                    var $target = $this.data('scene');
                    var _idx = $this.index();
                    var _offtop = $this.hasClass('to-default') ? $($target).offset().top : $($target).offset().top + 50;

                    var currentIndex = $this.index();
                    if (currentIndex > prevIndex || typeof prevIndex == "undefined" || currentIndex == prevIndex) {
                        gsap.to($DomHtml, 2, {
                            scrollTop: _offtop,
                            ease: Power4.easeInOut,
                        });
                    } else if (currentIndex < prevIndex) {
                        gsap.to($DomHtml, 2, {
                            scrollTop: _offtop - $(window).height(),
                            ease: Power4.easeInOut,
                        });
                    }
                    sequenceETB.headerActive(_idx)
                    $this.find('a').blur();
                    prevIndex = currentIndex
                });

                // 인풋 클릭
                $("body").on("click", ".privacy-check-btn", function () {
                    var $this = $(this);
                    var $tg = $this.data('slide-target');
                    if ($(this).hasClass('on')) {
                        gsap.to($($tg), .6, {
                            height: 0,
                            overwrite: true,
                            ease: Power2.easeInOut,
                        });
                        $this.removeClass('on')
                    } else {
                        gsap.to($($tg), .6, {
                            height: 400,
                            overwrite: true,
                            ease: Power2.easeInOut,
                        });
                        $this.addClass('on')
                    }

                })

                // 필터 닫기/열기 버튼
                $('.ui-filter').on("click", '.btn,.close-btn', function (e) {
                    e.preventDefault();
                    if ($(this).hasClass('btn')) {
                        sequenceETB.filterToggle(false);

                    } else if ($(this).hasClass('close-btn')) {
                        sequenceETB.filterToggle(true);

                        $('.ui-item-search-all').find("input").prop("checked", false);
                        $('.ui-item-search').find("input").prop("checked", false);
                        $('.ui-item-search').find("input").change();
                    }
                });

                // 헤더 포커스 스크롤
                var $followImg = $('.ui-filter-in').find('.img-fixed-box')
                $('.ui-filter-in').on('mousemove', function (e) {
                    var posX = e.originalEvent.screenX;
                    var posY = e.originalEvent.screenY;
                    $followImg.css({
                        top: posY - 60,
                        left: posX,
                    });
                });

                $('.ui-filter-in').on('mouseenter', '.ui-mouse-move', function () {
                    var _idx = $(this).closest('.lists').index();
                    gsap.to($followImg, .3, {
                        opacity: 1,
                        display: "block",
                        scale: 1,
                        overwrite: true,
                        ease: Expo.easeInOut,
                    })
                    gsap.to($followImg.find('.img-box').eq(_idx), .5, {
                        opacity: 1,
                        scale: 1,
                        overwrite: true,
                        ease: Expo.easeInOut,
                    })
                });

                $('.ui-filter-in').on('mouseleave', '.ui-mouse-move', function () {
                    gsap.to($followImg.find('.img-box'), .3, {
                        opacity: 0,
                        scale: .8,
                        overwrite: true,
                        ease: Expo.easeInOut,
                    })
                });

                // Filter 기능 !!!
                // Filter 기능 !!!
                // Filter 기능 !!!

                var _resultArray = [];
                var _resultBox = $('.section-works .num5');
                var _scrollLeft = 0;

                $('.section-works .scrollbar-outer-x').scrollbar();

                $('.section-works').on('mousewheel DOMMouseScroll', '.scrollbar-outer-x', function (e) {
                    if (e.originalEvent.deltaY > 0) {
                        _scrollLeft += 50
                        gsap.to($(this), .5, {
                            scrollLeft: _scrollLeft
                        });
                    } else {
                        _scrollLeft -= 50
                        gsap.to($(this), .5, {
                            scrollLeft: _scrollLeft
                        });

                    }
                    if (_scrollLeft < 0) {
                        _scrollLeft = 0;
                    } else if (_scrollLeft > $(this).width()) {
                        _scrollLeft = $(this).width();
                    }
                });

                $('.ui-item-search').on("change", '[type=checkbox]', function () {

                    // 체크박스 체크될때 열기 & 닫기

                    if ($('.ui-item-search [type=checkbox]:checked').length > 0) {
                        _resultBox.show();
                        gsap.to(_resultBox, .5, {
                            scale: 1,
                            alpha: 1,
                            overwrite: true,
                        });
                        $DomHtml.css({
                            "overflow": "hidden",
                        });
                    } else if ($('.ui-item-search [type=checkbox]:checked').length <= 0) {
                        sequenceETB.closePop(_resultBox);
                    }
                    sequenceETB.checkboxMotion();

                    $('.count-result .count').text(_resultArray.length);
                });

                var _directionWheel = false;

                $(window).on("mousewheel wheel DOMMouseScroll", function (e) {
                    var _sct = $(window).scrollTop();
                    if (sequenceETB.isDevice == "web") {

                        if (e.originalEvent.deltaY > 0 && _sct >= 405) {
                            e.preventDefault();

                        } else if (e.originalEvent.deltaY > 0 && _directionWheel == false) {
                            gsap.to($DomHtml, 1, {
                                ease: Power0.easeInOut,
                                scrollTop: 405,
                                overwrite: true,
                            });
                            _directionWheel = true;
                        } else if (e.originalEvent.deltaY < 0 && _sct <= 500 && _directionWheel == true) {
                            gsap.to($DomHtml, 1, {
                                ease: Power0.easeInOut,
                                scrollTop: 0,
                                overwrite: true,
                            })
                            _directionWheel = false;
                        }

                    }

                })

                // var _beforeDirection;
                // ScrollTrigger.create({
                //     trigger: '.ui-frame-scene01',
                //     start: "top top",
                //     end: "top+=405px top",
                //     // markers: true,
                //     onUpdate: function (a) {
                //         var _direction = a.direction;

                //         if (_direction !== _beforeDirection && sequenceETB.isDevice == "mobile") { // 마우스 휠 방향 바뀌었을때

                //             if (_direction > 0) {
                //                 gsap.to($DomHtml, 0.75, {
                //                     ease: Power0.easeInOut,
                //                     scrollTop: 405,
                //                     overwrite: true,
                //                 });
                //             } else if (_direction < 0) {
                //                 gsap.to($DomHtml, 0.75, {
                //                     ease: Power0.easeInOut,
                //                     scrollTop: 0,
                //                     overwrite: true,
                //                 })
                //             }
                //         }
                //         _beforeDirection = _direction
                //     }
                // })


                //  트윈맥스 에니메이션 오브젝트 (트윈맥스 시퀀스 시작)
                //  트윈맥스 에니메이션 오브젝트 (트윈맥스 시퀀스 시작)
                //  트윈맥스 에니메이션 오브젝트 (트윈맥스 시퀀스 시작)

                var move = {
                    inY: {
                        y: 0,
                        alpha: 1,
                    },
                    outY: {
                        y: "-200px",
                        y: "-20rem",
                        alpha: 0,
                    },
                    inX: {
                        x: 0,
                        alpha: 1,
                    },
                    outX: {
                        x: -50,
                        alpha: 0,
                    },
                    inScale: {
                        transform: "scale(1)",
                    },
                    outScale: {
                        transform: "scale(0)",
                    }
                }
                //  비디오 프레임제어

                //  .ui-frame-scene00
                //  .ui-frame-scene00
                //  .ui-frame-scene00

                // ScrollTrigger.create({
                //   trigger: ".ui-frame-scene00",

                //   start: "top top",
                //   end: "bottom top",
                //   // markers: true,
                //   onUpdate: function (a) {
                //     clearInterval(intervalId);
                //     var progress = Math.floor(a.progress * frame01);
                //     sequenceETB.updateImage(progress)
                //   },

                // });

                //  비디오 프레임제어

                //  .ui-frame-scene01
                //  .ui-frame-scene01
                //  .ui-frame-scene01

                ScrollTrigger.create({
                    trigger: ".ui-frame-scene01",
                    start: "top top",
                    end: "bottom top",
                    // markers: true,
                    onUpdate: function (a) {
                        clearInterval(intervalId);
                        var progress = Math.floor(frame01 + (a.progress * frame02));

                        if(progress !== frame01 + frame02)
                            sequenceETB.updateImage(progress);

                        $('.header-in ul li').eq(0).text(progress);
                    },
                    onEnter: function () {
                        sequenceETB.headerToggle(true);
                    },
                    onLeaveBack: function () {
                        sequenceETB.headerActive(-1);
                        sequenceETB.headerToggle(false);
                    },

                });

                // 텍스트 SCENE 제어 (경험적 미를 추구하는 디지털 르네상스의 정점)

                //  .ui-scene01 .num1
                //  .ui-scene01 .num1
                //  .ui-scene01 .num1

                var _sceneTl01 = gsap.timeline();

                _sceneTl01.staggerTo($(".ui-scene01 .num1 .ui-scene-move-y").toArray(), _timelineDuration,
                        move.inY, .5)
                    .to($(".ui-scene01 .num1 .visible").eq(0), _timelineDuration, {
                        textShadow: "0 0 4px #fff",
                    })
                    .to($(".ui-scene01 .num1 .visible").eq(0).find(".line"), _timelineDuration * 3, {
                        delay: -_timelineDuration,
                        width: "96%"
                    })
                    .to($(".ui-scene01 .num1 .ui-move5 .first"), _timelineDuration * 3, {
                        delay: -_timelineDuration * 3,
                        left: "50%"
                    })
                    .to($(".ui-scene01 .num1 .ui-move5 .first"), _timelineDuration * 4, {
                        delay: _timelineDuration * 2,
                        left: "150%"
                    })
                    .to($(".ui-scene01 .num1 .visible").eq(1), _timelineDuration, {
                        textShadow: "0 0 4px #fff",
                    })
                    .to($(".ui-scene01 .num1 .visible").eq(1).find(".line"), _timelineDuration * 3, {
                        delay: -_timelineDuration,
                        width: "96%"
                    })
                    .to($(".ui-scene01 .num1 .ui-move5 .second"), _timelineDuration * 3, {
                        delay: -_timelineDuration * 3,
                        left: "50%"
                    })
                    .to($(".ui-scene01 .num1 .ui-move5 .second"), _timelineDuration * 4, {
                        delay: _timelineDuration * 2,
                        left: "150%"
                    })
                    .to($(".ui-scene01 .num1 .visible").eq(2), _timelineDuration, {
                        textShadow: "0 0 4px #fff",
                    })
                    .to($(".ui-scene01 .num1 .visible").eq(2).find(".line"), _timelineDuration * 3, {
                        delay: -_timelineDuration,
                        width: "96%"
                    })
                    .to($(".ui-scene01 .num1 .ui-move5 .third"), _timelineDuration * 3, {
                        delay: -_timelineDuration * 3,
                        left: "50%"
                    })
                    .to(".ui-scene01 .num1 .ui-move1,.ui-scene01 .num1 .ui-move2", _timelineDuration, {
                        y: -50,
                        alpha: 0,
                    }, "+=2")
                    .to(".ui-scene01 .num1 .ui-move3,.ui-scene01 .num1 .ui-move4", _timelineDuration, {
                        y: -100,
                    }, "-=0.5")
                    .to(".ui-scene01 .num1 .invisible", _timelineDuration * 2, {
                        alpha: .2,
                    }, "-=0.5")
                    .to(".ui-scene01 .num1 .ui-move5", _timelineDuration, {
                        y: -100,
                        alpha: 1,
                    }, "-=1")
                    .to(".empty-element", _timelineDuration * 3, {} // 빈값 시간 벌기
                    )

                ScrollTrigger.create({
                    trigger: ".ui-scene01 .num1",
                    animation: _sceneTl01,
                    start: "top top",
                    end: "bottom+=3500px top",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    scrub: 1,
                    onEnter: function () {
                        sequenceETB.headerToggle(true);
                        sequenceETB.headerActive(0);
                        gsap.to('.ui-scene01 .num1', .5, {
                            alpha: 1,
                        })
                    },
                    onLeaveBack: function () {
                        sequenceETB.headerActive(-1);
                        // sequenceETB.headerToggle(false);
                    },
                    onLeave: function () {
                        gsap.to('.ui-scene01 .num1', .5, {
                            alpha: 0,
                        })
                    },
                    onEnterBack: function () {
                        gsap.to('.ui-scene01 .num1', .5, {
                            alpha: 1,
                        })
                    }
                });





                //  비디오 프레임제어

                //  .ui-frame-scene02
                //  .ui-frame-scene02
                //  .ui-frame-scene02

                ScrollTrigger.create({
                    trigger: ".ui-frame-scene02",
                    start: "top-=500px center",
                    end: "bottom+=500px top",
                    markers: true,
                    onUpdate: function (a) {
                        clearInterval(intervalId);
                        var progress = Math.floor(frame01 + frame02 + (a.progress * frame03));
                        sequenceETB.updateImage(progress);
                        $('.header-in ul li').eq(1).text(progress);
                    },
                });

                // 텍스트 SCENE 제어 (디지털 아티스트들의 초연결)

                //  .ui-scene01 .num3
                //  .ui-scene01 .num3
                //  .ui-scene01 .num3

                var _sceneTl02 = gsap.timeline();

                _sceneTl02.staggerTo($(".ui-scene01 .num3 .ui-scene-move-y").toArray(), _timelineDuration,
                        move.inY, .3)
                    .to($(".ui-scene01 .num3 .visible").eq(0), _timelineDuration, {
                        textShadow: "0 0 4px #fff",
                    })
                    .to($(".ui-scene01 .num3 .visible").eq(0).find(".line"), _timelineDuration * 3, {
                        delay: -_timelineDuration,
                        width: "96%"
                    })
                    .to($(".ui-scene01 .num3 .ui-move5 .first"), _timelineDuration * 3, {
                        delay: -_timelineDuration * 3,
                        left: "50%"
                    })
                    .to($(".ui-scene01 .num3 .ui-move5 .first"), _timelineDuration * 4, {
                        delay: _timelineDuration * 2,
                        left: "150%"
                    })
                    .to($(".ui-scene01 .num3 .visible").eq(1), _timelineDuration, {
                        textShadow: "0 0 4px #fff",
                    })
                    .to($(".ui-scene01 .num3 .visible").eq(1).find(".line"), _timelineDuration * 3, {
                        delay: -_timelineDuration,
                        width: "96%"
                    })
                    .to($(".ui-scene01 .num3 .ui-move5 .second"), _timelineDuration * 3, {
                        delay: -_timelineDuration * 3,
                        left: "50%"
                    })
                    .to($(".ui-scene01 .num3 .ui-move5 .second"), _timelineDuration * 4, {
                        delay: _timelineDuration * 2,
                        left: "150%"
                    })
                    .to($(".ui-scene01 .num3 .visible").eq(2), _timelineDuration, {
                        textShadow: "0 0 4px #fff",
                    })
                    .to($(".ui-scene01 .num3 .visible").eq(2).find(".line"), _timelineDuration * 3, {
                        delay: -_timelineDuration,
                        width: "96%"
                    })
                    .to($(".ui-scene01 .num3 .ui-move5 .third"), _timelineDuration * 3, {
                        delay: -_timelineDuration * 3,
                        left: "50%"
                    })
                    .to(".ui-scene01 .num3 .ui-move1", _timelineDuration, {
                        y: -50,
                        alpha: 0,
                    }, "+=2")
                    .to(".ui-scene01 .num3 .ui-move2", _timelineDuration, {
                        y: -100,
                    }, "-=0.5")
                    .to(".ui-scene01 .num3 .invisible", _timelineDuration * 2, {
                        alpha: .2,
                    }, "-=0.5")
                    .to(".ui-scene01 .num3 .ui-move5", _timelineDuration, {
                        y: -100,
                        alpha: 1,
                    }, "-=1")
                    .to(".empty-element", _timelineDuration * 3, {} // 빈값 시간 벌기
                    )
                ScrollTrigger.create({
                    trigger: ".ui-scene01 .num3",
                    animation: _sceneTl02,
                    start: "top top",
                    end: "bottom+=3500px top",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    scrub: 1,

                });








                //  비디오 프레임제어

                //  .ui-frame-scene03
                //  .ui-frame-scene03
                //  .ui-frame-scene03

                ScrollTrigger.create({
                    trigger: ".ui-frame-scene03",
                    start: "top-=250px center",
                    end: "bottom top",
                    // markers: true,
                    onUpdate: function (a) {
                        clearInterval(intervalId);
                        var progress = Math.floor(frame01 + frame02 + frame03 + (a.progress * frame04));
                        sequenceETB.updateImage(progress)
                    },
                });

                // 텍스트 SCENE 제어 (기술과 사람이 이상적으로 결합된 이트라이브만의 크리에이티브)

                //  .ui-scene02 .num1
                //  .ui-scene02 .num1
                //  .ui-scene02 .num1

                var _sceneTl03 = gsap.timeline();
                var _sceneTl07 = gsap.timeline();

                _sceneTl03.staggerTo($(".ui-scene02 .num1 .ui-scene-move-y").toArray(), _timelineDuration * 3,
                        move.inY, .3)
                    .to(".empty-element", _timelineDuration * 4, {} // 빈값 시간 벌기
                    )

                ScrollTrigger.create({
                    trigger: ".ui-scene02 .num1",
                    animation: _sceneTl03,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    scrub: 1,
                    onEnter: function () {
                        sequenceETB.headerActive(1);

                        // _sceneTl07.staggerTo($(".ui-scene02 .num1 .ui-scene-move-y.others").toArray(), .5, {
                        //   y: 0,
                        //   alpha: 1,
                        //   delay: -0.25,
                        //   ease: Power1.easeInOut,
                        // }, .1)
                    },
                    onLeaveBack: function () {
                        sequenceETB.headerActive(0);
                        // gsap.to($(".ui-scene02 .num1 .ui-scene-move-y.others"), .5, {
                        //   y: -50,
                        //   alpha: 0,
                        //   ease: Power1.easeInOut,
                        // })
                    },
                    onLeave: function () {

                    },
                    onEnterBack: function () {}
                });









                //  비디오 프레임제어

                //  .ui-frame-scene04
                //  .ui-frame-scene04
                //  .ui-frame-scene04

                ScrollTrigger.create({
                    trigger: ".ui-frame-scene04",
                    start: "top-=250px center",
                    end: "bottom top",
                    // markers: true,
                    onUpdate: function (a) {
                        clearInterval(intervalId);
                        var progress = Math.floor(frame01 + frame02 + frame03 + frame04 + (a.progress * frame05));
                        sequenceETB.updateImage(progress)
                    },
                });



                // 텍스트 SCENE 제어 (Dolce stil novo!)

                //  .ui-scene03 .num1
                //  .ui-scene03 .num1
                //  .ui-scene03 .num1

                var _sceneTl04 = gsap.timeline();

                _sceneTl04
                    .fromTo(".fixed-video-wrp .symbol", _timelineDuration * 2, move.outScale, {
                        transform: "scale(1)",
                        alpha: 1,
                    })
                    .to(".ui-scene03 .num1 .ui-scene-move-scale", _timelineDuration * 3, move.inScale, "-=0.3")

                ScrollTrigger.create({
                    trigger: ".ui-scene03 .ui-scene-move-scale",
                    animation: _sceneTl04,
                    start: "top center",
                    end: "bottom top",
                    pin: true,
                    // markers: true,
                    overwrite: true,
                    scrub: 1,
                    onEnter: function () {
                        sequenceETB.headerActive(2);
                        $fixedSymbol.show();
                    },
                    onLeaveBack: function () {
                        sequenceETB.headerActive(1);
                    },
                    onEnterBack: function () {
                        $fixedSymbol.stop().fadeIn(200);
                    }
                });

                ScrollTrigger.create({
                    trigger: ".ui-scene03 .NotoT",
                    start: "top center",
                    end: "bottom center",
                    // markers: true,
                    overwrite: true,
                    scrub: 1,
                    onEnter: function () {
                        gsap.to('.ui-scene03 .NotoT', .5, {
                            alpha: 1
                        })
                    },
                    onLeaveBack: function () {
                        gsap.to('.ui-scene03 .NotoT', .5, {
                            alpha: 0
                        })
                    }

                });

                ScrollTrigger.create({
                    trigger: ".ui-scene03 .NotoM",
                    start: "top center",
                    end: "bottom center",
                    // markers: true,
                    overwrite: true,
                    scrub: 1,
                    onEnter: function () {
                        gsap.to('.ui-scene03 .NotoM', .5, {
                            alpha: 1
                        })
                    },
                    onLeaveBack: function () {
                        gsap.to('.ui-scene03 .NotoM', .5, {
                            alpha: 0
                        })
                    },
                    onLeave: function () {
                        gsap.to($fixedSymbol, .5, {
                            alpha: 0
                        });
                    }
                });



                //  .WORKS
                //  .WORKS
                //  .WORKS

                ScrollTrigger.create({
                    trigger: ".ui-filter-in",
                    endTrigger: ".ui-filter-out",
                    start: "top top",
                    end: "bottom top",
                    // pin: true,
                    // markers: true,
                    onEnter: function () {
                        sequenceETB.filterToggle(true);
                        $('.ui-filter-in .cover').hide();
                    },
                    onEnterBack: function () {
                        sequenceETB.filterToggle(true);
                        $('.ui-filter-in .cover').hide();
                    },
                    onLeave: function () {
                        $('.ui-filter-in .cover').show();
                    },
                    onLeaveBack: function () {
                        $('.ui-filter-in .cover').show();
                        sequenceETB.filterToggle("reset");
                    }
                });

                ScrollTrigger.create({
                    trigger: ".ui-filter-in .works-list",
                    endTrigger: ".ui-filter-out",
                    start: "top top+=25%",
                    end: "bottom-=200% bottom",
                    pin: true,
                    // markers: true,
                    onEnter: function () {
                        gsap.to('.ui-filter-in .ui-scene-move-x', {
                            duration: .5,
                            x: 0,
                            alpha: 1,
                            overwrite: true,
                            stagger: {
                                from: 0,
                                amount: 1,
                            }
                        })
                    },
                    onLeaveBack: function () {
                        gsap.to('.ui-filter-in .ui-scene-move-x', {
                            duration: .5,
                            x: 40,
                            alpha: 0,
                            overwrite: true,

                        })
                    },
                });

                var setScroll03_01 = ScrollTrigger.create({
                    trigger: ".ui-scene03 .history-our-works",
                    start: "top top+=140px",
                    end: "bottom top+=230px",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    onEnter: function () {
                        $('.header-content').addClass('gradient_bg');
                        $fixedSymbol.hide();
                        sequenceETB.filterToggle("toggle");

                    },
                    onLeaveBack: function () {
                        $('.header-content').removeClass('gradient_bg');
                    },
                    onEnterBack: function () {
                        $('.header-content').addClass('gradient_bg');
                    }
                });

                var setScroll03_02 = ScrollTrigger.create({
                    trigger: ".ui-scene03 .history-our-works02",
                    start: "top top+=140px",
                    end: "bottom top+=230px",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    onEnter: function () {
                        $('.header-content').addClass('gradient_bg');
                        $fixedSymbol.hide();
                    },
                    onLeave: function () {
                        $('.header-content').removeClass('gradient_bg');
                        sequenceETB.filterToggle("reset");
                    },
                    onEnterBack: function () {
                        $('.header-content').addClass('gradient_bg');
                        sequenceETB.filterToggle("toggle");
                    }
                });



                // 텍스트 SCENE 제어 (끊임없는 변화, 그러나 변함없는.)

                //  .ui-scene04 .num1
                //  .ui-scene04 .num1
                //  .ui-scene04 .num1


                ScrollTrigger.create({
                    trigger: ".ui-scene04 .num1",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    scrub: 1,
                    onUpdate: function (a) {
                        var progress = a.progress;
                        gsap.to('.ui-scene04 .front', .5, {
                            height: (100 - a.progress * 100) + "%"
                        })
                        gsap.to('.ui-scene04 .back', .5, {
                            height: a.progress * 100 + "%"
                        })
                        if (progress >= .9) {
                            sequenceETB.headerToggle(false);
                        } else if (progress < .9) {
                            sequenceETB.headerToggle(true);
                        }
                    },
                    onEnter: function () {
                        sequenceETB.headerActive(3);
                        $fixedSymbol.hide();
                    },
                    onLeaveBack: function () {
                        sequenceETB.headerActive(2);
                    }

                });

                //  .ui-scene04 .num2
                //  .ui-scene04 .num2
                //  .ui-scene04 .num2

                var $horizontalSize01 = $('.ui-scene04 .num2 .ui-horizontal-move').outerWidth();
                // var _horizontalTl01 = gsap.timeline();

                // _horizontalTl01
                //   .fromTo('.ui-scene04 .num2 .ui-horizontal-move ', _timelineDuration * 2, {
                //     x:0
                //   }, {
                //     x: -($horizontalSize01 - $(window).width()) + "px"
                //   })
                var setScroll04_01 = ScrollTrigger.create({
                    trigger: ".ui-scene04 .num2",
                    start: "top top",
                    end: "bottom+=" + ($horizontalSize01 - $(window).width()) + "px top",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    scrub: 1,
                    onUpdate: function (a) {
                        var progress = a.progress * 1.1;
                        if (progress >= 1) {
                            progress = 1
                        }
                        gsap.set('.ui-scene04 .num2 .ui-horizontal-move ', {
                            x: -(progress * ($horizontalSize01 - $(window).width())) + "px"
                        })

                    },
                });

                //  .ui-scene04 .num3
                //  .ui-scene04 .num3
                //  .ui-scene04 .num3

                var $horizontalSize02 = $('.ui-scene04 .num3 .ui-horizontal-move .lists').outerWidth();
                $('.ui-scene04 .num3').find('.clients-wrapper').width($horizontalSize02);
                var setScroll04_02 = ScrollTrigger.create({
                    trigger: ".ui-scene04 .num3",
                    start: "top top",
                    end: "bottom+=" + ($horizontalSize02 - $(window).width()) + "px top",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    scrub: 1,
                    onUpdate: function (a) {
                        var progress = a.progress * 1.6;
                        if (sequenceETB.isDevice == "mobile") {
                            progress = a.progress * 1.3;
                        }
                        if (progress >= 1) {
                            progress = 1
                        }
                        gsap.set('.ui-scene04 .num3 .ui-horizontal-move ', {
                            x: ((progress) * ($horizontalSize02 - $(window).width())) + "px"
                        })
                    },
                });

                // 텍스트 SCENE 제어 (게시판 영역)

                // var _sceneTl05 = gsap.timeline();

                // _sceneTl05.fromTo($fixedSymbol, _timelineDuration, {
                //   transform: "scale(1)"
                // }, {
                //   transform: "scale(0)"
                // })

                // ScrollTrigger.create({
                //   trigger: ".section-story",
                //   // start: "bottom top", // 전소스
                //   // end: "bottom+=400px top", // 전소스
                //   start: "top+=5% top",
                //   end: "center top",
                //   // markers: true,
                //   overwrite: true,
                //   pin:true,
                //   // animation: _sceneTl05,
                //   ease: Power4.easeInOut,
                //   scrub: 1,
                //   onEnter: function () {
                //     sequenceETB.headerActive(4);
                //   },
                //   onLeave: function () {
                //     sequenceETB.headerToggle(true);
                //   },
                //   onEnterBack: function () {
                //     sequenceETB.headerToggle(false);
                //   },
                //   onLeaveBack: function () {
                //     sequenceETB.headerActive(3);
                //   }
                // });
















                //  비디오 프레임제어

                //  .ui-frame-scene05
                //  .ui-frame-scene05
                //  .ui-frame-scene05


                ScrollTrigger.create({
                    trigger: ".ui-frame-scene05",
                    start: "top-=50px top",
                    end: "bottom top",
                    // markers: true,
                    overwrite: true,

                    scrub: 1,
                    onUpdate: function (a) {
                        clearInterval(intervalId);
                        var progress = Math.floor(frame01 + frame02 + frame03 + frame04 + frame05 + (a.progress * frame06));
                        sequenceETB.updateImage(progress)
                        sequenceETB.headerToggle(true);
                    },
                    onEnter: function () {
                        sequenceETB.headerToggle(true);
                        sequenceETB.headerActive(4);
                        $fixedSymbol.hide();
                    },
                    onLeave: function () {
                        sequenceETB.headerToggle(true);
                    },
                    onLeaveBack: function () {
                        sequenceETB.headerToggle(false);
                        sequenceETB.headerActive(3);
                    }
                });




                // 텍스트 SCENE 제어 (그리고 당신 !)

                //  .ui-scene05 .num1
                //  .ui-scene05 .num1
                //  .ui-scene05 .num1
                var _sceneTl06 = gsap.timeline();

                _sceneTl06.staggerTo($(".ui-scene05 .num1 .ui-scene-move-y").toArray(), _timelineDuration * 3,
                        move.inY, .3)
                    .to(".empty-element", _timelineDuration, {} // 빈값 시간 벌기
                    )


                ScrollTrigger.create({
                    trigger: ".ui-scene05 .num1",
                    start: "top top",
                    end: "bottom+=500px top",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    scrub: 1,
                    animation: _sceneTl06,
                    onEnter: function () {
                        // sequenceETB.headerActive(5);
                        // sequenceETB.headerActive(4);
                        $fixedSymbol.hide();
                    },
                    onLeaveBack: function () {
                        // sequenceETB.headerActive(4);
                        // sequenceETB.headerActive(3);
                    },
                    onLeave: function () {
                        gsap.to('.ui-scene05 .num1', 1, {
                            alpha: 0.5,
                            ease: Power4.easeInOut,
                            overwrite: true,
                        })
                    },
                    onEnterBack: function () {
                        gsap.to('.ui-scene05 .num1', 1, {
                            alpha: 1,
                            ease: Power4.easeInOut,
                            overwrite: true,
                        })
                    }
                });


                // ScrollTrigger.create({

                //   trigger: ".ui-scene06 .num2",
                //   start: "top top",
                //   end: "bottom+=500px top",
                //   pin: '.section-careers .num1 .txt4',
                //   // markers: true,
                //   ease: Power4.easeInOut,
                //   overwrite: true,
                // });
                // 텍스트 SCENE 제어 (Careers)

                ScrollTrigger.create({
                    trigger: ".ui-scene06 .num2",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,
                    onEnter: function () {
                        // sequenceETB.headerActive(5);
                        gsap.to($('.section-careers .num2 .centered-position .txt4'), .5, {
                            alpha: 1,
                        })
                        $('.fixed-video-wrp .bg-area').addClass('dimmed');
                        gsap.to(".ui-scene06 .num2 li", {
                            duration: .5,
                            alpha: 1,
                            ease: Power4.easeInOut,
                            overwrite: true,
                            stagger: {
                                from: 0,
                                amount: .5,
                                overwrite: true,
                            },
                        });
                    },
                    onLeave: function () {
                        gsap.to($('.section-careers .num2 .centered-position .txt4'), .5, {
                            alpha: .5,
                        })
                        $('.fixed-video-wrp .bg-area').removeClass('dimmed');
                        gsap.to(".ui-scene06 .num2 li", {
                            duration: .5,
                            alpha: 0.5,
                            ease: Power4.easeInOut,
                            overwrite: true,
                        })
                    },
                    onEnterBack: function () {
                        $('.fixed-video-wrp .bg-area').addClass('dimmed');
                        gsap.to($('.section-careers .num2 .centered-position .txt4'), .5, {
                            alpha: 1,
                        })
                        gsap.to(".ui-scene06 .num2 li", {
                            duration: .5,
                            alpha: 1,
                            ease: Power4.easeInOut,
                            overwrite: true,
                            stagger: {
                                from: 0,
                                amount: .5,
                                overwrite: true,
                            },
                        });
                    },
                    onLeaveBack: function () {
                        $('.fixed-video-wrp .bg-area').removeClass('dimmed');
                        gsap.to($('.section-careers .num2 .centered-position .txt4'), .5, {
                            alpha: .5,
                        })
                        gsap.to(".ui-scene06 .num2 li", {
                            duration: .5,
                            alpha: 0.5,
                            ease: Power4.easeInOut,
                            overwrite: true,
                        })
                    },
                });

                // //  비디오 프레임제어

                // //  .ui-frame-scene06
                // //  .ui-frame-scene06
                // //  .ui-frame-scene06

                ScrollTrigger.create({
                    trigger: ".ui-frame-scene06",
                    start: "top-=450px center",
                    end: "bottom top",
                    // markers: true,
                    overwrite: true,
                    scrub: 1,
                    onUpdate: function (a) {
                        clearInterval(intervalId);
                        var progress = Math.floor(frame01 + frame02 + frame03 + frame04 + frame05 + frame06 + (a.progress * frame07));
                        sequenceETB.updateImage(progress)
                    },
                });
                // 텍스트 SCENE 제어 (Contact)

                ScrollTrigger.create({
                    trigger: ".ui-scene06 .num3",
                    start: "top top",
                    end: "center+=400px top",
                    pin: true,
                    // markers: true,
                    ease: Power4.easeInOut,
                    overwrite: true,

                    onEnter: function () {
                        sequenceETB.headerActive(5);
                        gsap.to(".ui-scene06 .num3 .ui-scene-move-y", {
                            duration: .5,
                            alpha: 1,
                            y: 0,
                            ease: Power4.easeInOut,
                            overwrite: true,
                            stagger: {
                                from: 0,
                                amount: .5,
                                overwrite: true,
                            }
                        });
                        // sequenceETB.headerActive(6);
                    },
                    onLeave: function () {
                        gsap.to(".ui-scene06 .num3 .ui-scene-move-y", {
                            duration: .35,
                            alpha: 0,
                            y: "-50px",
                            y: "-5rem",
                            ease: Power4.easeInOut,
                            overwrite: true,
                        });
                    },
                    onEnterBack: function () {
                        gsap.to(".ui-scene06 .num3 .ui-scene-move-y", {
                            duration: .5,
                            alpha: 1,
                            y: 0,
                            ease: Power4.easeInOut,
                            overwrite: true,
                            stagger: {
                                from: 0,
                                amount: .5,
                                overwrite: true,
                            }
                        });
                    },
                    onLeaveBack: function () {
                        sequenceETB.headerActive(4);
                        gsap.to(".ui-scene06 .num3 .ui-scene-move-y", {
                            duration: .35,
                            alpha: 0,
                            y: 50,
                            ease: Power4.easeInOut,
                            overwrite: true,
                        });
                    },
                });









                //  비디오 프레임제어

                //  .ui-frame-scene07
                //  .ui-frame-scene07
                //  .ui-frame-scene07

                ScrollTrigger.create({
                    trigger: ".ui-frame-scene07",
                    start: "top center",
                    end: "bottom top",
                    // markers: true,
                    overwrite: true,
                    onUpdate: function (a) {
                        clearInterval(intervalId);
                        var progress = Math.floor(frame01 + frame02 + frame03 + frame04 + frame05 + frame06 + frame07 + (a.progress * frame08));
                        // $('.fixed-video-wrp .bg-area').css("background-color","rgba(0,0,0,"+a.progress+")")
                        sequenceETB.updateImage(progress)
                    },
                });


                function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                }

                function afterOnload() {
                    var _totalText = $('.ui-split-text').length;

                    var mySplitText = new SplitText($(".ui-split-text .txt1"), {
                            type: "chars",
                        }),
                        _duration = 0.2;

                    gsap.set(mySplitText.chars, {
                        alpha: 0,
                    });
                    ScrollTrigger.create({
                        trigger: ".ui-scene07",
                        start: "top top+=1",
                        end: "bottom top",
                        // markers: true,
                        overwrite: true,
                        onEnter: function () {
                            $randomNum = getRandomInt(_totalText),
                                $randomEl = $(".ui-split-text").eq($randomNum),
                                $quote = $randomEl.find(".txt1"),
                                $chars = $quote.find("*"),
                                $byName = $randomEl.find(".ui-scene-move-y"),
                                $copyright = $(".ui-scene07 .txt3");

                            gsap.to($chars, {
                                duration: _duration * 4,
                                alpha: 1,
                                ease: Power4.easeInOut,
                                stagger: _duration / 3,
                                overwrite: true,
                                onComplete: function () {
                                    gsap.to($byName, {
                                        duration: _duration * 6,
                                        alpha: 1,
                                        y: 0,
                                        ease: Power4.easeInOut,
                                        overwrite: true,
                                        onComplete: function () {
                                            gsap.to($copyright, .5, {
                                                y: 0,
                                                alpha: 1,
                                                overwrite: true,
                                            });
                                        }
                                    });
                                }
                            });
                            gsap.to($(".ui-scene07"), .2, {
                                backgroundColor: "rgba(1,1,1,1)",
                                overwrtie: true,
                            })
                        },
                        onLeaveBack: function () {

                            gsap.to(mySplitText.chars, .5, {
                                alpha: 0,
                                overwrite: true,
                            })
                            gsap.to($('.ui-split-text .ui-scene-move-y'), .2, {
                                alpha: 0,
                                y: 50,
                                overwrite: true,
                            });
                            gsap.to($copyright, .2, {
                                alpha: 0,
                                y: 50,
                                overwrite: true,
                            });
                            gsap.to($(".ui-scene07"), .2, {
                                backgroundColor: "rgba(1,1,1,0)",
                                overwrtie: true,
                            })
                        }
                    });

                }




                // by Jungo
















                // 모달 팝업
                var $popBtn = $('[class*="open-pop"]');


                $("body").on("click", '[class*="open-pop"]', function () {
                    var $this = $(this);
                    $('body,html').css({
                        'overflow': 'hidden',
                    });
                    var _poptarget = $this.data("popup");

                    if ($this.hasClass('open-pop0')) {
                        var _img = $this.data('image');

                        $('.pop-wrp0').find('.img-box img').attr("src", "../../images/common/" + _img + "")
                    }

                    gsap.fromTo($(_poptarget), .5, {
                        scale: .7,
                        alpha: 0,
                        display: "none",
                        ease: Expo.easeInOut,
                        onComplete: function () {
                            if ($this.hasClass('open-pop2')) {
                                setTimeout(function () {
                                    var swiper = new Swiper('.swiper-container.hire-information', {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                        // centeredSlides: true,
                                        mousewheel: {
                                            invert: false,
                                        },
                                        pagination: {
                                            el: '.hire-information .swiper-pagination',
                                            type: 'progressbar',
                                        },
                                        breakpoints: {
                                            1024: {
                                                slidesPerView: 3,
                                            },
                                            mousewheel: {
                                                invert: false,
                                            },
                                        }
                                    });
                                }, 150)

                            }
                        }
                    }, {
                        scale: 1,
                        alpha: 1,
                        display: "block",
                        ease: Expo.easeInOut,
                        onComplete: function () {

                        }
                    })

                })


                $('[class*="pop-close"]').on('click', function () {

                    gsap.to($('[class*="pop-wrp"]'), .5, {
                        scale: 1.2,
                        alpha: 0,
                        ease: Expo.easeInOut,
                        onComplete: function () {
                            $('[class*="pop-wrp"]').hide();
                            $DomHtml.attr('style', '');
                        }
                    });

                })

                $("body").on("click", '.pop-back', function () {

                    var $this = $(this).closest('.pop-wrp');
                    gsap.to($this, .5, {
                        scale: 1.2,
                        alpha: 0,
                        ease: Expo.easeInOut,
                        onComplete: function () {
                            $this.hide();
                            if (!$('.pop-wrp:visible').length) {
                                $DomHtml.attr('style', '');
                            }

                        }
                    });
                })



                // 디자인 스크롤 - 기본 inner
                jQuery('.scrollbar-inner').scrollbar();
                //- 디자인 스크롤 - 기본 outer
                jQuery('.scrollbar-outer').scrollbar();
                // 디자인 스크롤 - textarea
                jQuery('.textarea-scrollbar').scrollbar();
                var scrollArray = [
                    // setScroll03_01,
                    // setScroll03_02,
                    setScroll04_01,
                    setScroll04_02
                ]
                sequenceETB.scrollControlFn(scrollArray,"init");
                $(window).resize(function () {
                    sequenceETB.set();
                    sequenceETB.updateImage(_publicFrame);
                    sequenceETB.isDevice = sequenceETB.deviceCheck();
                    sequenceETB.scrollControlFn(scrollArray);


                });

                ScrollTrigger.refresh();
                // if(!sequenceETB.iOS()){
                //     ScrollTrigger.kill();
                //     _sceneTl01.play(.5);
                //     _sceneTl02.play();
                //     _sceneTl03.play();
                //     _sceneTl04.play();
                //     _sceneTl06.play();
                // }

            }
        })



    }, 1)

};