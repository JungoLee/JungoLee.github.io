// some library add here ++

import Swiper from "swiper";

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'Zu82KK-Y_Yc',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}


if (document.querySelector('.swiper-portpolio-container')) {
    const el = document.querySelector('.swiper-portpolio-container')
    const nextEl = el.querySelector('.swiper-button-next');
    const prevEl = el.querySelector('.swiper-button-next');
    const swiper = new Swiper(el, {
        slidesPerView: 1.4,
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
        },
    })
    el.querySelectorAll('.frame-box').forEach(($this) => {
        $this.addEventListener('click', () => {
            // 현재 클릭된 .frame-box 요소 내부의 iframe을 찾습니다.
            const iframe = $this.querySelector('iframe');
            console.dir(iframe)
            // 기존의 src 값을 가져옵니다.
            const src = iframe.getAttribute('src');

            // YouTube 동영상 재생을 위해 src에 파라미터를 추가합니다.
            // 예를 들어 autoplay=1을 추가하면 동영상을 자동으로 재생합니다.
            const newSrc = src + '?autoplay=1';

            // 변경된 src 값을 iframe에 설정합니다.
            iframe.setAttribute('src', newSrc);
        })
    })
}

export const props = {
    example: "aaa",
};