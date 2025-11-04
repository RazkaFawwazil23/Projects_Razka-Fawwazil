// Initialize and add the map
function initMap() {
  // The location (update with your actual location)
  var location = { lat: 3.51602, lng: -2.1969 };
  // The map, centered at location
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6c63ff" }],
      },
    ],
  });
  // The marker, positioned at location
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    animation: google.maps.Animation.DROP,
    title: "ElectroHub Store",
  });
}

// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Toggle menu for mobile
var MenuItems = document.getElementById("menu-items");
if (MenuItems) {
  MenuItems.style.maxHeight = "0px";
}

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px" || MenuItems.style.maxHeight == "") {
    MenuItems.style.maxHeight = "300px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation on scroll for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all product boxes
document.querySelectorAll(".box-container").forEach((box) => {
  box.style.opacity = "0";
  box.style.transform = "translateY(30px)";
  box.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(box);
});

// Cart functionality (basic)
document.addEventListener("DOMContentLoaded", function () {
  const cartImg = document.querySelector(".cart-img");
  if (cartImg) {
    cartImg.addEventListener("click", function () {
      alert("Cart feature coming soon!");
    });
  }
});
