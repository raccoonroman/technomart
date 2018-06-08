var btnBuy = document.querySelectorAll(".btn-buy");
var addedPopup = document.querySelector(".modal-added");
var addedClose = addedPopup.querySelector(".modal-close");
var btnContinue = addedPopup.querySelector(".btn-continue");
var overlay = document.querySelector(".modal-overlay");

for (var i = 0; i < btnBuy.length; i++) {
	btnBuy[i].addEventListener("click", function (evt) {
		evt.preventDefault();
		addedPopup.classList.add("modal-show");
		overlay.classList.add("modal-overlay-show");
	});
}

addedClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	addedPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show");
});

btnContinue.addEventListener("click", function (evt) {
	evt.preventDefault();
	addedPopup.classList.remove("modal-show");
	overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (addedPopup.classList.contains("modal-show")) {
			addedPopup.classList.remove("modal-show");
			overlay.classList.remove("modal-overlay-show");
		}
	}
});