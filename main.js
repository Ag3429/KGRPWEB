
var link = document.getElementById("myLink");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("myPopup");
var checkbox = document.getElementById("rulesCheckbox");
var continueButton = document.getElementById("continueButton");

var cancelButton = document.getElementById("cancelButton");
var eventPopupLink = document.getElementById("eventPopupLink");
var popupOverlay = document.querySelector(".pop_over");
var popupContent = document.querySelector(".pop_cont");
var cancelButton = document.querySelector(".popup-cancel");
var continueButton = document.querySelector(".popup-continue");

var header = document.getElementById("header1");
var nav = document.getElementsByTagName("nav")

addEventListener("scroll", function (e){
  var scrollx =window.scrollY;
  if(scrollx >= 500)
  {
    header.classList.add("onscroll");
  }
  else{
    header.classList.remove("onscroll");
  }
});


cancelButton.addEventListener("click", function (e) {
  // e.preventDefault();
  console.log('done');
  overlay.style.display = "none";
  popup.style.display = "none";
});

link.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.style.display = "block";
  popup.style.display = "block";
});



checkbox.addEventListener("change", function () {
  continueButton.disabled = !checkbox.checked;
});

continueButton.addEventListener("click", function () {
  var linkUrl =
    "https://discord.com/channels/971697340450754590/1016564708133851218"; // Replace with your desired link URL
  window.open(linkUrl);
});

eventPopupLink.addEventListener("click", function (e) {
  e.preventDefault();
  popupOverlay.style.display = "block";
  popupContent.style.display = "block";
});

cancelButton.addEventListener("click", function () {
  popupOverlay.style.display = "none";
  popupContent.style.display = "none";
});

continueButton.addEventListener("click", function () {
  window.location.href =
    "https://discord.com/channels/971697340450754590/1072153104000229396";
});

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 1, // values from 0 to 3000, with step 50ms
  duration:350, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

