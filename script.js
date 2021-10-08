let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

//When click menu button , a menu bar appears.
menu.onclick = () =>{ 
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
// When click search button,a search bar appears.
document.querySelector('#search-icon').onclick = ()=>{
    document.querySelector('#search-form').classList.toggle('active');
}
// When click close button ,a search bar remove.
document.querySelector('#close').onclick = ()=>{
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
   loop:true,
   breakpoints:{
       0: {
           slidesPerView: 1,
       },
       640: {
           slidesPerView: 2,
       },
       768: {
           slidesPerView: 2,
       },
       1024: {
           slidesPerView: 3,
       },
   },
  });

