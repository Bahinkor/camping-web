const navbtn = document.querySelector(".nav__btn")
const navmenu = document.querySelector(".nav-menu")


let navopen = false;
navbtn.addEventListener("click", function (){
    if (navopen){
        navbtn.classList.remove("nav__btn--open")
        navmenu.classList.remove("nav-menu--open")

        
        navopen = false
    } else {
        navbtn.classList.add("nav__btn--open")
        navmenu.classList.add("nav-menu--open")
        navopen = true
    }
})