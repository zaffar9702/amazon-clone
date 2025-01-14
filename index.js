const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control_prev')
const next_btn = document.querySelector('.control_next')
const navCart = document.querySelector('.nav-cart')
const product = document.querySelector('.products')
const navText = document.querySelector('.nav-text')
const signup_btn = document.querySelector('.signin-signup-btn')

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';

    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });

}


navCart.addEventListener("click", () => {
    window.location = "/cart.html"
})



product.addEventListener("click", () =>{
    window.location = "/product.html"
})

navText.addEventListener("click", () =>{
    window.location = "/signin.html"
})


signup_btn.addEventListener("click", () =>{
    window.location = "/signup.html"
})