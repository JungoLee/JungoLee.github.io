import { gsap } from "../lib/gsap.js";
import "../lib/swiper-bundle.min.js";
// import gsap from 'gsap';
console.log(gsap);

class TextFlip {
  constructor(el, option) {
    this.el = el;

    // 기본 옵션 normal 기준
    const basicOption = {
      direction: "vertical",
      angle: -90,
      duration: 0.3,
      stagger: 0.03,
      delay: 0,
      easing: "linear",
      unit: "letter",
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

  /***************************************************
        'active' 클래스가 있으면 animate start
        'active' 클래스가 없으면 animate reverse
    ***************************************************/
  play() {
    if (this.el.classList.contains("active")) {
      this.gsapForward();
    } else {
      this.gsapBackward();
    }
  } //

  /***************************************************
        gsap animate 재생 전 setting
    ***************************************************/
  setGsap() {
    gsap.set(this.textAll, {
      rotateY: this.checkDirection().valueY,
      rotateX: this.checkDirection().valueX,
      alpha: 0,
    });
  }

  /***************************************************
        gsap animate start, reverse fnc
    ***************************************************/
  gsapForward() {
    gsap.set(this.el, {
      alpha: 1,
    });

    gsap.to(this.textAll, {
      delay: this.option.delay,
      rotateY: 0,
      rotateX: 0,
      duration: this.option.duration,
      stagger: this.option.stagger,
      alpha: 1,
      ease: this.option.easing,
      overwrite: true,
    });
  }
  gsapBackward() {
    gsap.to(this.textAll, {
      rotateY: this.checkDirection().valueY,
      rotateX: this.checkDirection().valueX,
      duration: this.option.duration,
      stagger: {
        each: this.option.stagger,
        from: "end",
      },
      alpha: 0,
      ease: this.option.easing,
      overwrite: true,
    });
  }

  /***************************************************
        방향과 각도를 체크해서 setting할 값 리턴
    ***************************************************/
  checkDirection() {
    let valueX;
    let valueY;
    if (this.option.direction == "horizontal") {
      valueY = 0;
      valueX = this.option.angle + "deg";
    } else if (this.option.direction == "vertical") {
      valueY = this.option.angle + "deg";
      valueX = 0;
    }
    return { valueX, valueY };
  }

  /***************************************************
        animate 시작 전에 텍스트를 잘라주는 fnc
    ***************************************************/
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

    this.textAll = [...this.el.querySelectorAll(".split")];
  }

  insertEnter(array, insert) {
    return [...Array(2 * array.length - 1)].map((_, i) =>
      i % 2 ? insert : array[i / 2]
    );
  }
  makeDomFnc(word, enterLetter) {
    let ArrayWord = "";
    word.forEach((el) => {
      if (el == enterLetter) {
        ArrayWord += `<br>`;
      } else if (el == " ") {
        ArrayWord += `&nbsp;`;
      } else {
        if (this.option.unit == "word") {
          ArrayWord += `<span class="split">${el}&nbsp;</span>`;
        } else {
          ArrayWord += `<span class="split">${el}</span>`;
        }
      }
    });
    this.el.innerHTML = ArrayWord;
  }

  // 버튼이나 입력창으로 값을 수정해야 할 때(버튼 모듈 용)
  setOption(option) {
    this.option = Object.assign(this.option, option);
  }
}

export { TextFlip };
