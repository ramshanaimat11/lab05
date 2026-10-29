document.addEventListener("DOMContentLoaded", function () {

  // Display the current year in the footer
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Contact form email functionality
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name = document.getElementById("sender-name").value.trim();
      const email = document.getElementById("sender-email").value.trim();
      const message = document.getElementById("sender-message").value.trim();

      const subject = encodeURIComponent(
        "Portfolio contact from " + name
      );

      const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
      );

      window.location.href =
        "mailto:f25-adpcs-0012@qu.edu.pk?subject=" +
        subject + "&body=" + body;

    });
  }

});