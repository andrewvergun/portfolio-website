document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("myHeader");

  // Listen for the scroll event
  window.addEventListener("scroll", function () {
    // Add a shadow class when the user has scrolled down
    if (window.scrollY > 0) {
      header.classList.add("shadow");
    } else {
      header.classList.remove("shadow");
    }
  });
});
