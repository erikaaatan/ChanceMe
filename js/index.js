function getViewport() {

    var viewPortWidth;
    var viewPortHeight;

    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
            viewPortHeight = window.innerHeight
    } else if (typeof document.documentElement != 'undefined' &&
        typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
            viewPortHeight = document.documentElement.clientHeight
    } else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
            viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}

window.addEventListener("scroll", function (event) {
    var top = this.scrollY,
        left = this.scrollX;
    var vh = getViewport()[1];
    if (top < vh) {
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("homenav").classList.add("active");
    } else if (top > vh && top < (vh * 2)) {
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("worksnav").classList.add("active");
    } else if (top > (vh * 2) && top < (vh * 3)) {
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("collegesnav").classList.add("active");
    } else if (top > (vh * 3) && top < (vh * 4)) {
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("aboutnav").classList.add("active");
    }
}, false);