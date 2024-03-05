// import { gsap } from '../lib/gsap.js';
import { gsap } from "gsap";

class RandomShow {
  constructor(el, option) {
    this.el = el;

    const basicOption = {
      unit: "letter",
      duration: 1.2,
      stagger: 0.04,
      easing: "linear",
      delay: 0,
    };

    this.option = Object.assign(basicOption, option);

    this.textAll = [];
  }
  init() {
    this.convertText();
    this.setGsap();
    this.play();
    this.el.inst = this;
  }
  // 애니메이션 설정 및 재생
  play() {
    if (this.el.classList.contains("active")) {
      this.gsapForward();
    } else {
      this.gsapBackward();
    }
  }
  setGsap() {
    gsap.set(this.textAll, {
      alpha: 0,
    });
  }
  setOption(option) {
    this.option = Object.assign(this.option, option);
  }
  gsapForward() {
    gsap.to(this.el, {
      alpha: 1,
    });

    gsap.to(this.textAll, {
      delay: this.option.delay,
      duration: this.option.duration,
      stagger: {
        each: this.option.stagger,
        from: "random",
      },
      alpha: 1,
      ease: this.option.easing,
      overwrite: true,
    });
  }
  gsapBackward() {
    gsap.to(this.textAll, {
      delay: 0,
      duration: 0,
      alpha: 0,
      ease: this.option.easing,
      overwrite: true,
    });
  }
  convertText() {
    const text = this.el.textContent;

    this.el.innerHTML = "";

    // 공백을 모두 제거하고 \n으로 나눈다
    const textArr = text.replace(/ {2}/g, "").split("\n");

    // \n으로 나눈 배열 사이에 /을 삽입한다.
    const insertArr = this.insertEnter(textArr, "/");

    if (this.option.unit == "word") {
      insertArr.forEach((el) => {
        const splitWord = el.split(" ");
        this.makeDomFnc(splitWord, "/");
      });
    } else if (this.option.unit == "letter") {
      insertArr.forEach((el) => {
        const splitWord = el.split("");
        this.makeDomFnc(splitWord, "/");
      });
    }
    // 이 배열 부분 수정 예정
    this.textAll = [...this.el.querySelectorAll(".split")];
  }
  insertEnter(array, insert) {
    return [...Array(2 * array.length - 1)].map((_, i) =>
      i % 2 ? insert : array[i / 2]
    );
  }
  makeDomFnc(word, enterLetter) {
    word.forEach((el) => {
      if (el == enterLetter) {
        this.el.innerHTML += `<br>`;
      } else if (el == " ") {
        this.el.innerHTML += `&nbsp;`;
      } else {
        if (this.option.unit == "word") {
          this.el.innerHTML += `<div class="split">${el}&nbsp;</div>`;
        } else {
          this.el.innerHTML += `<div class="split">${el}</div>`;
        }
      }
    });
  }
}

export { RandomShow };
