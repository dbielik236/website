window.onload = function () {

  emailjs.init("Abm0b8RIpGS0ezhMr");

  // YGAF form
  const ygafForm = document.getElementById("YGAF-form");

  if (ygafForm) {
    ygafForm.addEventListener("submit", sendYGAFEmail);
  }

  // Contact form
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", sendEmail);
  }
};


// ==============================
// YGAF FORM
// ==============================

function sendYGAFEmail(event) {

  event.preventDefault();

  let form = document.getElementById("YGAF-form");
  let responseMessage = document.getElementById("ygaf-response-message");

  let templateParams = {
    name: document.getElementById("ygaf-name").value,
    email: document.getElementById("ygaf-email").value,
    organization: document.getElementById("ygaf-org").value,
    location: document.getElementById("ygaf-location").value,
    message: document.getElementById("ygaf-message").value
  };

  emailjs
    .send("service_gj83vl5", "template_n8j33kz", templateParams)
    .then(function(response) {

      form.style.display = "none";
      responseMessage.style.display = "block";

      console.log("SUCCESS!", response);

    })
    .catch(function(error) {

      console.log("FAILED...", error);

      responseMessage.innerHTML =
        "<p style='color:red;'>Error sending email. Please try again.</p>";

      responseMessage.style.display = "block";
    });
}


// ==============================
// CONTACT FORM
// ==============================

function sendEmail(event) {

  event.preventDefault();

  let form = document.getElementById("contact-form");
  let responseMessage = document.getElementById("response-message");

  let templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    type: document.getElementById("type").value,
    location: document.getElementById("location").value,
    date: document.getElementById("date").value,
    count: document.getElementById("count").value,
    message: document.getElementById("message").value
  };

  emailjs
    .send("service_gj83vl5", "template_h8vmcw1", templateParams)
    .then(function(response) {

      form.style.display = "none";
      responseMessage.style.display = "block";

      console.log("SUCCESS!", response);

    })
    .catch(function(error) {

      console.log("FAILED...", error);

      responseMessage.innerHTML =
        "<p style='color:red;'>Error sending email. Please try again.</p>";

      responseMessage.style.display = "block";
    });
}

// Nav display for events
document.querySelectorAll('.dropdown-custom > .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      this.parentElement.classList.toggle('active');
    }
  });
});


// Gets current year for Copyright in footer
const year = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});


// calendar full schedule button
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("togglePastEvents");
  const pastEvents = document.getElementById("past-events");

  button.addEventListener("click", function () {
    
    pastEvents.style.display = "block";
    this.style.display = "none";
  });
});