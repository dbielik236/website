window.onload = function () {

  emailjs.init("Abm0b8RIpGS0ezhMr");

  document
    .getElementById("contact-form")
    .addEventListener("submit", sendEmail);
};

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

document.querySelectorAll('.dropdown-custom > .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      this.parentElement.classList.toggle('active');
    }
  });
});

const year = new Date().getFullYear();

document.querySelectorAll(".year").forEach(element => {
  element.textContent = year;
});