





function updateDownloadAttribute() {
  const download = document.getElementById("download-picture");

  if (window.innerWidth < 1100) {
    document.querySelectorAll("a > img.photos").forEach(img => {
      const anchor = img.parentNode;
      const column = anchor.parentNode;

      column.insertBefore(img, anchor);
      anchor.remove();
    });

    download.innerText = "";
  }
}

// Run on page load
updateDownloadAttribute();

// Run on window resize
window.addEventListener('resize', updateDownloadAttribute);

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

function mailingList(event) {
  event.preventDefault();

  let form = document.getElementById("mailingList"); // Form ID here should match HTML
  let button = form.querySelector("button"); // Get the button inside the form
  

  let templateParams = {
      email: document.getElementById("mailing-list-email").value,
  };

  emailjs.send("service_gj83vl5", "template_n8j33kz", templateParams)
      .then(response => {
          // Change button text to "Success!" and disable it
          button.textContent = "Success!";
          button.disabled = true;

          // Optional: clear the input field
          document.getElementById("mailing-list-email").value = "";
      })
      
}

document.getElementById("copy-short-bio").addEventListener("click", function () {
  const text = document.getElementById("short-bio-text").innerText;

  navigator.clipboard.writeText(text).then(() => {
    this.innerText = "Copied!";
    setTimeout(() => {
      this.innerText = "Copy bio";
    }, 2000);
  });
});

document.getElementById("copy-long-bio").addEventListener("click", function () {
  const text = document.getElementById("long-bio-text").innerText;

  navigator.clipboard.writeText(text).then(() => {
    this.innerText = "Copied!";
    setTimeout(() => {
      this.innerText = "Copy bio";
    }, 2000);
  });
});

document.querySelectorAll('.dropdown-custom > .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      this.parentElement.classList.toggle('active');
    }
  });
});