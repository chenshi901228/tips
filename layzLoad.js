class ImgLayzLoad {
    constructor(el) {
        this.el = document.querySelectorAll(el)
        this.start()
    }
    imgload(img) {
        if (!img.getAttribute("src")) {
            let source = img.dataset.url
            img.src = source
        }
    }

    layzLoad(el) {
        let offsetTop
        let clientTop = window.innerHeight
        for (let i = 0; i < el.length; i++) {
            offsetTop = el[i].getBoundingClientRect().top
            if (offsetTop <= clientTop) {
                this.imgload(el[i])
            }
        }
    }
    start() {
        document.onscroll = () => {
            this.layzLoad(this.el)
        }
    }
}