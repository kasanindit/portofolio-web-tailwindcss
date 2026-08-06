const header = document.getElementById('header');
const logoText = document.getElementById('logo-text');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinksGroup = document.getElementById('nav-links');


window.addEventListener('scroll', () => {
    const navbarFixed = header.offsetTop;

    if (window.pageYOffset > navbarFixed) {
        // Scrolled State: Glassmorphism, White Background
        header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
        header.classList.remove('bg-transparent', 'py-4', 'text-white');
        header.classList.add('text-slate-800'); // Changes hamburger color via currentColor

        // Change Logo Text Color
        logoText.classList.remove('text-slate-800');
        logoText.classList.add('text-primary');

        hamburger.classList.remove('text-primary');
        hamburger.classList.add('text-primary');

        // Change Desktop Nav Links Color
        navLinksGroup.classList.remove('lg:text-primary/90');
        navLinksGroup.classList.add('lg:text-slate-600');
    } else {
        // Top State: Transparent, Dark Background underneath
        header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3', 'text-slate-800');
        header.classList.add('bg-transparent', 'py-4', 'text-white');

        // Change Logo Text Color
        logoText.classList.add('text-primary');
        logoText.classList.remove('text-slate-800');

        hamburger.classList.add('text-primary');
        hamburger.classList.remove('text-slate-800');

        // Change Desktop Nav Links Color
        navLinksGroup.classList.add('lg:text-primary/90');
        navLinksGroup.classList.remove('lg:text-slate-600');
    }
});


//hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

    // Accessibility update
    const isExpanded = !navMenu.classList.contains('hidden');
    hamburger.setAttribute('aria-expanded', isExpanded);
});

// Close menu when clicking outside or on a link (Mobile UX)
document.addEventListener('click', (e) => {
    // Close when clicking a nav link
    if (e.target.classList.contains('nav-link')) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    // Close when clicking outside of nav and hamburger
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && !navMenu.classList.contains('hidden')) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});


// window.onscroll = function () {
//     const header = document.querySelector('header')
//     const navbarFixed = header.offsetTop

//     if (window.pageYOffset > navbarFixed) {
//         // header.classList.add('navbar-fixed');

//         header.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-md', 'py-3');
//         header.classList.remove('bg-transparent', 'py-4');

//         // Ubah warna teks logo menjadi biru/primary
//         logo.classList.remove('text-white');
//         logo.classList.add('text-primary');

//         // Ubah warna menu desktop dari putih transparan menjadi gelap
//         navLinks.forEach(link => {
//             link.classList.remove('lg:text-white/80', 'lg:hover:text-white');
//             link.classList.add('lg:text-slate-600', 'lg:hover:text-primary');
//         });
//     } else {
//         // header.classList.remove('navbar-fixed');

//         header.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-md', 'py-3');
//         header.classList.add('bg-transparent', 'py-4');

//         // Kembalikan warna teks logo menjadi putih
//         logo.classList.remove('text-primary');
//         logo.classList.add('text-white');

//         // Kembalikan warna menu desktop ke putih
//         navLinks.forEach(link => {
//             link.classList.remove('lg:text-slate-600', 'lg:hover:text-primary');
//             link.classList.add('lg:text-white/80', 'lg:hover:text-white');
//         });
//     }
// }

// hamburger.addEventListener('click', function () {
//     hamburger.classList.toggle('hamburger-active');
//     navMenu.classList.toggle('hidden');
//     hamburger.setAttribute('aria-expanded', String(!navMenu.classList.contains('hidden')));
// })

// document.querySelectorAll('#nav-menu a').forEach((link) => {
//     link.addEventListener('click', () => {
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//         hamburger.setAttribute('aria-expanded', 'false');
//     });
// });
