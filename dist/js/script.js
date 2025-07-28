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


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);

//         targetElement.scrollIntoView({
//             behavior: 'smooth',
//             block: "start"
//         });
//     });
// });