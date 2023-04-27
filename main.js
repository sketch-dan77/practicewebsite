window.onload = function(){
    const toTop = document.querySelector(".back-to-top")
    if(toTop){
        toTop.onclick = function() {
            window.scroll({
                behavior: "smooth",
                top: 0
            })
        }
    }
    window.addEventListener("scroll",function(){
        const h = window.scrollY ||
        document.documentElement.scrollTop
        if(toTop) {
            if(h > 100) {
                toTop.classList.add("show")
            } else {
                toTop.classList.remove("show")
            }

        }
    })
}