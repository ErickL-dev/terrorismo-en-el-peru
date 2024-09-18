window.onscroll = function() {encogerHeader()};

function encogerHeader() {
    var header = document.querySelector("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("scroll-reducido");
    } else {
        header.classList.remove("scroll-reducido");
    }
}
