const left = document.querySelector('.left')
const right = document.querySelector('.right')
//classes are added to and removed from side containers
const container = document.querySelector('.container')

/* Add listener to detect move of mouse to hover on left side 
panel and same dynamic action for right panel
dynamically call and add hover-left class to container
add event listener for when mouse moves from left panel to then 
remover 'hover-left' class from 'container' and vice versa for hover-left */

//hover-left
left.addEventListener('mouseenter',()=>container.classList.add('hover-left'))
left.addEventListener('mouseleave', ()=>container.classList.remove('hover-left'))

//hover-right
right.addEventListener('mouseenter',()=>container.classList.add('hover-right'))
right.addEventListener('mouseleave', ()=>container.classList.remove('hover-right'))

