let gallery = document.querySelector("#Sport .flex")
for (let i = 0; i < gallery.children.length; i++) {
    gallery.children[i].addEventListener("click", (e) => {
        if (e.currentTarget.classList.contains("expanded") == false) {
            console.log(e.currentTarget)
            for (let j = 0; j < gallery.children.length; j++)
                gallery.children[j].classList.remove("expanded")
            e.currentTarget.classList.add("expanded")
        } else {
            e.currentTarget.classList.remove("expanded")
        }
    })
}
document.addEventListener("scroll", (e) => {
    if (window.scrollY == 0) {
        document.getElementsByClassName("header")[0].classList.add("transparent")
    } else {
        document.getElementsByClassName("header")[0].classList.remove("transparent")
    }
    for (let j = 0; j < gallery.children.length; j++) {
        gallery.children[j].classList.remove("expanded")
    }
    document.querySelector(":root").style.setProperty('--window-scroll-y', `${window.scrollY}px`)
})

document.getElementById("hamburger").addEventListener("click", (e) => {
    document.getElementsByClassName("header")[0].classList.toggle("mobile-open")
})