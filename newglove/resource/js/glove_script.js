const gloveJS = {
    init() {
        let scope = this;
        scope.mainBannerPlay();
        scope.bindEvent();
    },
    bindEvent() {
        let scope = this;
        document.querySelector('.ui-go-menu').addEventListener("click", function () {
            scope.mainBannerClose();
        })
        document.querySelectorAll('.ui-open-info-modal').forEach(function ($el) {
            $el.addEventListener("click", function () {
                scope.openInfoModal();
            })
        })
        document.querySelector('.ui-close-btn').addEventListener("click", function () {
            scope.closeInfoModal();
        });
        let firstOffsetTop = document.querySelector(".menu-head").offsetTop;
        document.addEventListener("scroll", function () {
            if (document.querySelector(".menu-head").offsetTop > firstOffsetTop) {
                document.querySelector(".menu-head").classList.add("on")
            } else {
                document.querySelector(".menu-head").classList.remove("on")
            }
        })
    },
    mainBannerPlay() {
        let scope = this;
        let tl = new gsap.timeline();

        tl.to(".main-entry-banner", 1, {
            alpha: 1,
        }).to('.top-stars .icon-star', 1, {
            stagger: {
                each: .1,
            },
            alpha: 1,
        }).to('.text-area .text', 1, {
            stagger: {
                each: .05,
            },
            x: 0,
            alpha: 1,
            ease: Power2.easeOut,
        }, "-=.5").to('.icon-glove.left,.icon-glove.right', .75, {
            left: 0,
            alpha: 1,
            ease: Back.easeOut.config(1.5),
        },"-=.8" ).to('.ui-go-menu', .5, {
            alpha: 1,
            scale: 1,
        });
    },
    mainBannerClose() {
        let menuSwiper = new Swiper('.menu-swiper-container', {
            spaceBetween: 20,
            autoHeight: true
        })
        gsap.to(".main-entry-banner", 1, {
            scale: 1.1,
            alpha: 0,
            ease: Power3.easeOut,
            onComplete: (e, a) => {
                gsap.set(".main-entry-banner", {
                    display: "none",
                })
            }
        })
        gsap.to(".menu-wrapper", .5, {
            alpha: 1,
            delay: .2,
        });
        var titleText =document.querySelector('.title-text');
        menuSwiper.on('transitionEnd',function(e){
            console.log(e.$el[0].querySelector('.swiper-slide-active'))
            console.log(e.$el[0].querySelector('.swiper-slide-active').getAttribute('category'))
            titleText.innerHTML = e.$el[0].querySelector('.swiper-slide-active').getAttribute('category')
        })
    },
    openInfoModal() {
        gsap.to(".popup-cocktail-explain-wrapper", .2, {
            alpha: 1,
            display: "flex",
            ease: Power3.easeOut,
            onComplete: (e, a) => {
                gsap.to(".popup-cocktail-explain", {
                    alpha: 1,
                    scale: 1,
                    ease: Back.easeOut.config(1.5)
                })
            }
        })
    },
    closeInfoModal() {
        gsap.to(".popup-cocktail-explain", {
            alpha: 0,
            scale: .9,
            ease: Back.easeOut.config(1.5),
            onComplete: function () {}
        })
        gsap.to(".popup-cocktail-explain-wrapper", .2, {
            alpha: 0,

            ease: Power3.easeOut,
            onComplete: (e, a) => {
                gsap.set(".popup-cocktail-explain-wrapper", {
                    display: "none",
                })
            }
        })
    },
}



/* 구글 스프레드시트 스크립트 시작 */
var jsonp = function (url) {
    var script = window.document.createElement('script');
    script.async = true;
    script.src = url;
    script.onerror = function () {
        alert('구글 스프레드 시트 파일에 접근할 수 없습니다.')
    };
    var done = false;
    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
            done = true;
            script.onload = script.onreadystatechange = null;
            if (script.parentNode) {
                return script.parentNode.removeChild(script);
            }
        }
    };
    window.document.getElementsByTagName('head')[0].appendChild(script);
};

