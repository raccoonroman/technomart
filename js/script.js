var slideIndex = 1;
showSlides(slideIndex);
showServicesSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function currentServiceSlide(n) {
    showServicesSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex"; 
    dots[slideIndex-1].className += " active";
}

function showServicesSlides(n) {
    var i;
    var servicesSlides = document.getElementsByClassName("services-slider-item");
    var servicesLink = document.getElementsByClassName("services-link");
    for (i = 0; i < servicesSlides.length; i++) {
        servicesSlides[i].style.display = "none"; 
    }
    for (i = 0; i < servicesLink.length; i++) {
        servicesLink[i].className = servicesLink[i].className.replace(" active", "");
    }
    servicesSlides[slideIndex-1].style.display = "block"; 
    servicesLink[slideIndex-1].className += " active";
}
