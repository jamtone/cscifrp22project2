const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')

/* We have multiple navs so need to use querySelectorAll to 
 *grab the nav class of objects to  node list to loop through*/
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible')) /*Add class of visible*/ 

})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible')) /*Add class of visible*/ 

})

