// var currentSlide = 0;
// var sliderInterval = setInterval(nextSlide, 3000);

// function nextSlide() {
//   var slides = document.getElementById("slider").getElementsByTagName("img");
//   slides[currentSlide].style.display = "none";
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].style.display = "block";
// }

// function prevSlide() {
//   var slides = document.getElementById("slider").getElementsByTagName("img");
//   slides[currentSlide].style.display = "none";
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   slides[currentSlide].style.display = "block";
// }
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides").children;
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let index = 0;

// Clone first and last slide
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

// Add cloned slides to slider
slider.appendChild(firstClone);
slider.appendChild(lastClone);

// Set initial position of slides
for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = i * 100 + "%";
}

// Move to next slide
function nextSlide() {
  if (index >= slides.length - 1) return;
  index++;
  slider.style.transform = "translateX(" + (-index * slides[0].offsetWidth) + "px)";
}

// Move to previous slide
function prevSlide() {
  if (index <= 0) return;
  index--;
  slider.style.transform = "translateX(" + (-index * slides[0].offsetWidth) + "px)";
}

// Event listeners for arrows
rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);
