const btn = document.querySelector("#bouttonControl")
const menu = document.querySelector('.menu')
const overlay = document.querySelector('.overlay')


btn.addEventListener('click', ()=>{
    menu.classList.toggle("reveal")
    overlay.classList.toggle("reveal")
})
window.addEventListener('scroll', (e)=>{
    console.log(e)
})
