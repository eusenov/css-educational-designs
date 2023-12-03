$(document).ready(function(){
    $('.slider').slick({
        arrows: false
    });
    $('.slider__2').slick({
        arrows: false
    });
});

let firstScreenButton = document.querySelector('#firstScreenButton')
let secondScreenContentLeft = document.querySelector('.secondScreen .content .top .left')
let childNodes = secondScreenContentLeft.childNodes;
console.log(childNodes);

firstScreenButton.addEventListener('click', (event)=>{
    console.log(event.target.href);
    event.preventDefault(); 
})

