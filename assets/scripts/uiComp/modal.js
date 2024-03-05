class ModalSlide {
  constructor(el) {
    this.el = el;
    this.body = document.querySelector(".md-body");
    this.dimmm = document.querySelector(".dimmm");
    this.showroomDim = this.el.querySelector(".dimmm");
    this.gnb = this.el.querySelectorAll(".ux-md-box");
    this.btn = this.el.querySelectorAll(".md-btn");
    this.md = this.el.querySelectorAll(".md-modal");
    this.mdClose = this.el.querySelectorAll(".md-close");
    this.mdbg = document.querySelector(".md-bg");
  }

  init() {
    this.modal();
    this.dim();
    this.dimOn();
    this.dimOff();
    this.dimCheck();
  }

  dimCheck() {
    const dimCheck = this.dimmm.classList.item(1);

    this.dimmm.classList.contains(dimCheck) == true
      ? this.dimmm.classList.remove(dimCheck)
      : null;
  }

  dimOn(target) {
    const dimOn = target.classList.item(1);

    this.dimCheck();

    this.dimmm.classList.add(dimOn);
  }

  dimOff(target) {
    this.dimCheck();

    const dimOff = target.classList.item(2);

    this.dimmm.classList.add(dimOff);
  }

  show() {
    this.showroomDim.classList.remove("hide");
    this.md[0].classList.remove("hide");
    this.showroomDim.classList.add("show");
    this.md[0].classList.add("show");
  }

  hide() {
    this.showroomDim.classList.remove("show");
    this.md[0].classList.remove("show");
    this.showroomDim.classList.add("hide");
    this.md[0].classList.add("hide");
  }

  modal() {
    this.gnb.forEach((target, index) => {
      this.btn[index].addEventListener("click", () => {
        this.dimOn(target);

        this.body.classList.add("show");
        this.dimmm.classList.add("show");
        this.mdbg.classList.add("show");

        if (!this.md[index].classList.contains("hide")) {
          this.md[index].classList.add("show");
        } else {
          this.md[index].classList.remove("hide");
          this.md[index].classList.add("show");
        }
      });

      this.mdClose[index].addEventListener("click", () => {
        this.body.classList.remove("show");
        this.dimmm.classList.remove("show");
        this.mdbg.classList.remove("show");

        if (this.md[index].classList.contains("show")) {
          this.md[index].classList.remove("show");
          this.md[index].classList.add("hide");
        } else {
          console.log("오류");
        }

        this.dimOff(target);
      });
    });
  }

  dim() {
    window.addEventListener("click", (e) => {
      if (e.target == this.dimmm) {
        this.body.classList.remove("show");
        this.dimmm.classList.remove("show");
        this.mdbg.classList.remove("show");

        this.gnb.forEach((el, index) => {
          this.md[index].classList.remove("show");
          this.md[index].classList.add("hide");

          if (
            this.gnb[index].classList.item(1) == this.dimmm.classList.item(1)
          ) {
            const dimOn = this.dimmm.classList.item(1);
            const dimOff = el.classList.item(2);

            this.dimmm.classList.remove(dimOn);
            this.dimmm.classList.add(dimOff);

            // 이 코드는
            // dim-on-01 == dim-off-01, dim-on-02 == dim-off-02
            // 짝궁처럼 number를 같게 써야한다.

            console.log(this.gnb[index].classList.item(2));
          } else {
            console.log("5 또는 9개가 떠야 정상");
          }
        });
      }
    });
  }
}
export { ModalSlide };
