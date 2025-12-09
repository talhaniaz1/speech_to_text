// Get references to elements
// const menuIcon = document.getElementById('menuIcon');
// const navLinks = document.getElementById('navLinks');

// // Add event listener for the menu icon
// menuIcon.addEventListener('click', function() {
//   // Toggle the active class on nav links
//   navLinks.classList.toggle('active');
// });
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navbarContainer = document.getElementById("navbar-container");
let isOpen = false;

// Add event listener for the toggle button
menuToggle.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    navbarContainer.classList.add("nav-open");
    menuToggle.innerHTML = '<i class="fas fa-times"></i>'; // Cross icon
  } else {
    navbarContainer.classList.remove("nav-open");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
  }
});
// Add dropdown functionality
const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown.querySelector("a");

dropdownLink.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default link behavior
  dropdown.classList.toggle("open"); // Toggle the open class
});
// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  // Check if the clicked target is outside the dropdown
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
});
//  Accordian Header
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", function () {
    const accordionItem = this.parentElement;

    // Toggle the active class
    accordionItem.classList.toggle("active");

    // Close other accordions when one is opened
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem && item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
  });
});
// swiper functionality
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,  // Center the active slide
  loop: true,  // Enable loop mode
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // Desktop view
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
      loop: false,
    },
    // Tablet view
    768: {
      slidesPerView: 2.5,
      centeredSlides: true,
    },
    // Mobile view
    320: {
      slidesPerView: 1.3,
      centeredSlides: true,
    },
  },
});
var swiper = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  slidesPerView: 3.7,
  loop: true,
  initialSlide: 0,
  spaceBetween: 35,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

