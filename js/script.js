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

var btnFeedback = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var nameField = popup.querySelector("[name=feedback-name-field]");
var emailField = popup.querySelector("[name=feedback-email-field]");

btnFeedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	overlay.classList.add("modal-overlay-show");
	nameField.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-feedback-error");
});

form.addEventListener("submit", function (evt) {
	if (!nameField.value || !emailField.value) {
		evt.preventDefault();
		popup.classList.remove("modal-feedback-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-feedback-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			overlay.classList.remove("modal-overlay-show");
			popup.classList.remove("modal-feedback-error");
		}
	}
});

var mapLink = document.querySelector(".map-small");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    overlay.classList.add("modal-overlay-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});