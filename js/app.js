function changeTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    changeTheThemeIcon()
    changeLinksColor()
}


function changeTheThemeIcon() {
    let changeIcon = document.querySelectorAll('.theme-mode');
    changeIcon.forEach(element => {
        element.classList.toggle('theme-mode-hidden');
    });
}


function changeLinksColor() {
    let linkColor = document.querySelectorAll('a');
    linkColor.forEach(element => {
        element.classList.toggle('dark-mode-link')
    });
}

document.querySelector('.toggle').addEventListener('click', () => {
    changeTheme()
})



// about tags

const tabLinks = document.querySelectorAll('.tab-link');
const tabLinksContent = document.querySelectorAll('.about-tab-content');

function openTab(tabName) {
    console.log(tabName)

    for (const tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }

    for (const tabContent of tabLinksContent) {
        tabContent.classList.remove('active-tab');
        console.log(tabContent);
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab')
}


// side menu

var sideMenu = document.getElementById('side-menu')

function openMenu() {
    console.log(sideMenu);
    sideMenu.style.right = '0';
}


function closeMenu() {
    sideMenu.style.right = '-200px';
}


// scroll effect
let sr = ScrollReveal({
    duration: 2500,
    distance: '60px'
})

sr.reveal('#header-main', { delay: 600 });
sr.reveal('#about-col-1', { origin: top, delay: 600 });
sr.reveal('#about-col-2', { delay: 600 });



//swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});




//sticky navbar

// window.onscroll = function() {myFunction()};
// var navbar = document.querySelector("nav");
// var sticky = navbar.offsetTop;
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky")
//     } else {
//       navbar.classList.remove("sticky");
//     }
//   }