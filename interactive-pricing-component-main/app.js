const range = document.querySelector('.range-slider');
const slider = document.querySelector('.slider');
const price = document.querySelector('.value-price');
const viwe = document.querySelector('.value-viwe');
const discount = document.querySelector('.to-btn');
const disShow = document.querySelector('.discount');

window.addEventListener('DOMContentLoaded', ()=>{
    let slideWidth = range.value* 100 / 1000 ;
    slider.style.width = `${slideWidth}%`
})
let p1 = 8;
let p2 = 12;
let p3 = 16; 
let p4 = 24;
let p5 = 36;
let prVal = p3;
range.addEventListener('input', function(){
    let slideWidth;
    let val = range.value;
    
    if(range.value <= 100){
        slideWidth = val* 100 / 1000  ;
    }else{
        slideWidth = val* 100 / 1000 -5 ;
    }
    slider.style.width = `${slideWidth}%`
    viwe.innerHTML = `${val}k`
    if(val <= 10 ){
        prVal = p1;
    }else if(val <= 50){
        prVal = p2;
    }else if(val <= 100){
        prVal = p3;
    }else if(val <= 500){
        prVal = p4;
    }else if(val <= 1000){
        prVal = p5;
        viwe.innerHTML = `1M`
    };price.innerHTML = `$${prVal}.00`
});
discount.addEventListener('input', ()=>{
    
    disShow.classList.toggle('showDis');
    if(disShow.classList.contains('showDis')){
        p1 = 2;
        p2 = 3;
        p3 = 4;
        p4 = 6;
        p5 = 9;
        
    }else{
        p1 = 8;
        p2 = 12;
        p3 = 16; 
        p4 = 24;
        p5 = 36;
    };price.innerHTML = `$${p3}.00`;
});