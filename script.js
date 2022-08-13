

var slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
console.log(dots.length, dots);

showSlides(slideIndex);
function plusSlides(n){
    slideIndex += n
    if (slideIndex > dots.length){ slideIndex = 1 }
    if (slideIndex <= 0){ slideIndex = dots.length}
    showSlides(slideIndex );

}

function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;



    for(i=0; i <slides.length; i++){
        slides[i].style.display= "none";
    }
    for (i = 0; i<dots.length; i++){
        dots[i].className= dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className.replace(" ","active");
    dots[slideIndex-1].classList.add("active")

}