import Swiper from "swiper"
import gsap from 'gsap'
import {
    Navigation
} from 'swiper/modules'
import {
    TextScale
} from '../uiComp/text_scale.js'

/******************** 필요한 부분 ********************/
let option02 = {
    position: "bottom",
    duration: 0.7,
    stagger: 0.02,
    easing: "power4.out",
}

const elScale03 = document.querySelector(".option-title")
let scale03 = new TextScale(elScale03, option02)
scale03.init()
setTimeout(()=>{
    scale03.setOption(option02)
    scale03.play()
},3000)

/******************** 필요한 부분 ********************/


if (document.querySelector('.swiper-portpolio-container')) {
    const el = document.querySelector('.swiper-portpolio-container');
    const nextEl = el.querySelector('.swiper-button-next');
    const prevEl = el.querySelector('.swiper-button-prev');
    const swiper = new Swiper(el, {
        modules: [Navigation],
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 20,
        allowTouchMove: false,  // 스크롤 막기
        navigation: {
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
        },
        on: {
            transitionEnd: function() {
                // 활성화된 슬라이드 아래의 요소들을 가져옴
                const activeSlide = this.slides[this.activeIndex];
                const activeSlideContent = activeSlide.querySelector('.option-title');

                if(activeSlideContent.classList.contains('used')) return
                activeSlideContent.classList.add('used')
                // TextScale 초기화
                const option = {
                    position: "bottom",
                    duration: 0.7,
                    stagger: 0.02,
                    easing: "power4.out",
                };
                const scale = new TextScale(activeSlideContent, option);
                scale.init();

                // 일정 시간 후에 TextScale 효과 실행
                setTimeout(() => {
                    scale.setOption(option);
                    scale.play();
                }, 3000);
            }
        }
    });
}


if( document.querySelector('.utillity-menu')){
    const el = document.querySelector('.utillity-menu')
    const btns = el.querySelectorAll('a')
    const content = document.querySelectorAll('.content-box')
    btns[0].classList.add('on')
    gsap.to('.uxg-page-container-main',{
        height: document.querySelectorAll('.content-box .content-text')[0].clientHeight
    })
    btns.forEach((el,idx)=>{
        el.addEventListener('click',($this)=>{
            btns.forEach((el,idx)=>{
                el.classList.remove('on')
            })
            el.classList.add('on')
            if(idx === 0 ){
                document.body.style.backgroundColor = "#000"
            }else if(idx === 1){
                document.body.style.backgroundColor = "#041207"
            }else if(idx === 2 ){
                // document.body.style.backgroundColor = "#140202"
                document.body.style.backgroundColor = "#1c1005"
            }
            const tl = gsap.timeline()
            // tl.to(".element", {        // 애니메이션 대상 요소 선택자
            //     duration: 1,             // 애니메이션 지속 시간 (초 단위)
            //     x: 100,                  // x축 이동 값
            //     opacity: 0.5,            // 투명도 설정
            //     ease: "power2.out"       // 이징 함수 설정
            //   })
            //   .to(".element", {
            //     duration: 0.5,
            //     y: 50,
            //     scale: 1.2,
            //     ease: "back.out(2)"
            //   })
            gsap.to(content,{
                scale:.9,
                ease:"Power4.easeInOut",
                onComplete(){
                    gsap.to(content,{
                        x:-100*idx+"%",
                        ease:"Power3.easeInOut",
                        onComplete(){
                            gsap.to(content,{
                                scale:1,
                                ease:"Power4.easeInOut",

                            })

                        }

                    })

                }
            })
            gsap.set('.uxg-page-container-main',{
                height: document.querySelectorAll('.content-box .content-text')[idx].clientHeight
            })

        })
    })
}
export const props = {
    example: "aaa",
};