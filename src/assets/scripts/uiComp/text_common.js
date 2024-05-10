class layout {
    constructor(el) {
			this.el = el
			this.textDelay = el.querySelector('.delayD')
			this.textDuration = el.querySelector('.durationD')
			this.textEasing = el.querySelector('.easingD')

			this.duration = this.textDuration.textContent
			this.stagger = this.textDelay.textContent
			this.easing = this.textEasing.textContent

			this.toggleClassBtn = el.querySelector('.btn-addClass')
			this.easingLi = el.querySelectorAll('.easing li')
			this.typeSpeed = el.querySelector('.speed')
			this.slowBtn = el.querySelector('.slow')
			this.normalBtn = el.querySelector('.normal')
			this.fastBtn = el.querySelector('.fast')

			this.submitDur = el.querySelector('.input-box1')
			this.inputDur = el.querySelector('.duration')

			this.submitDel = el.querySelector('.input-box2')
			this.inputDel = el.querySelector('.delay')

			// this.addList = el.previousSibling('.ux-text-el')
			this.addList = el.parentNode.querySelectorAll('.ux-text-el')

			this.jsCheck = el.classList.contains('js')
    }
    init() {
        this.toggleClass()
        this.easingFnc()
        this.timingDuration()
        this.timingDelay()
        this.clickSpeed()
    }

    /**
     * 클래스를 제거한다.
     * @param {String} element 클래스를 제거하고 싶은 요소
     * @param {String} className 클래스 이름
     */
    removeClass(element, className) {
        if (element) {
            if (element.length == undefined) {
                element.classList.remove(className)
            } else {
                element.forEach(el => {
                    el.classList.remove(className)
                })
            }
        }
    }

    /**
     * 클래스가 포함되어 있는지 확인한다.
     * @param {String} element 클래스를 확인하고 싶은 요소
     * @param {String} className 클래스 이름
     * @returns boolean
     */
    containClass(element, className) {
        return element.classList.contains(className)
    }

    // toggle Class btn
    toggleClass() {
        this.toggleClassBtn.addEventListener('click', () => {
            this.toggleClassBtn.classList.toggle('active')
            // this.addList.classList.toggle('active')
            this.addList.forEach(el => {
                el.classList.toggle('active')
            })
        })
    }

    // easing btn
    /////////////////////////////////////////////초기 버튼 active 확인해서 텍스트 수정
    easingFnc() {
        if (!this.jsCheck) {
            const easingList = ["linear", "ease-in", "ease-out", "ease-in-out", "cubic-bezier(0,2,.4,.6)"]
            this.addList.forEach(el => {
                el.style.setProperty('--easing', this.textEasing.textContent)
            })
            this.easingLi.forEach((el, index) => {
                el.addEventListener('click', () => {

                    // this.addList.style.setProperty('--easing', easingList[index])
                    this.addList.forEach(list => {
                        list.style.setProperty('--easing', easingList[index])
                    })
                    this.textEasing.innerHTML = easingList[index]

                    this.removeClass(this.easingLi, 'active')
                    this.removeClass(this.addList, 'active')
                    this.removeClass(this.toggleClassBtn, 'active')
                    el.classList.add('active')
                })
            })
        } else {
            const easingList = ["linear", "power4.in", "power4.out", "power4.inOut", "Back.easeOut"]
            this.easingLi.forEach((el, index) => {
                el.addEventListener('click', () => {
                    this.easing = easingList[index]
                    this.textEasing.innerHTML = easingList[index]

                    this.removeClass(this.easingLi, 'active')
                    this.removeClass(this.toggleClassBtn, 'active')
                    el.classList.add('active')
                })
            })
        }
    }

    // duration input
    timingDuration() {
        let inputTextDur

        // this.addList.style.setProperty('--dur', this.textDuration.textContent + 's')
        this.addList.forEach(el => {
            el.style.setProperty('--dur', this.textDuration.textContent + 's')
        })
        this.inputDur.addEventListener('change', (e) => {
            inputTextDur = e.target.value
        })
        this.submitDur.addEventListener('submit', (e) => {
            e.preventDefault()
            this.duration = inputTextDur ? inputTextDur : this.duration
            this.textDuration.innerHTML = this.duration

            if (!this.jsCheck) {
                // this.addList.style.setProperty('--dur', this.duration + 's')
                this.addList.forEach(el => {
                    el.style.setProperty('--dur', this.duration + 's')
                })
            }
        })
    }
    // delay input
    timingDelay() {
        let delCheck
        this.inputDel ? delCheck = this.inputDel.disabled : null;
        let inputTextDel

        if (!delCheck && this.inputDel) {
            // this.easingEl.forEach((easing) => {
            //     easing.style.setProperty('--del', this.textDelay.textContent + 's')
            // })
            // this.addList.style.setProperty('--del', this.textDelay.textContent + 's')
            this.addList.forEach(el => {
                el.style.setProperty('--del', this.textDelay.textContent + 's')
            })

            this.inputDel.addEventListener('change', (e) => {
                inputTextDel = e.target.value
            })
            this.submitDel.addEventListener('submit', (e) => {
                e.preventDefault()
                this.stagger = inputTextDel ? inputTextDel : this.stagger
                this.textDelay.innerHTML = this.stagger

                if (!this.jsCheck) {
                    // this.easingEl.forEach((easing) => {
                    //     easing.style.setProperty('--del', this.stagger + 's')
                    // })
                    // this.addList.style.setProperty('--del', this.stagger + 's')
                    this.addList.forEach(el => {
                        el.style.setProperty('--del', this.stagger + 's')
                    })
                }
            })
        } else {
            this.textDelay.innerHTML = 0
        }
    }

    // speed btn
    clickSpeed() {
        this.slowBtn.addEventListener("click", () => {
            this.removeClass(this.fastBtn, 'active')
            this.removeClass(this.normalBtn, 'active')

            this.slowBtn.classList.add('active')
            this.applyTypeSpeed()

            this.removeClass(this.addList, 'active')
            this.removeClass(this.toggleClassBtn, 'active')
        })
        this.normalBtn.addEventListener("click", () => {
            this.removeClass(this.slowBtn, 'active')
            this.removeClass(this.fastBtn, 'active')

            this.normalBtn.classList.add('active')
            this.applyTypeSpeed()

            this.removeClass(this.addList, 'active')
            this.removeClass(this.toggleClassBtn, 'active')
        })
        this.fastBtn.addEventListener("click", () => {
            this.removeClass(this.slowBtn, 'active')
            this.removeClass(this.normalBtn, 'active')

            this.fastBtn.classList.add('active')
            this.applyTypeSpeed()

            this.removeClass(this.addList, 'active')
            this.removeClass(this.toggleClassBtn, 'active')
        })
    }

    // apply speed
    applyTypeSpeed() {
        this.checkTypeSpeed()
        this.textDuration.innerHTML = this.duration
        if (!this.jsCheck) {
            this.addList.forEach(el => {
                el.style.setProperty('--dur', this.duration + 's')
            })
            // this.addList.style.setProperty('--dur', this.duration + 's')
        }

        this.textDelay.innerHTML = this.stagger
        if (!this.jsCheck) {
            // this.easingEl.forEach((easing) => {
            //     easing.style.setProperty('--del', this.stagger + 's')
            // })
            // this.addList.style.setProperty('--del', this.stagger + 's')
            this.addList.forEach(el => {
                el.style.setProperty('--del', this.stagger + 's')
            })
        }
    }
    checkTypeSpeed() {
        if (this.containClass(this.slowBtn, "active")) {
            if (this.containClass(this.typeSpeed, "blur")) {
                this.duration = 1.1
            } else if (this.containClass(this.typeSpeed, "gradient")) {
                this.duration = 10
            } else if (this.containClass(this.typeSpeed, "mask")) {
                this.duration = 1.2
                this.stagger = 0.2
            } else if (this.containClass(this.typeSpeed, "opacity")) {
                this.duration = 1.1
            } else if (this.containClass(this.typeSpeed, "reveal")) {
                this.duration = 0.5
                this.stagger = 0.3
            } else if (this.containClass(this.typeSpeed, "typing")) {
                this.duration = 110
            } else if (this.containClass(this.typeSpeed, "random-w")) {
                this.duration = 1.6
                this.stagger = 0.04
            } else if (this.containClass(this.typeSpeed, "random-s")) {
                this.duration = 1.6
                this.stagger = 0.01
            } else if (this.containClass(this.typeSpeed, "kerning-ex")) {
                this.duration = 1.4
            } else if (this.containClass(this.typeSpeed, "kerning-re")) {
                this.duration = 1.3
            } else if (this.containClass(this.typeSpeed, "flip")) {
                this.duration = 0.5
                this.stagger = 0.03
            } else if (this.containClass(this.typeSpeed, "scale")) {
                this.duration = 1.1
                this.stagger = 0.02
            } else if (this.containClass(this.typeSpeed, "infinite")) {
                this.duration = 1
            } else if (this.containClass(this.typeSpeed, "show-sent")) {
                this.duration = 1.5
                this.stagger = 0.1
            } else if (this.containClass(this.typeSpeed, "show-word")) {
                this.duration = 1.4
                this.stagger = 0.05
            } else if (this.containClass(this.typeSpeed, "show-letter01")) {
                this.duration = 1.4
                this.stagger = 0.02
            } else if (this.containClass(this.typeSpeed, "show-letter02")) {
                this.duration = 1.2
                this.stagger = 0.02
            }

        } else if (this.containClass(this.normalBtn, "active")) {
            if (this.containClass(this.typeSpeed, "blur")) {
                this.duration = 0.8
            } else if (this.containClass(this.typeSpeed, "gradient")) {
                this.duration = 7
            } else if (this.containClass(this.typeSpeed, "mask")) {
                this.duration = 0.8
                this.stagger = 0.15
            } else if (this.containClass(this.typeSpeed, "opacity")) {
                this.duration = 0.8
            } else if (this.containClass(this.typeSpeed, "reveal")) {
                this.duration = 0.4
                this.stagger = 0.3
            } else if (this.containClass(this.typeSpeed, "typing")) {
                this.duration = 80
                // this.stagger = 500
            } else if (this.containClass(this.typeSpeed, "random-w")) {
                this.duration = 1.2
                this.stagger = 0.04
            } else if (this.containClass(this.typeSpeed, "random-s")) {
                this.duration = 1.2
                this.stagger = 0.01
            } else if (this.containClass(this.typeSpeed, "kerning-ex") || this.containClass(this.typeSpeed, "kerning-re")) {
                this.duration = 1
            } else if (this.containClass(this.typeSpeed, "flip")) {
                this.duration = 0.3
                this.stagger = 0.03
            } else if (this.containClass(this.typeSpeed, "scale")) {
                this.duration = 0.7
                this.stagger = 0.02
            } else if (this.containClass(this.typeSpeed, "infinite")) {
                this.duration = 2
            } else if (this.containClass(this.typeSpeed, "show-sent")) {
                this.duration = 1.1
                this.stagger = 0.1
            } else if (this.containClass(this.typeSpeed, "show-word")) {
                this.duration = 1
                this.stagger = 0.05
            } else if (this.containClass(this.typeSpeed, "show-letter01")) {
                this.duration = 1
                this.stagger = 0.02
            } else if (this.containClass(this.typeSpeed, "show-letter02")) {
                this.duration = 0.8
                this.stagger = 0.02
            }

        } else if (this.containClass(this.fastBtn, "active")) {
            if (this.containClass(this.typeSpeed, "blur")) {
                this.duration = 0.5
            } else if (this.containClass(this.typeSpeed, "gradient")) {
                this.duration = 3
            } else if (this.containClass(this.typeSpeed, "mask")) {
                this.duration = 0.5
                this.stagger = 0.1
            } else if (this.containClass(this.typeSpeed, "opacity")) {
                this.duration = 0.5
            } else if (this.containClass(this.typeSpeed, "reveal")) {
                this.duration = 0.3
                this.stagger = 0.3
            } else if (this.containClass(this.typeSpeed, "typing")) {
                this.duration = 50
                // this.stagger = 500
            } else if (this.containClass(this.typeSpeed, "random-w")) {
                this.duration = 0.8
                this.stagger = 0.04
            } else if (this.containClass(this.typeSpeed, "random-s")) {
                this.duration = 0.8
                this.stagger = 0.01
            } else if (this.containClass(this.typeSpeed, "kerning-ex")) {
                this.duration = 0.6
            } else if (this.containClass(this.typeSpeed, "kerning-re")) {
                this.duration = 0.7
            } else if (this.containClass(this.typeSpeed, "flip")) {
                this.duration = 0.1
                this.stagger = 0.03
            } else if (this.containClass(this.typeSpeed, "scale")) {
                this.duration = 0.3
                this.stagger = 0.02
            } else if (this.containClass(this.typeSpeed, "infinite")) {
                this.duration = 3
            } else if (this.containClass(this.typeSpeed, "show-sent")) {
                this.duration = 0.7
                this.stagger = 0.1
            } else if (this.containClass(this.typeSpeed, "show-word")) {
                this.duration = 0.6
                this.stagger = 0.05
            } else if (this.containClass(this.typeSpeed, "show-letter01")) {
                this.duration = 0.6
                this.stagger = 0.02
            } else if (this.containClass(this.typeSpeed, "show-letter02")) {
                this.duration = 0.4
                this.stagger = 0.02
            }
        }
    }
}

export { layout }
