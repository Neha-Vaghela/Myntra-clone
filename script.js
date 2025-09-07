function createCarousel(containerSelector, images, itemsPerSlide, interval = 4000) {

  const container = document.querySelector(containerSelector);
  const track = container.querySelector(".carousel-track");
  const leftArrow = container.querySelector(".arrow.left");
  const rightArrow = container.querySelector(".arrow.right");

  // Clear old content (in case reused)
  track.innerHTML = "";

  // Add images dynamically
  // Add images dynamically
  images.forEach(src => {
    const item = document.createElement("div");
    item.classList.add("carousel-item");

    //  set width based on itemsPerSlide
    item.style.flex = `0 0 ${100 / itemsPerSlide}%`;

    item.innerHTML = `<img src="${src}" alt="carousel image">`;
    track.appendChild(item);
  });


  const totalSlides = Math.ceil(images.length / itemsPerSlide);
  let index = 0;

  // Dots container
  let dotsContainer = container.querySelector(".carousel-dots");
  if (dotsContainer) dotsContainer.remove(); // reset if exists
  dotsContainer = document.createElement("div");
  dotsContainer.classList.add("carousel-dots");
  container.appendChild(dotsContainer);

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll("span");

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function updateCarousel() {
    track.style.transform = `translateX(${-index * 100}%)`;
    updateDots();
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  rightArrow.addEventListener("click", nextSlide);
  leftArrow.addEventListener("click", prevSlide);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });
  });

  setInterval(nextSlide, interval);
}
createCarousel(".carousel-container", [
  "./assest/carousel_img_1.webp",
  "./assest/carousel_img_2.webp",
  "./assest/carousel_img_3.webp",
  "./assest/carousel_img_4.webp",
  "./assest/carousel_img_5.webp",
  "./assest/carousel_img_6.webp",
  "./assest/carousel_img_7.webp",
  "./assest/carousel_img_8.webp",
  "./assest/carousel_img_9.webp",
  "./assest/carousel_img_10.webp",
  "./assest/carousel_img_11.webp",
  "./assest/carousel_img_12.webp"
], 6);

// If you have another carousel on page
createCarousel(".deal-sub-img", [
  "./assest/deal_img_1.webp",
  "./assest/deal_img_2.webp",
  "./assest/deal_img_3.webp",
  "./assest/deal_img_4.webp",
  "./assest/deal_img_5.webp",
  "./assest/deal_img_6.webp",
  "./assest/deal_img_7.webp",
  "./assest/deal_img_8.webp",
  "./assest/deal_img_9.webp",
  "./assest/deal_img_10.webp",
  "./assest/deal_img_11.webp",
  "./assest/deal_img_12.webp"
], 4); // 4 per slide, auto change every 5 sec

function createCategory(images) {
  const category_images = document.querySelector(".category-images");

  category_images.innerHTML = "";

  images.forEach(src => {
    // item.style.flex = `0 0 ${100 / itemsPerSlide}%`;
    const item = document.createElement("img");
    item.src=src;
    item.alt = "category image"; 
    category_images.appendChild(item);
  });
}
createCategory([
  "./assest/category_1.webp",
  "./assest/category_2.webp",
  "./assest/category_3.webp",
  "./assest/category_4.webp",
  "./assest/category_5.webp",
  "./assest/category_6.webp",
  "./assest/category_7.webp",
  "./assest/category_8.webp",
  "./assest/category_9.webp",
  "./assest/category_10.webp",
  "./assest/category_11 (2).webp",
  "./assest/category_12 (2).webp",
  "./assest/category_11.webp",
  "./assest/category_12.webp",
  "./assest/category_13.webp"
])

