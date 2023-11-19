const closeMark = document.querySelector(".closeMark");
const menuHamburger = document.querySelector(".menuHamburger");
const nav = document.querySelector("ul");


menuHamburger.addEventListener("click", () => { 
    nav.classList.toggle("flex");
})


closeMark.addEventListener("click", () => { 
    nav.classList.toggle("flex");    
})

