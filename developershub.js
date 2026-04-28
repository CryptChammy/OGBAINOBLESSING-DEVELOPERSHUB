function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
});

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Meeting booked successfully!");
});
