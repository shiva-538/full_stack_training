const carousel = document.querySelector('.carousel');
const inner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
const itemWidth = items[0].clientWidth;
let currentIndex = 0;

// Set initial position
inner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;

// Go to the previous slide
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  }
  inner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
});

// Go to the next slide
nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  inner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
});

// Duplicate the items to both ends
const firstItem = items[0].cloneNode(true);
const lastItem = items[items.length - 1].cloneNode(true);
inner.insertBefore(lastItem, items[0]);
inner.appendChild(firstItem);
