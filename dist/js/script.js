//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header')
    const navbarFixed = header.offsetTop

    if(window.pageYOffset > navbarFixed){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}



//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
})