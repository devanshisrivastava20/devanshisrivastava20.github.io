/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL COUNTER*/
sr.reveal('.counter__container', { interval: 200 });


/*SCROLL PROJECT*/
sr.reveal('.project__container', {});
sr.reveal('.project__img1', { interval: 200 });
sr.reveal('.project__img2', { interval: 200 });

/*SCROLL INTERESTS*/
sr.reveal('.interests_container', { interval: 200 });

/*SCROLL EXTRA-CURRICULARS*/
sr.reveal('.ex-box1', { interval: 200 }); 
sr.reveal('.ex-box2', { interval: 200 }); 

// jQuery counterUp
$('[data-toggle="counter-up"]').counterUp({
    delay: 4,
    time: 1000
});
