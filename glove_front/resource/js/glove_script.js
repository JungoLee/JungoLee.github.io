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
                each: .1,
            },
            x: 0,
            y: 0,
            alpha: 1,
            ease: Power2.easeOut,
        }, "-=.5").to('.icon-glove.left,.icon-glove.right', .75, {
            left: 0,
            alpha: 1,
            ease: Back.easeOut.config(1.5),
        }, );
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

window.onload = function () {
    gloveJS.init();
}


const getMemberLists = async () => {
    const response = await fetch('member.json');
    if (response.status === 200) {
        const results = await response.json();
        // console.log(results)
        const seatingList = document.querySelector('#seatingList');
        results.forEach(element => {
            const liEl = document.createElement('li');
            liEl.className = element.type + ' ' + element.number;
            liEl.innerHTML = `<input type="text" value="${element.name}" />`;
            seatingList.appendChild(liEl);
        });
        // return results;
    } else {
        throw new Error('Unable to get your location')
    }

}
// getMemberLists();

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
        result = [],
        row_length,
        value;

    //cols의 label이 빈 값이므로 row의 첫번째 행을 column으로 지정
    console.log(data)
    for (var column_idx in data.table.cols) {
        columns.push(data.table.rows[0]['c'][column_idx].c);
    }
    //row 데이터 불러오기
    for (var rows_idx in data.table.rows) {
        row_length = data.table.rows[rows_idx]['c'].length;
        if (column_length != row_length) {
            return false;
        }
        for (var row_idx in data.table.rows[rows_idx]['c']) {
            if (!result[rows_idx]) {
                result[rows_idx] = {};
            }

            if (data.table.rows[rows_idx]['c'][row_idx] != null && data.table.rows[rows_idx]['c'][row_idx].v) {
                value = data.table.rows[rows_idx]['c'][row_idx].v;
            } else {
                value = "";
            }

            result[rows_idx][columns[row_idx]] = value;
        }
    }
    return result;
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
    console.log(data)

    data.forEach((element, index) => {
        if (index == 0) return;
        const liEl = document.createElement('li');
        liEl.className = element.type + ' ' + element.number;
        liEl.innerHTML = element.name;
        // liEl.innerHTML = `<input type="text" value="${element.name}" />`;
        seatingList.appendChild(liEl);
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

}
var datas = [];
query('select *', 'my_callback');
/* 구글 스프레드시트 스크립트 끝 */