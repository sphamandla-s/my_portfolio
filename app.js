const tabLinks = document.querySelectorAll('.tab-link');
const skills = document.querySelector('#skill-tab');
const education = document.querySelector('#education-tab');
const experience = document.querySelector('#experience-tab');


skills.addEventListener('click', () => {
    //skills.classList.remove('active-link')
    openTab('skill')
})

education.addEventListener('click', () => {
    openTab('education')
})

experience.addEventListener('click', () => {
    openTab('experience')
})


function openTab(clicked) {
    switch (clicked) {
        case 'skill':
            skills.classList.add('active-link');
            education.classList.remove('active-link');
            experience.classList.remove('active-link');
            document.querySelector('#skills').classList.add('active-tab');
            document.querySelector('#education').classList.remove('active-tab');
            document.querySelector('#experience').classList.remove('active-tab');
            break;
        case 'education':
            education.classList.add('active-link');
            skills.classList.remove('active-link');
            experience.classList.remove('active-link');
            document.querySelector('#skills').classList.remove('active-tab');
            document.querySelector('#education').classList.add('active-tab');
            document.querySelector('#experience').classList.remove('active-tab');
            break;

        case 'experience':
            experience.classList.add('active-link');
            education.classList.remove('active-link');
            skills.classList.remove('active-link');
            document.querySelector('#skills').classList.remove('active-tab');
            document.querySelector('#education').classList.remove('active-tab');
            document.querySelector('#experience').classList.add('active-tab');
            break;

        default:
            break;
    }
}



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });