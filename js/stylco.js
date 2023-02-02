let navbar = document.querySelector('.all-navbar');
let menuClr = document.querySelector('a')

window.onscroll = () => {

    if (window.scrollY > 50) {
        navbar.classList.add("fixed-nav");
        menuClr.classList.add("links-clr")
        bookFrom.style.display = "none";
        mainNav.classList.remove('active-nav')
    }
    else {
       navbar.classList.remove("fixed-nav");
       menuClr.classList.remove("links-clr")
    }
}

let mainNav = document.querySelector('.main-nav');
let menuBtn = document.querySelector('.mbl-menu-btn')
let closeNav = document.querySelector('.close-nav')

 menuBtn.onclick = ()=>{
     mainNav.classList.toggle('active-nav')
 }
 closeNav.onclick = ()=>{
    mainNav.classList.remove('active-nav')
}

let formBtn = document.querySelector('.booking-form-btn');
let bookFrom = document.querySelector('.consultation-form');
let closeFrom = document.querySelector('.close-form')

 formBtn.addEventListener("click", ()=>{
      bookFrom.style.display = "block";
 })

 closeFrom.addEventListener("click", ()=>{
     bookFrom.style.display = "none"
 })

var swiper = new Swiper(".mySwiper", {});


