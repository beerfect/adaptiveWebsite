const menuButton = document.querySelector('.menu__button');
const menuUl = document.querySelector('.menu__ul');
const menuVisible = document.querySelector('.menu-visible');



let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

menuButton.addEventListener('click',showMenu);

function showMenu() {
    menuButton.classList.toggle('.menu__button_checked');
    menuUl.classList.toggle('menu-visible');
    let menuVisible = document.querySelector('.menu-visible');
    if(menuVisible){
        menuVisible.addEventListener('click',showMenu);
    }
}

// 823+
// 482-822
// 0 - 481
