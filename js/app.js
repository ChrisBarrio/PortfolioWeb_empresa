var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
      slidesPerGroup: 1,
    }
  }
  });

  //--------------------------

  var swiper = new Swiper(".mySwiperReview", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          // when window width is >= 640px
          811: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
          }
        }
  });

//-----------------NAVEGACION----------------------//  
const btn_menu = document.querySelector('.menu_burger')
const nav = document.querySelector('nav')
const header =document.querySelector('header')

btn_menu.addEventListener('click',()=>{
  nav.classList.toggle('active')
})


window.onscroll = () =>{
  nav.classList.remove('active');
}


// window.onscroll = () =>{
// if(window.scrollY > 0){
//   header.classList.add('shadow');
// }else{
//   header.classList.remove('shadow');
// }
// }