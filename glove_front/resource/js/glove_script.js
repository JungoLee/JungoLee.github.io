const gloveJS = {
    init(){
        let scope = this;
        scope.mainBannerPlay();
        scope.bindEvent();
    },
    bindEvent(){
        let scope = this;
        document.querySelector('.ui-go-menu').addEventListener("click",function(){
            scope.mainBannerClose();
        })
        document.querySelectorAll('.ui-open-info-modal').forEach(function($el){
            $el.addEventListener("click",function(){
                scope.openInfoModal();
            })
        })
        document.querySelector('.ui-close-btn').addEventListener("click",function(){
            scope.closeInfoModal();
        });
        document.addEventListener("scroll",function(){
            console.log(document.querySelector(".menu-head").offsetTop)
            if(document.querySelector(".menu-head").offsetTop == 0){
                document.querySelector(".menu-head").classList.add("on")
            }else{
                document.querySelector(".menu-head").classList.remove("on")
            }
        })
    },
    mainBannerPlay(){
        let scope = this;
        let tl = new gsap.timeline();

        tl.to(".main-entry-banner",1,{
            alpha:1,
        }).to('.top-stars .icon-star',1,{
            stagger:{
                each:.1,
            },
            alpha:1,
        }).to('.text-area .text',1,{
            stagger:{
                each:.1,
            },
            x:0,
            y:0,
            alpha:1,
            ease:Power2.easeOut,
        },"-=.5").to('.icon-glove.left,.icon-glove.right',.75,{
            left:0,
            alpha:1,
            ease:Back.easeOut.config(1.5),
        },);
    },
    mainBannerClose(){
        let menuSwiper = new Swiper('.menu-swiper-container',{
            spaceBetween:20,
        })
        gsap.to(".main-entry-banner",1,{
            scale:1.1,
            alpha:0,
            ease:Power3.easeOut,
            onComplete:(e,a)=>{
                gsap.set(".main-entry-banner",{
                    display:"none",
                })
            }
        })
    },
    openInfoModal(){
        gsap.to(".popup-cocktail-explain-wrapper",.2,{
            alpha:1,
            display:"flex",
            ease:Power3.easeOut,
            onComplete:(e,a)=>{
                gsap.to(".popup-cocktail-explain",{
                    alpha:1,
                    scale:1,
                    ease:Back.easeOut.config(1.5)
                })
            }
        })
    },
    closeInfoModal(){
        gsap.to(".popup-cocktail-explain",{
            alpha:0,
            scale:.9,
            ease:Back.easeOut.config(1.5),
            onComplete:function(){
            }
        })
        gsap.to(".popup-cocktail-explain-wrapper",.2,{
            alpha:0,

            ease:Power3.easeOut,
            onComplete:(e,a)=>{
                gsap.set(".popup-cocktail-explain-wrapper",{
                    display:"none",
                })
            }
        })
    },
}

window.onload = function(){
    gloveJS.init();
}
