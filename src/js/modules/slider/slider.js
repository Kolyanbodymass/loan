export default class Slider {
    constructor({container = null,
        btns = null,
        next = null,
        prev = null,
        modNext = null,
        modPrev = null,
        activeClass = "",
        animate,
        autoplay } = {}) {
        this.container = document.querySelector(container);
        try {this.slides = this.container.children;} catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.modNext = document.querySelectorAll(modNext);
        this.modPrev = document.querySelectorAll(modPrev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1;
    }

    
}