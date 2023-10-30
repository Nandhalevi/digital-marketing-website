var slides = document.getElementsByClassName("slides");
var autoplays = document.getElementsByClassName("containers")[0].getAttribute("data-autoplay");
var l = slides.length;
var interval = 4000;
var set;

window.onload = function () {
    initialize();
    slides[0].style.opacity = "1";
}

function initialize() {
    if (autoplays === "true")
        set = setInterval(function () { next(); }, interval);
}

var count = 0;
function next() {
    clearInterval(set);
    slides[count].style.opacity = "0";
    count++;

    if (count == l) {
        count = 0;
        slides[count].style.opacity = "1";

    } else {
        slides[count].style.opacity = "1";

    }
    initialize()
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "none";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("Slides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "block";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "none";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 4000); // Change image every 2 seconds
// }


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function myFunctions(imgs) {
  var expandImg = document.getElementById("expandedImg1");
  var imgText = document.getElementById("imgtext1");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}