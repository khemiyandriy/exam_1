let offset = 0;
let count = 1;
const sliderLine = document.querySelector(".slider_line");
const sliderCounter = document.querySelector('.slider__counter');
sliderCounter.textContent = count + "/";

document.querySelector(".slider__next").addEventListener("click", function(){
    offset += 468;
    count = count + 1;
    if (offset > 1404){
        offset = 0;
        count = 1;
    }
    sliderLine.style.left = -offset + "px";
    sliderCounter.textContent = count + "/";
});
document.querySelector(".slider__prev").addEventListener("click", function(){
    offset -= 468;
    count = count - 1;
    if (offset < 0){
        offset = 1404;
        count = 4;
    }
    sliderLine.style.left = -offset + "px";
    sliderCounter.textContent = count + "/";
});