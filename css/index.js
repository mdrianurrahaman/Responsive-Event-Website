let menu = document.querySelector("#menubars");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};


let themeToggle = document.querySelector('.theme-toggle');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
    themeToggle.classList.toggle('active');
}



window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
    themeToggle.classList.remove('active');
}

document.querySelectorAll('.theme-toggle .theme-btn').forEach((btn) => {
    btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color',color);
};    
});








// ######## review js ###### 

//   <div class="review-slider swipper-container" >
  var swiper = new Swiper(".reviewslider",{
    slidesPerView: 1,
    grabCuror:true,
    loop:true,
    spaceBetween:10,

    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
        1050:{
            slidesPerView:3,
        },

    }, 
    autoplay: {
        delay:4000,
        disableOnInteraction:false,
    },

  });
