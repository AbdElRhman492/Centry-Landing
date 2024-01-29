// ############### Scroll Up Btn ###############
let scrollUpBtn = document.getElementById("scroll_up");
// Show/hide the button based on the scroll position
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.bottom = "30px";
  } else {
    scrollUpBtn.style.bottom = "-100px";
  }
});
// Scroll to the top when the button is clicked
scrollUpBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// ############### Navbar Icon ###############
let navIcon = document.getElementById("navIcon");
let menu = document.getElementById("menu");
navIcon.addEventListener("click", () => {
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// ############### Active Class Navbar ###############
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".menu .item .link");

  function updateActiveSection() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      const top = section.offsetTop - 50; // Adjust for any additional offset
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Find the link with matching href and add active class
        const matchingLink = document.querySelector(
          `.menu .item .link[href="#${section.id}"]`
        );
        if (matchingLink) {
          matchingLink.classList.add("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveSection);
});

let nums = document.querySelectorAll(".wrapper .col .number");
let section = document.querySelector(".about");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 200 / goal);
}

// ############### Splide Library ###############
if (document.getElementById("splide")) {
  document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide("#splide", {
      type: "loop",
      drag: false,
      gap: 20,
      focus: "center",
      autoplay: true,
      rewind: (boolean = false),
      autoStart: (boolean = true),
      direction: "rtl",
      interval: 1000, // Set the auto-play interval in milliseconds
      pauseOnHover: true, // Set to true if you want to pause on hover
      autoWidth: (boolean = true),
      autoHeight: (boolean = true),
      pagination: (boolean = false),
      arrows: (boolean = false),
    });

    splide.mount();
  });
}
