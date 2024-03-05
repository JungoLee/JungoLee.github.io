import condition from "./common/condition.js";
import uxgUi from "./common/uxg-ui.js";

// 전역 변수 선언 ( 전역 변수선언을 위해서 개발 스크립트보단 먼저 호출되어야 합니다. )

window.uxgFn = {
  ...window.uxgFn, // 혹시 있을지 모르는 uxgFn 업데이트

  setCondition: new condition(),

  debounce(func, delay) {
    let timeoutId;
    const time = delay ? delay : 200;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, time);
    };
  },

  watch(options) {
    // https://caniuse.com/?search=MutationObserver 브라우저 낮은 버전 + Opera Mini 에선 불가능
    if (options.el) {
      options.el =
        typeof options.el === "string"
          ? document.querySelector(options.el)
          : options.el;
    }
    const opt = {
      el: document.body, // - DOM 감시 대상 엘리먼트. default : document.body.
      config: { childList: true, subtree: true }, // - Mutation Observer의 설정. default : { childList: true, subtree: true }.
      console: false, // - 변화를 콘솔에 출력할지 여부. default : false.
      callback() {
        console.log("DOM이 변경되었습니다.");
      }, // - DOM 변화가 감지될 때 실행되는 콜백 함수. default : 기본 동작 콜백.
      ...options,
    };

    setTimeout(() => {
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === "childList") {
            if (opt.console) {
              console.log(mutation);
            }
            opt.callback(mutation);
          }
        }
      });
      observer.observe(opt.el, opt.config);
    });
  },

  ...uxgUi,
};

// Loaded for Public Common ( Dom 생성후 이미지 포함 X ) - 개발이 비동기 안하면 여기에
document.addEventListener("DOMContentLoaded", () => {
  import("./common/publicInit.js").then().catch();
});

// Loaded for Public Common ( 모든 리소스 로드후 이미지,js,css ) - 개발이 비동기로드후 필요하면 여기에
window.addEventListener("load", function () {
  // Update
  uxgFn.watch({
    callback(param) {},
  });

  // 투뎁스용 공통 클래스 필요 uxg-page-{{ 페이지 이름 }} , page-container-mmmm01 02
  if (document.querySelector(".uxg-page-container-main")) {
    import("./pageComp/main.js")
      .then((module) => {
        console.log(module);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

// Resize for Public Common
window.addEventListener(
  "resize",
  uxgFn.debounce(() => {
    uxgFn.setCondition.update();
    console.log(uxgFn.setCondition);
  })
);
