/*For search button */
let searchform=document.querySelector('.search-form');
document.querySelectorAll('#search-btn').onclick=()=> {
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
}


/*For Shopping cart */
let shoppingCart=document.querySelector(".shopping-cart");
document.querySelectorAll("#shop-btn").onclick=()=> {
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
    login.classList.remove('active');
}

/*For Login */
let login=document.querySelector('.login-form');
document.querySelectorAll('#login-btn').onclick = () => {
    login.classList.toggle('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    
}
/*
const menuBtn=document.querySelector('#menu-btn');
const navLinks=document.querySelector('.navbar');

menuBtn.addEventListener('click', ()=> {
    navLinks.classList.toggle('active');
})
*/

/*For Menu Bar */
let navbar=document.querySelector('navbar');
document.querySelectorAll('#menu btn').onclick =()=> {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');  
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
}
/*When you scroll through the website, the function below will hide or remove any opened
navbar */
window.onscroll=()=> {
    searchform.classList.remove('active');
    navbar.classList.remove('active');
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
}




var swiper= new Swiper (".product-slider", {
    loop:true,
    spaceBetween:20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
    0: {
        slidesPerView:1,
    },
    768: {
        slidesPerView:2,
    }
    ,
    1020: {
        slidesPerView:3,
    },
},

});

var swiper= new Swiper (".review-slider", {
    loop:true,
    spaceBetween:20,
    autoplay: {
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
    0: {
        slidesPerView:1,
    },
    768: {
        slidesPerView:2,
    }
    ,
    1020: {
        slidesPerView:3,
    },
},

});
