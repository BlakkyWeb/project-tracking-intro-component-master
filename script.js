const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', ()=> {
    navMenu.classList.add('hide');
    close.classList.add('hide1');
    hamburger.classList.add('hide2');
});

close.addEventListener('click', ()=> {
    hamburger.classList.remove('hide2');
    navMenu.classList.remove('hide');
    close.classList.remove('hide1');
})