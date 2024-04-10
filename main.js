window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});


function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang]');
  elements.forEach(element => {
      if (lang === 'en') {
          element.textContent = element.dataset.en;
      } else if (lang === 'fa') {
          element.textContent = element.dataset.fa;
      }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  var swiper = new Swiper('.pricing__table', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      991: {
        slidesPerView: 'auto',
      }
    },
    navigation: {
      nextEl: '#pricing-card-right',
      prevEl: '#pricing-card-left',
    },
  });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("navbar-active");
    } else {
        document.getElementById("navbar").classList.remove("navbar-active");
    }
}




const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__container a", {
  ...scrollRevealOption,
  delay: 1500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});


var countDownDate = new Date("April 10, 2024 00:00:00").getTime();

// Update the countdown every second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();

  // Find the time remaining between now and the countdown date
  var timeRemaining = countDownDate - now;

  // Calculate days, hours, minutes and seconds remaining
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);



// Pricing table - mobile only slider
var init = false;
var pricingCardSwiper;
var pricingLoanSwiper
function swiperCard() {
  if (window.innerWidth <= 991) {
    if (!init) {
      init = true;
      pricingCardSwiper = new Swiper("#pricing-card-slider", {
        slidesPerView: "auto",
        spaceBetween: 0,
        grabCursor: true,
        keyboard: true,
        autoHeight: false,
        navigation: {
          nextEl: "#pricing-card-right",
          prevEl: "#pricing-card-left",
        },
      });
    }
  } else if (init) {
    pricingCardSwiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

var init = false;
var pricingCardSwiper;
var pricingLoanSwiper
function swiperCard() {
  if (window.innerWidth <= 991) {
    if (!init) {
      init = true;
      pricingCardSwiper = new Swiper("#pricingTableSlider", {
        slidesPerView: "auto",
        spaceBetween: 5,
        grabCursor: true,
        keyboard: true,
        autoHeight: false,
        navigation: {
          nextEl: "#navBtnRight",
          prevEl: "#navBtnLeft",
        },
      });
    }
  } else if (init) {
    pricingCardSwiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);