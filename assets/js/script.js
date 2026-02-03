document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const collapseEl = document.getElementById("navbarNav");

  if (toggler && collapseEl) {
    collapseEl.addEventListener("show.bs.collapse", () => {
      toggler.classList.add("active");
    });

    collapseEl.addEventListener("hide.bs.collapse", () => {
      toggler.classList.remove("active");
    });

    document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        const instance = bootstrap.Collapse.getOrCreateInstance(collapseEl);
        instance.hide();
      });
    });
  }

  let filterButtons = document.querySelectorAll(".filter-btn");
  let cards = document.querySelectorAll(".cards-work");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let filter = button.getAttribute("data-filter");
      cards.forEach((card) => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});

function sendEmail() {
  var email = document.getElementById("email").value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    alert("Por favor, digite seu email.");
    return;
  }

  if (emailRegex.test(email)) {
    var mailtoLink =
      "mailto:gersondouglas2011@gmail.com?subject=Contato&body=Olá, Gerson Lima%0D%0A%0D%0ATenho interesse no seu trabalho gostaria de te propor o seguinte:%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A";
    mailtoLink += "At.te, %0D%0A%0D%0A" + email + "%0D%0A%0D%0A";
    window.open(mailtoLink);
    return;
  }

  alert("Por favor, digite um email válido.");
}