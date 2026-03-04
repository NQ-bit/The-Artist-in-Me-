fetch("partials/navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
    highlightActivePage();
  });

function highlightActivePage() {
  const path = window.location.pathname.split("/").pop().replace(".html", "");
  const links = document.querySelectorAll(".navbar a");

  links.forEach(link => {
    if (link.getAttribute("data-page") === path) {
      link.classList.add("active");
    }
  });
}