//스프레드 시트에서 받아 온 데이터 파싱
var parse = function (data) {
    var column_length = data.table.cols.length;
    if (!column_length || !data.table.rows.length) {
        return false;
    }
    var columns = [],
        eachArray = [],
        typeArray = [],
        resultArray = [],
        row_length,
        value,
        newType = "",
        beforeType = "";
        console.log(data)
    //cols의 label이 빈 값이므로 row의 첫번째 행을 column으로 지정
    for (var column_idx in data.table.cols) {
        columns.push(data.table.cols[column_idx]['label']);
    }
    //row 데이터 불러오기
    for (var rows_idx in data.table.rows) {
        row_length = data.table.rows[rows_idx]['c'].length;
        if(rows_idx == 0){
            newType = data.table.rows[rows_idx].c[0].v
            beforeType = data.table.rows[rows_idx].c[0].v
        }

        if (column_length != row_length) {
            return false;
        }

        for (var row_idx in data.table.rows[rows_idx]['c']) {
            if (newType !== beforeType) {

            }
            if (!eachArray[rows_idx]) {
                eachArray[rows_idx] = {};
            }

            if (data.table.rows[rows_idx]['c'][row_idx] != null && data.table.rows[rows_idx]['c'][row_idx].v) {
                value = data.table.rows[rows_idx]['c'][row_idx].v;
            } else {
                value = "";
            }

            eachArray[rows_idx][columns[row_idx]] = value;

        }
        beforeType = data.table.rows[rows_idx].c[0].v

        if(newType !== beforeType || rows_idx == data.table.rows.length-1){
            newType = beforeType
            if(rows_idx == data.table.rows.length-1){
                typeArray.push(eachArray[rows_idx])
            }

            resultArray.push(typeArray)
            typeArray = [];
        }
        typeArray.push(eachArray[rows_idx])


    }
    return resultArray;
};

var query = function (sql, callback) {
    var url = 'https://spreadsheets.google.com/a/google.com/tq?',
        params = {
            key: '1LV7FB9YF9fM7C7IMUMnZiY-xJO-vBRw6iIou_4t7I2E',
            tq: encodeURIComponent(sql),
            tqx: 'responseHandler:' + callback
        },
        qs = [];
    for (var key in params) {
        qs.push(key + '=' + params[key]);
    }
    url += qs.join('&');
    return jsonp(url); // JSONP 도우미 호출
}

var my_callback = function (data) {
    data = parse(data); // 데이터 parse
    var totalItemSize = 0,
        beforePage = "",
        beforeCategory = "COCK TAIL";
    var swiperHtml = document.createElement("div"),
        baseGroupHtml;
        swiperHtml.setAttribute("class","swiper-slide")
        swiperHtml.innerHTML = `<div class="menu-flex-box column-type"></div>`;

    data.forEach((typeArray, _idx) => {

        if(typeArray[0].nextPage == "next"){
            swiperHtml = "";
            swiperHtml = document.createElement("div");
            swiperHtml.setAttribute("class","swiper-slide")
            swiperHtml.innerHTML = `<div class="menu-flex-box column-type"></div>`;
            beforePage = "";
        }

        typeArray.forEach((each,_eachIdx)=>{
            if (_eachIdx == 0) {
                baseGroupHtml = document.createElement("div");

                baseGroupHtml.setAttribute("class","base-group-wrapper "+each.type+"")

                baseGroupHtml.innerHTML = `<div class="box-head"><span class="base-title">${each.type.toUpperCase()}</span></div><div class="box-body"></div>`;
                swiperHtml.querySelector(".menu-flex-box").appendChild(baseGroupHtml);
            }
            console.log(each.image)
            var item = `<a href="#none" class="cocktail-item ui-open-info-modal"> <div class="cocktail-name"> <span class="txt">${each.menuName}</span> <span class="ingredients">${each.ingredient}</span> </div> <div class="cociktail-price">${each.price}.</div>    </a>`;
            var itemHtml = document.createElement("div");
            itemHtml.setAttribute('class','cocktail-item-list')
            itemHtml.innerHTML = item;
            baseGroupHtml.querySelector(".box-body").appendChild(itemHtml)
            totalItemSize++;

            beforeCategory = each.mainCategory;
        });

        swiperHtml.setAttribute("category", beforeCategory)
        createMenu.appendChild(swiperHtml)



    });

    //불러온 데이터 조작
    for (var i = 0; i < datas.length; i++) {
        if (JSON.stringify(datas[i]) == JSON.stringify(data)) {
            return false;
        }
    }
    datas.push(data);

    // HTML 헤더의 값을 추출
    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    gloveJS.init();
}
var datas = [];

window.onload = function () {
    query('select *', 'my_callback');
}

/* 구글 스프레드시트 스크립트 끝 */